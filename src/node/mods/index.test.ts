import { assert, test } from "@hazae41/phobos";
import { Ed25519Signature, Ed25519SigningKey, Ed25519VerifyingKey, initBundled, Memory } from "./index.js";

function equals(a: Uint8Array, b: Uint8Array) {
  return Buffer.from(a).equals(Buffer.from(b))
}

function assertEd25519Keypair(keypair: Ed25519SigningKey) {
  const bytes = keypair.to_bytes()
  const bytes2 = Ed25519SigningKey.from_bytes(bytes).to_bytes()

  assert(equals(bytes.bytes, bytes2.bytes), `keypair.to_bytes serialization`)
}

function assertEd25519PublicKey(identity: Ed25519VerifyingKey) {
  const bytes = identity.to_bytes()
  const bytes2 = Ed25519VerifyingKey.from_bytes(bytes).to_bytes()

  assert(equals(bytes.bytes, bytes2.bytes), `identity.to_bytes serialization`)
}

function assertEd25519Signature(signature: Ed25519Signature) {
  const bytes = signature.to_bytes()
  const bytes2 = Ed25519Signature.from_bytes(bytes).to_bytes()

  assert(equals(bytes.bytes, bytes2.bytes), `signature.to_bytes serialization`)
}

test("Ed25519", async () => {
  await initBundled()

  const hello = new TextEncoder().encode("hello world")
  const mhello = new Memory(hello)

  const keypair = new Ed25519SigningKey()
  const identity = keypair.verifying_key()

  assertEd25519Keypair(keypair)
  assertEd25519PublicKey(identity)

  const signature = keypair.sign(mhello)

  assertEd25519Signature(signature)

  assert(identity.verify(mhello, signature), `signature should be verified`)
})
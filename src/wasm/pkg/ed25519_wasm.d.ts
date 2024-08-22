/* tslint:disable */
/* eslint-disable */
/**
*/
export class Ed25519Signature {
  [Symbol.dispose](): void;
/**
* @param {Memory} bytes
*/
  constructor(bytes: Memory);
/**
* @param {Memory} bytes
* @returns {Ed25519Signature}
*/
  static from_bytes(bytes: Memory): Ed25519Signature;
/**
* @returns {Memory}
*/
  to_bytes(): Memory;
}
/**
*/
export class Ed25519SigningKey {
  [Symbol.dispose](): void;
/**
*/
  constructor();
/**
* @returns {Ed25519SigningKey}
*/
  static random(): Ed25519SigningKey;
/**
* @param {Memory} bytes
* @returns {Ed25519SigningKey}
*/
  static from_bytes(bytes: Memory): Ed25519SigningKey;
/**
* @returns {Memory}
*/
  to_bytes(): Memory;
/**
* @returns {Ed25519VerifyingKey}
*/
  public(): Ed25519VerifyingKey;
/**
* @param {Memory} bytes
* @returns {Ed25519Signature}
*/
  sign(bytes: Memory): Ed25519Signature;
}
/**
*/
export class Ed25519VerifyingKey {
  [Symbol.dispose](): void;
/**
* @param {Memory} bytes
*/
  constructor(bytes: Memory);
/**
* @param {Memory} bytes
* @returns {Ed25519VerifyingKey}
*/
  static from_bytes(bytes: Memory): Ed25519VerifyingKey;
/**
* @returns {Memory}
*/
  to_bytes(): Memory;
/**
* @param {Memory} bytes
* @param {Ed25519Signature} signature
* @returns {boolean}
*/
  verify(bytes: Memory, signature: Ed25519Signature): boolean;
}
/**
*/
export class Memory {
  [Symbol.dispose](): void;
/**
* @param {Uint8Array} inner
*/
  constructor(inner: Uint8Array);
/**
* @returns {number}
*/
  ptr(): number;
/**
* @returns {number}
*/
  len(): number;
/**
* @returns {Uint8Array}
*/
  get bytes(): Uint8Array;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_ed25519signingkey_free: (a: number, b: number) => void;
  readonly ed25519signingkey_new: () => number;
  readonly ed25519signingkey_from_bytes: (a: number, b: number) => void;
  readonly ed25519signingkey_to_bytes: (a: number) => number;
  readonly ed25519signingkey_public: (a: number) => number;
  readonly ed25519signingkey_sign: (a: number, b: number) => number;
  readonly __wbg_ed25519signature_free: (a: number, b: number) => void;
  readonly ed25519signature_new: (a: number, b: number) => void;
  readonly ed25519signature_from_bytes: (a: number, b: number) => void;
  readonly ed25519signature_to_bytes: (a: number) => number;
  readonly __wbg_ed25519verifyingkey_free: (a: number, b: number) => void;
  readonly ed25519verifyingkey_from_bytes: (a: number, b: number) => void;
  readonly ed25519verifyingkey_to_bytes: (a: number) => number;
  readonly ed25519verifyingkey_verify: (a: number, b: number, c: number) => number;
  readonly __wbg_memory_free: (a: number, b: number) => void;
  readonly memory_new: (a: number, b: number) => number;
  readonly memory_ptr: (a: number) => number;
  readonly memory_len: (a: number) => number;
  readonly ed25519signingkey_random: () => number;
  readonly ed25519verifyingkey_new: (a: number, b: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;

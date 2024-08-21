export * from "../../wasm/pkg/ed25519_dalek_wasm.js";

import init from "../../wasm/pkg/ed25519_dalek_wasm.js";
import { data } from "../../wasm/pkg/ed25519_dalek_wasm.wasm.js";

export async function initBundled() {
  return await init({ module_or_path: data })
}

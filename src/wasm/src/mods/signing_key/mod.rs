use wasm_bindgen::prelude::*;

use crate::Ed25519Signature;
use crate::Ed25519VerifyingKey;

use memory_wasm::Memory;

#[wasm_bindgen]
pub struct Ed25519SigningKey {
    pub(crate) inner: ed25519_dalek::SigningKey,
}

#[wasm_bindgen]
impl Ed25519SigningKey {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self::random()
    }

    #[wasm_bindgen]
    pub fn random() -> Self {
        let inner = ed25519_dalek::SigningKey::generate(&mut rand_core::OsRng {});

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn from_bytes(bytes: &Memory) -> Result<Ed25519SigningKey, JsError> {
        let sized: &[u8; 32] = bytes
            .inner
            .as_slice()
            .try_into()
            .map_err(|_| JsError::new("Ed25519SigningKey::from_bytes"))?;

        let inner = ed25519_dalek::SigningKey::from_bytes(sized);

        Ok(Self { inner })
    }

    #[wasm_bindgen]
    pub fn from_keypair_bytes(bytes: &Memory) -> Result<Ed25519SigningKey, JsError> {
        let sized: &[u8; 64] = bytes
            .inner
            .as_slice()
            .try_into()
            .map_err(|_| JsError::new("Ed25519SigningKey::from_keypair_bytes"))?;

        let rkeypair = ed25519_dalek::SigningKey::from_keypair_bytes(sized);
        let inner = rkeypair.map_err(|_| JsError::new("Ed25519SigningKey::from_keypair_bytes"))?;

        Ok(Self { inner })
    }

    #[wasm_bindgen]
    pub fn to_bytes(&self) -> Memory {
        Memory::new(self.inner.to_bytes().to_vec())
    }

    #[wasm_bindgen]
    pub fn to_keypair_bytes(&self) -> Memory {
        Memory::new(self.inner.to_keypair_bytes().to_vec())
    }

    #[wasm_bindgen]
    pub fn verifying_key(&self) -> Ed25519VerifyingKey {
        let inner = self.inner.verifying_key();

        Ed25519VerifyingKey { inner }
    }

    #[wasm_bindgen]
    pub fn sign(&self, bytes: &Memory) -> Ed25519Signature {
        use ed25519_dalek::Signer;

        let inner = self.inner.sign(&bytes.inner);

        Ed25519Signature { inner }
    }
}

/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ALLOW_INDEXING?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_DEPLOY_URL: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

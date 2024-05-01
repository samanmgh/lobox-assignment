/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_BASE_URL_V1: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
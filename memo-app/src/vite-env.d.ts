/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly VITE_SUPABASE_URL:string;
    readonly VITE_SUPABASE_KEY:string;
    // 다른 환경 변수들에 대한 타입 정의...
}
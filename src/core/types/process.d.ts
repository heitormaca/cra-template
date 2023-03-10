declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv extends NodeJS.ProcessEnv {
        REACT_APP_API_URL: string;
        REACT_APP_GITHUB_URL: string;
      }
    }
  }
}

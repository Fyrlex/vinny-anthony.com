declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STRIPE_LIVE_KEY: string;
      STRIPE_PUBLISHABLE_KEY: string;
    }
  }
}

export {};

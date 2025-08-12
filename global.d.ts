declare global {
   declare module "*.ttf" {
      const content: string;
      export default content;
   }

   interface APIResponseResult<T> {
      users: T;
      message: string;
   }

   interface AbortController {
      readonly signal: AbortSignal;
   }
}

export {};

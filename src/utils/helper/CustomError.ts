class CustomError extends Error {
   public readonly code?: string;
   public readonly status?: number;
   public readonly data?: Record<string, unknown>;

   constructor(
      message: string,
      options: {
         code?: string;
         status?: number;
         data?: Record<string, unknown>;
         cause?: unknown;
      },
   ) {
      super(message, { cause: options.cause });
      Object.setPrototypeOf(this, new.target.prototype);
      this.name = this.constructor.name;
      this.code = options.code;
      this.status = options.status;
      this.data = options.data;
   }
   toJSON() {
      return {
         name: this.name,
         message: this.message,
         code: this.code,
         data: this.data,
         stack: this.stack,
      };
   }
   static fromError(
      error: unknown,
      message = "An error occrred",
      options: {
         code?: string;
         status: number;
         data?: Record<string, unknown>;
         cause?: unknown;
      },
   ): CustomError {
      return new CustomError(message, {
         ...options,
         cause: error instanceof Error ? error : undefined,
      });
   }
}

export default CustomError;

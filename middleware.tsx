import handleMiddleware from "@/src/middleware/middlewareHandler";
import { NextRequest, NextResponse } from "next/server";
export const config = {
   matcher: ["/", "/career"],
};
export function middleware(request: NextRequest) {
   return handleMiddleware(request, NextResponse.next());
}

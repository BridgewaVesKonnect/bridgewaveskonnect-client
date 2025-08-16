import { NextRequest, NextResponse } from "next/server";

const handleMiddleware = async (request: NextRequest, response: NextResponse) => {
   return response;
};

export default handleMiddleware;

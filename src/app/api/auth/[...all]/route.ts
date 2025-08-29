import { auth } from "@/lib/auth";

export const GET = (request: Request) => auth.handler.GET(request);
export const POST = (request: Request) => auth.handler.POST(request);

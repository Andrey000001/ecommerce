import { auth } from "@/lib/auth";

export const GET = auth.handler as (request: Request) => Promise<Response>;
export const POST = auth.handler as (request: Request) => Promise<Response>;

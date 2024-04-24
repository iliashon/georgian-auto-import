import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const middleware = createMiddleware({
    locales: ["en", "ru"],
    defaultLocale: "en",
});

export default middleware;

export const config = {
    matcher: ["/", "/(en|ru)/:path*"],
};

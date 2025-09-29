"use server";

import { NextRequest, NextResponse } from "next/server";
import { i18n, LanguageType } from "./i18n.config";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher"

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => negotiatorHeaders[key] = value)

    const locales: LanguageType[] = i18n.locales;
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

    let locale = '';

    try {
        locale = matchLocale(languages, locales, i18n.defaultLocale);
    } catch (error) {
        locale = i18n.defaultLocale;
    }

    return locale;
}

export async function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("x-url", request.url);

    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}`)
    )

    if (pathnameHasLocale) {
        const locale = getLocale(request)
        return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
    }


    return NextResponse.next({
        request: {
            headers: requestHeaders
        }
    })
}


export const config = {
    // Matcher ignoring `/_next/`, `/api/`, ..etc
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
    ],
};
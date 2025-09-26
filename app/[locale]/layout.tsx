import type { Metadata } from "next";
import { Cairo, Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { Directions, Languages } from "@/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  preload: true,
})

export const metadata: Metadata = {
  title: "Kerolos Khairy",
  description: "Kerolos Khairy Portfolio",
};

export async function generateStaticParams() {
  return [{ locale: Languages.ENGLISH }, { locale: Languages.ARABIC }]
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Languages.ENGLISH | Languages.ARABIC }>
}>) {
  const locale = (await params).locale;
  return (
    <html suppressHydrationWarning className="scroll-smooth"
      lang={locale}
      dir={locale === Languages.ARABIC ? Directions.RTL : Directions.LTR}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

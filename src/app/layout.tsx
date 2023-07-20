import "@/styles/globals.scss";
import type { Metadata } from "next";
import AppThemeProvider from "@/components/AppThemeProvider";
import SiteHeader from "@/components/organisms/SiteHeader/SiteHeader";
import SiteFooter from "@/components/organisms/SiteFooter/SiteFooter";
export const metadata: Metadata = {
  title: "Few Dev Test",
  description: "Developer test for Few",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </head>
      <body>
        <SiteHeader />
        <AppThemeProvider>{children}</AppThemeProvider>
        <SiteFooter />
      </body>
    </html>
  );
}

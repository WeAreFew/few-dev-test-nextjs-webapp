import "@/styles/globals.scss";
import type { Metadata } from "next";
import AppThemeProvider from "@/components/AppThemeProvider";
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
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RHAI Nav Quickstart",
  description: "Red Hat AI Navigation Quickstart",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-redhat min-h-screen bg-white text-rh-black dark:bg-rh-black dark:text-white transition-colors">
        {children}
      </body>
    </html>
  );
}

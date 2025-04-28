import type { Metadata } from "next";
import { QueryProvider } from "@/@root";
import "@/@root/styles/global.css";

export const metadata: Metadata = {
  title: "Enduro 18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

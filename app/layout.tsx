import "./globals.css";
import { headers } from "next/headers";
import { miriam_libre } from "@/app/ui/fonts";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const locale = headersList.get("x-locale") || "en";

  return (
    <html lang={locale}>
      <body className={miriam_libre.className}>{children}</body>
    </html>
  );
}

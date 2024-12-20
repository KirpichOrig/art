import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Art",
  description: "Generated by Danil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children} {/* Добавлено: это позволит отображать содержимое страницы */}
      </body>
    </html>
  );
}
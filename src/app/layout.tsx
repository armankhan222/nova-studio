import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nova Studio",
    template: "%s | Nova Studio",
  },
  description:
    "The AI Design Workspace for reviewing interfaces, generating prompts, and improving UX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
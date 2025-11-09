import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "Leveraged Legends - Master Leveraged Trading",
  description: "Master leveraged trading in a social, simulated sandbox on Base",
  openGraph: {
    title: "Leveraged Legends",
    description: "Master leveraged trading in a social, simulated sandbox on Base",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="base">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

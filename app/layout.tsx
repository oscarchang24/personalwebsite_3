import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yu — Game Designer / 3D Artist / AI Designer",
  description: "遊戲企劃、3D 角色與場景設計、AI 設計作品集。",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}

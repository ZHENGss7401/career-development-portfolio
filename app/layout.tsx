import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "郑惠跃｜个人职业发展档案",
  description: "AI 内容生产、新媒体运营、项目流程设计与独立站实践。",
  icons: {
    icon: "favicon.svg",
    shortcut: "favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

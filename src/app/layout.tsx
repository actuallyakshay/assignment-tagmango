import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
});

export const metadata: Metadata = {
  title: "BackstagePass – 9-Day Fitness Challenge",
  description: "Track your daily fitness challenge progress",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={beVietnamPro.variable}>
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="font-(family-name:--font-be-vietnam)">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

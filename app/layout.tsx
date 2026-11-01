import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shruti Kishor Shelar | Software Developer",
  description: "Portfolio of Shruti Kishor Shelar, Computer Science and Engineering student and aspiring software developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

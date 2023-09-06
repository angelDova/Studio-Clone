import RootLayout from "@/components/RootLayout";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "Studio Clone",
    default: "Studio Website - A site to make you famous",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}

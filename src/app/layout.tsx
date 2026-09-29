import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Precast Molds & Precast Forms | Steel Concrete Molds Made in the USA",
  description: "We make heavy-duty steel molds and forms for precast concrete. From manholes and catch basins to retaining wall blocks and custom shapes — built tough for everyday use in your concrete plant.",
  keywords: "precast concrete molds, concrete forms, steel molds, manhole molds, catch basin molds, retaining wall molds, custom concrete molds, precast manufacturing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${jakarta.variable}`} suppressHydrationWarning>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

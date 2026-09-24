import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "MOB SALES | Precast Concrete Forms & Molds",
  description: "Precision-engineered precast concrete forms and molds for demanding production. Custom precast concrete mold manufacturer delivering world-class steel precast molds.",
  keywords: "precast concrete molds, precast concrete forms, precast concrete mold manufacturer, precast concrete form manufacturer, concrete molds, steel precast molds, custom precast molds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${jakarta.variable}`}>
        {children}
      </body>
    </html>
  );
}

import { Smooch_Sans, Titillium_Web } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";

const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-se-smooch",
});

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-se-titillium",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-se-titillium">
        {children}
        <Footer />
      </body>
    </html>
  );
}

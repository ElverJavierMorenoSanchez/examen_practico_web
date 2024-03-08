import { Inter } from "next/font/google";
import "./globals.css";
import ToasterContext from "@/context/ToasterContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ESPE COMPLEXIVO",
  description: "Examen práctico de la materia de Programación Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}

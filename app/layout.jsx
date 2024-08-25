import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import RecoilContextProvider from "@/lib/RecoilContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "Stance | %s",
    default: "Stance",
  },
  description: "AI Development Project Matching Service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[1920px] h-[calc(100vh-176px)] flex flex-col m-auto mt-44">
          <Navbar />
          <RecoilContextProvider>{children}</RecoilContextProvider>
        </div>
      </body>
    </html>
  );
}

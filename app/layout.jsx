import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import RecoilContextProvider from "@/lib/RecoilContextProvider";
import { auth } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "Stance | %s",
    default: "Stance",
  },
  description: "AI Development Project Matching Service.",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[1920px] h-[calc(100vh-176px)] flex flex-col m-auto mt-44">
          <RecoilContextProvider>
            <Navbar session={session} />
            {children}
          </RecoilContextProvider>
        </div>
      </body>
    </html>
  );
}

import Image from "next/image";
import localFont from "next/font/local";
import Weather from "@/components/Weather";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (

      <main className={"flex justify-center items-center h-[100vh]"}>
          <Weather city={"Tehran"}/>
      </main>

  )
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/web/logo";
import { redirect } from "next/navigation";

export default function Home() {
  // TODO: To be removed later
  redirect("https://localhostt.vercel.app/");
  return (
    <div className="bg-img flex h-screen flex-col items-center justify-center gap-y-2">
      <h2 className="font-ms-madi text-shadow-glow mb-2 text-3xl text-white">say hi! to</h2>

      {/* TODO: shadoow not working `text-shadow-glow`*/}
      <Logo className="text-white" />

      <Link href="/docs">
        <button className="font-instrument-serif mt-2 cursor-pointer rounded-md bg-gradient-to-r from-orange-400 to-yellow-600 px-4 py-1 text-2xl tracking-wider text-white shadow-md transition-all duration-300 ease-in-out hover:tracking-widest hover:shadow-lg">
          docs <ArrowRight className="ml-1 inline-block h-4 w-4" />
        </button>
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-img flex h-screen flex-col items-center justify-center gap-y-2">
      <h2 className="font-ms-madi mb-2 text-3xl text-white">say hi! to</h2>

      <h1 className="text-shadow-glow font-instrument-serif text-6xl tracking-wide text-white">
        Aether <span className="text-gradient">UI</span>
      </h1>

      <Link href="/docs">
        <button className="font-instrument-serif mt-2 cursor-pointer rounded-md bg-gradient-to-r from-orange-400 to-yellow-600 px-5 py-1 text-2xl tracking-wider text-white shadow-md hover:tracking-widest hover:shadow-lg">
          docs
        </button>
      </Link>
    </div>
  );
}

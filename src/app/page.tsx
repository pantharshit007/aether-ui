import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center flex-col items-center bg-img gap-y-2">
      <h2 className="font-ms-madi text-3xl mb-2 text-white">say hi! to</h2>

      <h1 className="text-6xl text-shadow-glow  text-white tracking-wide font-instrument-serif ">
        Aether <span className="text-gradient ">UI</span>
      </h1>

      <Link href="/docs">
        <button className=" cursor-pointer bg-gradient-to-r mt-2 from-orange-400 to-yellow-600  text-white text-2xl tracking-wider font-instrument-serif py-1 px-5 rounded-md shadow-md hover:shadow-lg hover:tracking-widest">
          docs
        </button>
      </Link>
    </div>
  );
}

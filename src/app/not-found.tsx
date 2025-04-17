import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import notfound from "../../public/img/not-found.png";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col items-center justify-center p-8 text-center">
        <h1 className="text-primary mb-4 text-4xl font-bold tracking-tighter md:text-6xl">
          404 - Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8 text-lg md:text-xl">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button asChild size="lg">
          <Link href="/docs">Go Back Home</Link>
        </Button>
      </main>

      <div className="absolute right-3 bottom-0">
        <Image
          src={notfound}
          alt="404 not found"
          className="w-fit object-cover md:h-[200px] lg:h-[250px] xl:h-[300px] 2xl:h-[400px]"
        />
      </div>
    </div>
  );
};

export default NotFound;

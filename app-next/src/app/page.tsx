"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import nextLogo from "@/public/next.svg";
import honoLogo from "@/public/hono.svg";
import vercelLogo from "@/public/vercel.svg";
import cloudflareLogo from "@/public/cloudflare.svg";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://hono-server.soy.run/";

export default function Home() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const fetchWithRefresh = async () => {
    const response = await fetch(
      `${BASE_URL}/repeat?text=${query}&count=${count}`,
    );
    const data = await response.json();
    setResult(data.result.join("\n"));
    console.log(data);
  };

  useEffect(() => {
    fetchWithRefresh();
  }, [count, query]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-[#f6f6f6]">
      <div className="flex flex-row items-center justify-center mb-8 gap-8">
        <a href="https://nextjs.org" target="_blank">
          <Image
            src={nextLogo}
            className="logo"
            alt="Next.js logo"
            width={100}
            height={100}
          />
          <Image
            src={nextLogo}
            className="logo"
            alt="Next.js logo"
            width={100}
            height={100}
          />
        </a>
        <p className="text-8xl"> + </p>
        <a href="https://hono.dev" target="_blank">
          <Image
            src={honoLogo}
            className="logo react"
            alt="React logo"
            width={80}
            height={80}
          />
        </a>
        <p className="text-8xl"> = </p>
        <a href="https://vercel.com" target="_blank">
          <Image
            src={vercelLogo}
            className="logo"
            alt="Vercel logo"
            width={100}
            height={100}
          />
        </a>
        <p className="text-8xl"> + </p>
        <a href="https://cloudflare.com" target="_blank">
          <Image
            src={cloudflareLogo}
            className="logo"
            alt="Cloudflare logo"
            width={100}
            height={100}
          />
        </a>
      </div>
      <h1 className="text-4xl mb-4 font-bold font-solway">
        Next.js + Hono = The [soy.run] Stack
      </h1>
      <div className="card text-center mx-auto w-1/2">
        <input
          type="text"
          className="card my-4 text-left overflow-scroll bg-gray-100 text-black border-2 border-black rounded-md p-2"
          value={query}
          placeholder="Enter your text here"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() => setCount((count) => count + 1)}
          className="m-4 py-2 px-4 bg-gray-100 text-black border-2 border-black rounded-md"
        >
          count is {count}
        </button>
      </div>
      <p className="text-center mx-auto w-1/2">{result}</p>
      <p className="read-the-docs">
        Click on the Next.js and Hono logos to learn more
      </p>
    </div>
  );
}

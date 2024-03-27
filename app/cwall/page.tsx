"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("http://cwall.cc/");
  }, [router]);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}

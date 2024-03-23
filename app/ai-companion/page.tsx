"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("http://74.50.96.205:3002/");
  }, [router]);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}

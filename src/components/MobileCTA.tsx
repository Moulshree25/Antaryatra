"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileCTA() {
  const pathname = usePathname();

  if (pathname === "/booking") return null;

  return (
    <Link
      href="/booking"
      className="fixed bottom-0 left-0 w-full md:hidden bg-primary text-white py-4 text-center font-semibold z-50 shadow-lg active:scale-95 transition"
    >
      Book a Class
    </Link>
  );
}
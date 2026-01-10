"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/services", label: "Hizmetler" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    // shadow-sm KALDIRILDI
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm py-2 h-20 overflow-visible">
      <nav className="mx-auto flex h-full max-w-[90rem] items-center justify-between px-6 md:px-12 relative">
        
        {/* Logo - Absolute pozisyon ile aşağı sarkıtıldı */}
        <div className="relative z-50 h-full flex items-center">
          <Link href="/" className="block relative">
            <div className="absolute top-[-15px] left-0 h-32 w-64 md:h-40 md:w-80">
              <Image
                src="/mirai-logo.png"
                alt="Mirai Media"
                fill
                priority
                className="object-contain object-left-top"
              />
            </div>
            <div className="w-40 h-20"></div> 
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden items-center gap-12 text-lg font-medium text-gray-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative hover:text-[#901f3b] transition group ${pathname === link.href ? "text-[#901f3b]" : ""}`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#901f3b] transition-all group-hover:w-full ${pathname === link.href ? "w-full" : "w-0"}`}></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-6 rounded-full bg-[#901f3b] px-8 py-3 text-white shadow-lg shadow-[#901f3b]/20 transition hover:bg-[#7a1a32] hover:shadow-xl hover:-translate-y-0.5"
          >
            Teklif Al
          </Link>
        </div>

        {/* Mobile button */}
        <button
          className="inline-flex items-center justify-center rounded-full border border-gray-200 p-3 text-gray-700 transition hover:bg-gray-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Menüyü Aç"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-7 w-7"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden h-screen border-t border-gray-100">
          <div className="flex flex-col p-8 text-xl font-medium text-gray-800 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-gray-50 py-4 hover:text-[#901f3b]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 w-full rounded-2xl bg-[#901f3b] py-5 text-center text-white shadow-lg shadow-[#901f3b]/20 text-lg"
              onClick={() => setOpen(false)}
            >
              Teklif Al
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

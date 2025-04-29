"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center container mx-auto py-4">
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={50}
            className=" object-contain"
          />
        </Link>
      </div>
      <nav>
        <ul className="flex items-center gap-2 sm:gap-4 px-2 text-[17px] sm:text-lg">
          <li className={`hover:text-[#00B0E0] ${pathname === "/" ? "text-[#00B0E0]" : ""}`}>
            <Link href="/">Goal</Link>
          </li>
          <li className={`hover:text-[#00B0E0] ${pathname === "/project-timeline" ? "text-[#00B0E0]" : ""}`}>
            <Link href="/project-timeline">Timeline</Link>
          </li>
          <li className={`hover:text-[#00B0E0] ${pathname === "/team-members" ? "text-[#00B0E0]" : ""}`}>
            <Link href="/team-members" className="whitespace-nowrap">
              Team Members
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

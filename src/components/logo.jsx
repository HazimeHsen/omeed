"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className={`flex items-center font-bold gap-2`}>
      <Image
        className="object-contain md:w-[90px] w-[60px]"
        width={90}
        height={90}
        src="/images/logo.png"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;

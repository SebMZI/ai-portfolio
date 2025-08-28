import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="shrink-0 py-5 flex justify-between items-center">
      <h2 className="font-[var(--font-playfair-display)] text-2xl md:text-3xl">
        Sebastien M.
      </h2>
      <div className="flex gap-4">
        <Link
          href={"https://github.com/SebMZI"}
          target="_blank"
          className="grid place-content-center bg-[#7D7D7D1A] border border-[#7D7D7D1A] rounded-full p-2.5 cursor-pointer"
        >
          <Image
            src="/icon_grey_github.png"
            alt="github"
            width={24}
            height={24}
            className="w-[18px] h-[18px]"
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/sebastien-morazzani/"}
          target="_blank"
          className="grid place-content-center bg-[#7D7D7D1A] border border-[#7D7D7D1A] rounded-full p-2.5 cursor-pointer"
        >
          <Image
            src="/icon_grey_linkedin.png"
            alt="linkedin"
            width={24}
            height={24}
            className="w-[18px] h-[18px]"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;

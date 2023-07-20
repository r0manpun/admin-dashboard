import Image from "next/image";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

const sans = Open_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Sidebar({ children }) {
  return (
    <div className={sans.className}>
      <div className="flex p-2 mt-2">
        <div className="fixed w-[100px] xl:w-[350px] h-[96%] max-h-screen  rounded-[15px] xl:rounded-3xl bg-[#2F80ED]">
          <Image
            width={800}
            height={500}
            src="/logo.svg"
            className="w-full h-[55px] xl:h-[107px] mt-2 xl:mt-4"
            alt="logo"
          />
          {/* horizontal line */}
          <div className="border w-[83%] mx-auto" />
          <div className="flex flex-col w-[160px] mx-auto text-white">
            {/* Inputs */}
            <Link href="/">
            <div className="flex place-items-center xl:gap-2 xl:text-2xl mt-10 ">
              <MdOutlineDashboard className=" w-4 h-4 xl:w-[30px] xl:h-[30px]" />
              Dashboard
            </div></Link>
            <Link href="/notices">
              <div className="flex xl:gap-2 xl:text-2xl mt-10">
                <Image
                  src="/icons/notices.png"
                  width={1000}
                  height={800}
                  className=" w-4 h-4 xl:w-[30px] xl:h-[30px]"
                  alt="notices"
                />
                Notices
              </div>
            </Link>
            <Link href="/events" className="">
              <div className="flex place-items-center xl:gap-2 xl:text-2xl mt-10 hover:bg-white rounded-md hover:text-[#2F80ED]">
                <BiCalendar
                  className=" w-4 h-4 xl:w-[30px] xl:h-[30px]"
                  alt="events"
                />
                Events
              </div>
            </Link>
            <Link href="/contacts">
              <div className="flex place-items-center xl:gap-2 xl:text-2xl mt-10">
                <Image
                  src="/icons/contacts.png"
                  width={1000}
                  height={800}
                  className=" w-4 h-4 xl:w-[30px] xl:h-[30px]"
                  alt="home"
                />
                Contacts
              </div>
            </Link>
            <Link href="/admission">
              <div className="flex place-items-center xl:gap-2 xl:text-2xl mt-10">
                <Image
                  src="/Vector.png"
                  width={1000}
                  height={800}
                  className=" w-4 h-4 xl:w-[30px] xl:h-[30px] "
                  alt="home"
                />
                Admission
              </div>
            </Link>
          </div>
        </div>
        <main className="ml-[100px] xl:ml-[350px] w-[77%] ">{children}</main>
      </div>
    </div>
  );
}

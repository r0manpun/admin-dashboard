import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { BsImageFill } from "react-icons/bs";

export default function page() {
  return (
    <div className="bg-white w-[95%] m-auto mt-10 overflow-y-auto">
      <h1 className="uppercase text-center text-2xl font-bold pt-6">important notices</h1>
      <hr className="w-full mt-2" />
      <form className="mt-6 px-8 ">
        <h3 className="ml-3 text-xl">Title</h3>
        <input type="text" className="border rounded-[8px] w-full h-8 " />
        <h3 className="ml-3 text-xl mt-6">Content</h3>
        <input type="text" className="border rounded-[8px] w-full h-40 " />
      </form>
      <div className="flex justify-end text-xl gap-3 px-8 p-3 mr-2 ">
        <BiEdit />
        <AiFillDelete />
      </div>
      <div className="flex justify-center text-white my-4">
      <button className="w-24 h-8 bg-[#27AE60] rounded-xl text-base font-medium">Post</button>
      </div>
    </div>
  );
}

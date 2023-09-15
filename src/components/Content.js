import Image from "next/image";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { useSession } from "next-auth/react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export default function Content ({ data, id }) {
  const { data: session } = useSession();

  const isAdmin = (post_data_id, session_id) => {
    if (post_data_id === session_id) return true;
    else if (session_id === "103122479951529079566") return true;

    return false;
  };

  return (
    <div className="w-[500px] py-4 bg-[#242526] rounded-lg shadow-md mt-5">
      <div className="px-4 flex justify-between items-center">
        <div className="flex gap-2">
          <img
            className="w-[44px] h-[44px] object-cover rounded-full"
            src={data.userImg}
            alt="dp"
          />
          <div>
            <h1 className="text-[15px] text-[#e4e6eb] font-medium">{data.username}</h1>
            <div className="text-[#b0b3b8] text-[14px] flex items-center gap-2">
              <p>{data.timestamp ? data.timestamp.toDate().toLocaleString() : ''}</p>
              <p>·</p>
              <FaGlobeAmericas />
            </div>
          </div>
        </div>

        <div className="text-[#b0b3b8] text-[26px] flex gap-4">
          <FiMoreHorizontal className="cursor-pointer" />
          {isAdmin(data.id, session?.user?.uid) && (
            <MdOutlineClose
              className="cursor-pointer"
              onClick={() => {
                deleteDoc(doc(db, "posts", id));
              }}
            />
          )}
        </div>
      </div>

      <p className="px-4 mt-[10px] text-[#e4e6eb] font-normal">{data.text}</p>

      <div className="mt-[15px]">
        {data.image && <img src={data.image} alt="post pic" />}
      </div>

      <div className="mx-4 h-[1px] bg-[#3a3b3c] mt-[15px]"></div>

      <div className="flex mt-[7px] text-[#b0b3b8] px-[15px]">
        <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-md hover:bg-[#3a3b3c] cursor-pointer">
            <BiLike className="text-[24px]" />
          <p className="font-medium">Like</p>
        </div>
        <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-md hover:bg-[#3a3b3c] cursor-pointer">
          <FaRegComment className="text-[20px]" />
          <p className="font-medium">Comment</p>
        </div>
        <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-md hover:bg-[#3a3b3c] cursor-pointer">
          <PiShareFat className="text-[24px]" />
          <p className="font-medium">Share</p>
        </div>
      </div>
    </div>
  );
};

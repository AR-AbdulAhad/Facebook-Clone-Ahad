import { AiOutlinePlus } from "react-icons/ai";

export default function Story() {
  return (
    <div className="w-[590px] h-[72.98] bg-[#242526] rounded-lg p-[10px]">
      <div className="flex flex-row items-center hover:ease-in-out hover:bg-[#3a3b3c] rounded-lg p-[6px] cursor-pointer">
      <div className="w-[40px] h-[40px] rounded-[30px] bg-[#2d88ff]/20 flex justify-center items-center mr-[10px]">
          <AiOutlinePlus className="text-[#2374e1] font-bold text-[1.4em]"/>
      </div>
      <div>
      <div>
        <h1 className="text-[#e4e6eb] font-medium text-[15px]">Create Story</h1>
      </div>
      <div>
        <p className="text-[#b0b3b8] text-[15px]">Share a photo or write something.</p>
      </div>
      </div>
      </div>
    </div>
  )
}
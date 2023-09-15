import { AiOutlinePlus } from "react-icons/ai";

export default function GroupConversation () {
  return (
    <div className="w-[100%] mb-[8px]">
    <div className="flex justify-between items-center pl-[8px] mb-[5px]">
      <div>
          <span className="text-[#e4e6eb]">
          Group conversations
          </span>
        </div>
    </div>
      <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c]        cursor-pointer">
                <div className="w-[28px] h-[28px] rounded-[30px] bg-[#3a3b3c] flex justify-center items-center mr-[10px]">
                    <AiOutlinePlus className="text-[#e4e6eb] font-bold text-[1em]"/>
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Create New Group</h1>
                </div>
      </div>
  </div>
  )
}
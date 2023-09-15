import { useSession } from 'next-auth/react'
import { FiMoreHorizontal } from 'react-icons/fi';
 
 export default function UserComp () {
    const { data: session } = useSession();
  return (
    <div className="w-[100%] mb-[8px]">
      <div className="flex justify-between items-center pl-[8px] mb-[5px]">
        <div>
            <span className="text-[#e4e6eb]">
              Your Pages and profiles
            </span>
          </div>
          <div>
            <FiMoreHorizontal className="text-[#e4e6eb]" />
        </div>
      </div>
        <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c]           cursor-pointer">
                <div className="flex w-[30px] h-[30px] justify-center items-center bg-[#3a3b3c] rounded-[30px] mr-[10px]">
                    <img
                        src={session.user?.image}
                        width={30}
                        height={30}
                        className="rounded-[30px]"
                    />
                  </div>
                  <div>
                      <h1 className="text-[#e4e6eb] text-[14px] font-medium">{session.user?.name}</h1>
                  </div>
        </div>
    </div>
  )
 }
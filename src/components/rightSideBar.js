import Image from 'next/image'
import UserComp from './UserComp'
import GroupConversation from './GroupConversation'


export default function RightSideBar() {
    return (
        <div className="w-[302.5px] h-[601.25px] mt-[58px] fixed bg-[#18191a] pl-[10px] pr-[20px] py-[15px] z-30 flex flex-col  right-0">
             <UserComp />
             <div className="w-[100%] h-[1px] bg-[#3a3b3c] mb-[10px]"></div>
             <GroupConversation />
        </div>
    )
}
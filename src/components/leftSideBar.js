import Image from 'next/image'
import FindFriends from '../Assets/img/users.png'
import Memories from '../Assets/img/clock.png'
import Saved from '../Assets/img/save.png'
import Groups from '../Assets/img/groups.png'
import Video from '../Assets/img/video.png'
import MarketPlace from '../Assets/img/market-place.png'
import Feeds from '../Assets/img/feeds-icon.png'
import Events from '../Assets/img/events-icon.png'
import AdsManager from '../Assets/img/adds-manager-icon.png'
import CrisesResponse from '../Assets/img/crises-response.png'
import AdCenter from '../Assets/img/ad-center.png'
import BloodDonations from '../Assets/img/blood-donation-icon.png'
import ClimateScienceCenter from '../Assets/img/climate-science.png'
import Fundraisers from '../Assets/img/health-care.png'
import GamingVideo from '../Assets/img/gaming-video.png'
import Messenger from '../Assets/img/messenger-icon.png'
import MessengerKids from '../Assets/img/messenger-kids.png'
import OrdersAndPayments from '../Assets/img/orderd-and-payment.png'
import Pages from '../Assets/img/pages.png'
import PlayGames from '../Assets/img/game.png'
import RecentAdActivity from '../Assets/img/Recent-ad-activity.png'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function LeftSideBar() {
    const { data: session } = useSession();
    return (
        <div className="w-[302.5px] h-[601.25px] mt-[58px] fixed hover:overflow-y-scroll bg-[#18191a] px-[10px] py-[15px] z-30">
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center bg-[#3a3b3c] rounded-[30px] mr-[10px]">
                    <img
                        src={session.user?.image}
                        width={30}
                        height={30}
                        className="rounded-[30px]"
                        alt='ProfileImage'
                    />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">{session.user?.name}</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={FindFriends}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='FindFriends'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Find Friends</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={Memories}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='Memories'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Memories</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={Saved}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='Saved'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Saved</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={Groups}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='Groups'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Groups</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={Video}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='Video'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Video</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={MarketPlace}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='MarketPlace'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Marketplace</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={Feeds}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='Feeds'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Feeds</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={Events}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='Events'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Events</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={AdsManager}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='AdsManager'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Ads Manager</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={CrisesResponse}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='CrisesResponse'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Crises Response</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={AdCenter}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='AdCenter'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Ad Center</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={BloodDonations}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='BloodDonations'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Blood Donations</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={ClimateScienceCenter}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='ClimateScienceCenter'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Climate Science Center</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={Fundraisers}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='Fundraisers'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Fundraisers</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={GamingVideo}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='GamingVideo'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Gaming video</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={Messenger}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='Messenger'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Messenger</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={MessengerKids}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='MessengerKids'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Messenger Kids</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={OrdersAndPayments}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='OrdersAndPayments'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Orders and payments</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={Pages}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='Pages'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Pages</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={PlayGames}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='PlayGames'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Play games</h1>
                </div>
            </div>
            <div className="flex items-center w-full p-[7px] rounded-md hover:ease-in-out hover:bg-[#3a3b3c] cursor-pointer">
            <div className="flex w-[30px] h-[30px] justify-center items-center rounded-[30px] mr-[10px]">
                <Image
                    src={RecentAdActivity}
                    width={30}
                    height={30}
                    className="rounded-[30px]"
                    alt='RecentAdActivity'
                />
                </div>
                <div>
                    <h1 className="text-[#e4e6eb] text-[14px] font-medium">Recent ad activity</h1>
                </div>
            </div>
        </div>
    )
}
import MidSideBar from "./midSideBar";

export default function MainContentBar() {
  return (
    <div className="bg-[#18191a] w-[100%] h-[100%] fixed flex mt-[58px] justify-center overflow-y-scroll">
      <MidSideBar />
    </div>
  )
}
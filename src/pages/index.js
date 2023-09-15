import { Inter } from 'next/font/google'
import NavBar from '@/components/navBar'
import LeftSideBar from '@/components/leftSideBar'
import MainContentBar from '@/components/mainContentBar'
import RightSideBar from '@/components/rightSideBar'
import Login from '@/components/Login'
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session && !router.query.login) return <Login />;

  return (
    <div className="w-full h-full">
      <NavBar />
      <div className="flex">
      <LeftSideBar />
      <MainContentBar />
      <RightSideBar />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}


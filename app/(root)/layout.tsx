
'use client'

import MobileNav from '@/components/MobileNav'
import Sidebar from '@/components/Sidebar'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const loggedIn = {firstName: "Mani", lastName:"P"};
  return (
   <main className="flex h-screen w-full font-inter">
    <Sidebar user={loggedIn}/>
    <div className="flex size-full flex-col">
      <div className="root-layout">
        <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
        <div>
          <MobileNav user={loggedIn}/>
        </div>
        

      </div>

    {children}
    </div>
   </main>
  );
}

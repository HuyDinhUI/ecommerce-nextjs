"use client"

import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Collapsible } from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import { signOut } from "next-auth/react"

const PERSONAL_LOCATION = [
    {
        name: "Account Settings",
        href: "/account"
    },
    {
        name: "Order History",
        href: "/orders"
    },
    {
        name: "Settings",
        href: "/settings"
    },
]

const PersonalLayout = ({children}:{children: ReactNode}) => {
    const pathname = usePathname()
    return (
        <div className="xl:p-20 max-xl:p-10">
            <header>
               <Breadcrumb classname="max-xl:hidden"/>
               <div className="xl:hidden">
                   <Collapsible label={PERSONAL_LOCATION.find(i => i.href === pathname)?.name ?? ''}>
                        <nav>
                            <ol>
                                {PERSONAL_LOCATION.map((item, index) => (
                                    <li key={index} className={clsx("my-5 transition-all", pathname === item.href ? "underline-offset-5 underline font-bold" : "")}>
                                        <Link href={item.href}>{item.name}</Link>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                   </Collapsible>
               </div>
            </header>
            <Separator classname="border-gray-300"/>
            <div className="flex">
                <aside className="pt-10 max-xl:hidden">
                    <nav>
                        <ol>
                            {PERSONAL_LOCATION.map((item, index) => (
                                <li key={index} className={clsx("my-5 transition-all", pathname === item.href ? "underline-offset-5 underline font-bold" : "")}>
                                    <Link href={item.href}>{item.name}</Link>
                                </li>
                            ))}
                            <Separator classname="border-gray-300"/>
                            <li className="my-5">
                                <div onClick={() => signOut()} className="cursor-pointer hover:underline">Logout</div>
                            </li>
                        </ol>
                    </nav>
                </aside>
                <div className="xl:ps-40 flex-1">
                    {children}
                </div>
            </div>
        </div>
    )
} 

export default PersonalLayout
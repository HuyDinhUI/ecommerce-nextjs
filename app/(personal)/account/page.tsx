import { Separator } from "@/components/ui/separator"
import { Metadata } from "next";
import Link from "next/link"
import { BiPlus } from "react-icons/bi"

export const metadata: Metadata = {
  title: "Account Setting | Lumina",
  description: "Store fashion",
};

const AccountPage = () => {
    return (
        <div className="font-beatrice-deck pt-15">
            <h4 className="text-5xl">Hello, Huy</h4>
            <Separator classname="my-5 border-gray-300"/>
            <div className="flex max-xl:flex-col gap-5">
                <div className="w-[30%]">
                    <strong className="uppercase">profile</strong>
                </div>
                <div className="flex-1 relative">
                    <div className="flex flex-col gap-2">
                        <h5>Huy Dinh</h5>
                        <p>huydinh28032004@gmail.com</p>
                        <p>0354382607</p>
                    </div>
                    <Link href={'/edit-profile'} className="absolute top-0 right-0 underline">Edit</Link>
                </div>
            </div>
           <Separator classname="my-5 border-gray-300"/>
            <div className="flex mt-10 max-xl:flex-col gap-5">
                <div className="w-[30%]">
                    <strong className="uppercase">password</strong>
                </div>
                <div className="flex-1 relative">
                    <strong>...........</strong>
                    <Link href={'/reset-password'} className="absolute top-0 right-0 underline">Change</Link>
                </div>
            </div>
            <Separator classname="my-5 border-gray-300"/>
            <div className="flex mt-10 max-xl:flex-col gap-5">
                <div className="w-[30%]">
                    <strong className="uppercase">address book</strong>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <div>
                        <div className="relative">
                            Address main
                            <Link href={'/edit-address'} className="absolute top-0 right-0 underline">Edit</Link>
                        </div>
                    </div>
                    <Separator classname="my-5 border-gray-300"/>
                    <div className="flex items-center gap-2">
                        <BiPlus/>
                        <Link href={'/reset-password'} className="underline">Add new address</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountPage
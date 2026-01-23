import { ReactNode } from "react";

const AuthLayout = ({children}:{children: ReactNode}) => {
    return (
        <div className="flex justify-center pt-20">
            <div className="bg-white md:w-100">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
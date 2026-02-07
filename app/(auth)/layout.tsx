import { ReactNode } from "react";

const AuthLayout = ({children}:{children: ReactNode}) => {
    return (
        <div className="flex justify-center pt-20">
            <div className="md:w-100 shadow">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
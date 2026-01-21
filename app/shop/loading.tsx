const SkeletonShop = () => {
    return (
        <div className="flex">
            <div className="max-lg:hidden px-10 h-200 w-100">
                <div className="w-full h-full flex flex-col gap-5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="p-5 bg-gray-200 animate-pulse"></div>
                    ))}
                </div>
            </div>
            <div className="flex-1 md:px-10 max-sm:px-5">
                
                <div className="flex gap-5 mt-2">
                    <div className="max-lg:hidden w-20 h-10 bg-gray-200 animate-pulse"></div>
                    <div className="flex-1 max-sm:max-w-100 max-lg:overflow-x-scroll max-lg:p-1">
                        <div className="h-10 bg-gray-200 animate-pulse w-full ounded-md"></div>
                    </div>
                </div>
                <div className="mt-5 grid lg:grid-cols-4 max-lg:grid-cols-2 xl:gap-5">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="h-80 animate-pulse p-5 flex flex-col gap-2">
                            <div className="bg-gray-200 animate-pulse flex-1"></div>
                            <div className="bg-gray-200 animate-pulse p-2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkeletonShop
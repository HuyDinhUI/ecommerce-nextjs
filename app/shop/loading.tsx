const SkeletonShop = () => {
    return (
        <div className="flex">
            <div className="mx-lg:hidden px-10 h-200 animate-pulse w-100">
                <div className="w-full h-full bg-gray-200"></div>
            </div>
            <div className="flex-1 md:px-10 max-sm:px-5">
                <div className="h-8 bg-gray-200 animate-pulse w-32 mb-5"></div>
                <div className="flex gap-5 mt-2">
                    <div className="max-lg:hidden w-20 h-10 bg-gray-200 animate-pulse"></div>
                    <div className="flex-1 max-sm:max-w-100 max-lg:overflow-x-scroll max-lg:p-1">
                        <div className="h-10 bg-gray-200 animate-pulse w-full"></div>
                    </div>
                </div>
                <div className="mt-5 grid lg:grid-cols-4 max-lg:grid-cols-2 gap-5">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="w-full h-80 bg-gray-200 animate-pulse"></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkeletonShop
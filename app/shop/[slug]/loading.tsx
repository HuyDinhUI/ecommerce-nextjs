const SkeletonProductDetail = () => {
  return (
    <div className="w-full flex gap-10 max-lg:flex-col xl:px-30 max-lg:px-10">
      <div className="flex flex-1 flex-row-reverse max-lg:flex-col xl:w-120 gap-5">
        <div className="bg-gray-300 h-200 animate-pulse flex-1 rounded-md"></div>
        <div className="grid grid-rows-5 gap-5 w-20">
          {Array.from({length: 5}).map((_,index) => (
            <div key={index} className="bg-gray-300 animate-pulse rounded-md"></div>
          ))}
        </div>
      </div>
      <div className="xl:w-120 max-lg:mt-10">
          <div className="h-5 w-70 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="h-5 w-50 bg-gray-300 animate-pulse mt-5 rounded-md"></div>
          <div className="h-5 w-50 bg-gray-300 animate-pulse mt-5 rounded-md"></div>
          <div className="h-10 w-60 bg-gray-300 animate-pulse mt-20 rounded-md"></div>
          <div className="h-10 w-20 bg-gray-300 animate-pulse mt-5 rounded-md"></div>
          <div className="h-10 w-30 bg-gray-300 animate-pulse mt-5 rounded-md"></div>
      </div>
    </div>
  );
}
export default SkeletonProductDetail;
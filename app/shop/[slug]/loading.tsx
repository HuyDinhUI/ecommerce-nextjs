const SkeletonProductDetail = () => {
  return (
    <div className="w-full h-screen flex gap-10 xl:justify-center max-lg:flex-col p-7">
      <div className="flex max-lg:flex-col xl:w-120 gap-5">
        <div className="bg-gray-200 animate-pulse flex-1"></div>
        <div className="grid grid-rows-5 gap-5 w-20">
          {Array.from({length: 5}).map((_,index) => (
            <div key={index} className="bg-gray-200 animate-pulse"></div>
          ))}
        </div>
      </div>
      <div className="xl:w-90 max-lg:mt-10 p-10">
          <div className="h-5 bg-gray-200 animate-pulse"></div>
          <div className="h-5 bg-gray-200 animate-pulse mt-5"></div>
          <div className="h-5 bg-gray-200 animate-pulse mt-5"></div>
          <div className="h-10 bg-gray-200 animate-pulse mt-20"></div>
          <div className="h-10 bg-gray-200 animate-pulse mt-5"></div>
          <div className="h-10 bg-gray-200 animate-pulse mt-5"></div>
      </div>
    </div>
  );
}
export default SkeletonProductDetail;
const SkeletonOrdersPage = () => {
  return (
    <div className="text-center mt-10">
      <div className="grid grid-cols-2 gap-2">
        <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-5 max-md:grid-cols-1 mt-10">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex gap-5">
            <div className="aspect-3/4 relative h-60 bg-gray-300 animate-pulse" />
            <div className="flex flex-col gap-2 w-full">
              <div className="h-5 bg-gray-300 rounded w-3/4 animate-pulse"></div>
              <div className="h-5 bg-gray-300 rounded w-1/4 animate-pulse"></div>
              <div className="h-5 bg-gray-300 rounded w-1/6 animate-pulse"></div>
              <div className="h-5 bg-gray-300 rounded w-1/3 animate-pulse"></div>
              <div className="h-5 bg-gray-300 rounded w-1/5 animate-pulse"></div>
              <div className="flex gap-2 mt-5">
                <div className="h-8 bg-gray-300 rounded w-20 animate-pulse"></div>
                <div className="h-8 bg-gray-300 rounded w-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonOrdersPage;

export const SkeletonCartPage = () => {
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="w-full h-80 bg-gray-200 animate-pulse"
        ></div>
      ))}
    </div>
  );
};

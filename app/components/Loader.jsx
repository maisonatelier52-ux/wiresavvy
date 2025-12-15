export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
      {/* Animated Logo / Text */}
      <h1 className="text-white text-3xl font-bold tracking-wide mb-6 animate-pulse">
        Wiresavvy
      </h1>

      {/* Spinning Ring */}
      <div className="w-12 h-12 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
    </div>
  );
}

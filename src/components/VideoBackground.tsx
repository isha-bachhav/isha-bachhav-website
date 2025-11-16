const VideoBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#7FFF00]/20 to-transparent"
            style={{
              top: `${i * 5}%`,
              left: 0,
              right: 0,
              animation: `slide-right ${3 + i * 0.2}s linear infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
      
      {/* Scanning Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7FFF00]/5 to-transparent"
        style={{
          height: '200px',
          animation: 'scan 4s ease-in-out infinite',
        }}
      />
      
      <div className="absolute inset-0 bg-black/70"></div>
      
      <style>{`
        @keyframes slide-right {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        @keyframes scan {
          0%, 100% {
            top: -200px;
          }
          50% {
            top: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoBackground;

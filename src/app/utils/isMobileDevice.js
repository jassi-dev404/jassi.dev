export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;

  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isSmallScreen = window.innerWidth <= 768;
  
  const isPortrait = 
    window.orientation === 0 ||
    (window.screen && window.screen.orientation && window.screen.orientation.type && window.screen.orientation.type.includes('portrait')) ||
    window.innerHeight > window.innerWidth;

  return (isMobileUA || isSmallScreen) && isPortrait;
};

export default isMobileDevice;

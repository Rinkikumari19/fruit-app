import { useEffect, useState } from "./CusModules";

export function useWidth() {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return { isMobile, width };
}

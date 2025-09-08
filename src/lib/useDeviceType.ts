import { useState, useEffect } from "react";

type DeviceType = "mobile" | "desktop";

const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>("mobile");

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      // Adjusted breakpoint: show mobile menu earlier for crowded nav
      if (width < 1180) {
        setDeviceType("mobile");
      } else {
        setDeviceType("desktop");
      }
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);

    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  return deviceType;
};

export default useDeviceType;
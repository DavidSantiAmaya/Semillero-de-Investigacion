import { useMediaQuery } from "react-responsive";

export const useMaskSettings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  if (isMobile) {
    return {
      initialMaskPos: "50% 50%",
      initialMaskSize: "3100% 3100%",
      maskPos: "50% 50%",
      maskSize: "70% 70%",
    };
  }

  if (isTablet) {
    return {
      initialMaskPos: "50% 50%",
      initialMaskSize: "3500% 3500%",
      maskPos: "50% 50%",
      maskSize: "50% 50%",
    };
  }

  return {
    initialMaskPos: "56% 50%",
    initialMaskSize: "11000% 11000%",
    maskPos: "56% 50%",
    maskSize: "50% 50%",
  };
};

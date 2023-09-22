import { useState, useEffect } from "react";

const useFrame = (fps: number, durationInFrames: number) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const stop = setInterval(() => {
      setFrame((frame) => {
        if (frame >= durationInFrames) {
          clearInterval(stop);
          return frame;
        }
        return frame + 1;
      });
    }, 1000 / fps);

    return () => {
      clearInterval(stop);
    };
  }, []);

  return frame;
};

export default useFrame;

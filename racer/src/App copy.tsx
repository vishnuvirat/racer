import { useEffect, useState } from "react";
import { unitInterpolate } from "./utils";

const useFrame = (fps: number, durationInFrames: number) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const frameInterval = setInterval(() => {
      setFrame((frame) => {
        if (frame >= durationInFrames) {
          clearInterval(frameInterval);
          return durationInFrames;
        }
        return frame + 1;
      });
    }, Math.floor(1000 / fps));
    return () => {
      clearInterval(frameInterval);
    };
  }, []);

  return frame;
};

function App() {
  const fps = 60;
  const durationInFrames = 5 * fps;
  const frame = useFrame(fps, durationInFrames);
  const timeInSeconds = Math.floor(unitInterpolate(frame, [0, fps], [0, 1]));
  const width = unitInterpolate(frame, [0, durationInFrames], [0, 100]);
  const opacity = unitInterpolate(frame, [0, durationInFrames], [0, 1]);

  return (
    <div>
      {frame} {timeInSeconds}
      <div
        style={{
          height: "50px",
          backgroundColor: "red",
          width: `${width}%`,
          opacity: `${opacity}`,
        }}
      ></div>
    </div>
  );
}

export default App;

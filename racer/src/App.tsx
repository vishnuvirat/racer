import { data, metadata, totalLength } from "./data";
import useFrame from "./hooks/useFrame";
import { interoplate, range } from "./utils";
import { motion } from "framer-motion";
import clock from "../src/assets/clock.gif";
// import paper from "../src/assets/paper.gif";
import racerMusic from "../src/assets/music/racerMusic.mp3";
// import Sound from "react-sound";

const App = () => {
  const unitSpeed = 10;
  const fps = 60;
  const speed = unitSpeed * fps;
  const durationInFrames = totalLength * speed;
  const frame = useFrame(fps, durationInFrames);
  const timeline = range(0, durationInFrames + speed, speed);

  const movies = (Object.keys(data) as (keyof typeof data)[])
    .map((key) => {
      return {
        id: key,
        title: data[key].title,
        info: Math.ceil(interoplate(frame, timeline, data[key].sequence)),
        color: data[key].color,
        titleColor: data[key].titleColor,
        image: data[key].image,
      };
    })
    .sort((a, b) => {
      return b.info - a.info;
    });

  const sum = movies.reduce((total, movie) => {
    return total + movie.info;
  }, 0);

  const baseline = movies[0].info;
  const moviesWithBarSize = movies.map((movie) => {
    return { ...movie, barSize: (movie.info * 100) / baseline };
  });

  const index = Math.floor(interoplate(frame, timeline, range(0, 13)));
  const show = metadata.show[index];

  const play = () => {
    new Audio(racerMusic).play();
  };

  return (
    <div className="h-screen">
      {/* <div>
        <img className="h-screen w-screen" src={paper}></img>
      </div> */}

      <div className="absolute top-0 w-10/12">
        <div
          className={`${metadata.titleColor} flex justify-center items-center font-semibold tracking-widest text-4xl mb-4 drop-shadow-sm `}
        >
          {metadata.title}
        </div>
        <div className="space-y-5">
          {moviesWithBarSize.map((movie) => {
            return (
              <motion.div
                className="flex"
                key={movie.id}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 120,
                }}
                layout
              >
                <div
                  className={`${movie.titleColor} w-36 drop-shadow-2xl flex items-center justify-end mx-2`}
                >
                  <div className="font-sans text-lg font-bold ">
                    {movie.title}
                  </div>
                </div>
                <div className="w-10/12 border border-black">
                  <div
                    className={`${movie.color} font-bold h-12 text-cyan-200 bg-opacity-80 drop-shadow-md rounded-md ${movie.titleColor} flex justify-center items-center`}
                    style={{
                      width: `${movie.barSize}%`,
                    }}
                  >
                    <img className="h-10" src={movie.image}></img>
                  </div>
                </div>
                <div className="text-black tracking-wider text-lg font-semibold font-mono mx-6 justify-center items-center flex">
                  {movie.info.toLocaleString()}
                  <span className="font-light"></span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="absolute right-48 top-1/2 border border-red-300 flex space-x-2">
        <div className="w-40 h-40">
          <img src={clock}></img>
        </div>
        <div>
          <div className="text-4xl font-bold font-mono">{show.month}</div>
          <div className="text-8xl">YEAR</div>
          <div className="text-4xl font-bold text-gray-600 ">
            Total Views : {sum.toLocaleString()}
          </div>
          <div>
            <button onClick={play}>PLAY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

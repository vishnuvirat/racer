import ironMan from "./assets/iron-man-no-bg.png";
import blackPanther from "./assets/black-panther-no-bg.webp";
import captainAmerica from "./assets/captain-america-no-bg.png";

export const data = {
  x: {
    title: "Iron Man",
    sequence: [
      0, 1000, 1100, 1100, 1500, 3000, 3500, 4000, 4500, 4800, 5000, 5650,
      20000,
    ],
    color: "bg-red-300",
    titleColor: "text-red-900",
    image: ironMan,
  },
  y: {
    title: "Captain America",
    sequence: [
      0, 560, 1000, 1500, 3000, 5000, 6000, 6500, 6800, 7000, 8000, 9876, 10000,
    ],
    color: "bg-teal-300",
    titleColor: "text-teal-900",
    image: captainAmerica,
  },
  z: {
    title: "Black Panther",
    sequence: [
      0, 200, 600, 2000, 2100, 5100, 5200, 5800, 6000, 7000, 10000, 11000,
      11100,
    ],
    color: "bg-green-300",
    titleColor: "text-green-900",
    image: blackPanther,
  },
};

export const totalLength = 12;
export const metadata = {
  title: "RACER",
  titleColor: "text-gray-600",
  show: [
    {
      month: "JAN",
    },
    {
      month: "FEB",
    },
    {
      month: "MAR",
    },
    {
      month: "APR",
    },
    {
      month: "MAY",
    },
    {
      month: "JUN",
    },
    {
      month: "JUL",
    },
    {
      month: "AUG",
    },
    {
      month: "SEP",
    },
    {
      month: "OCT",
    },
    {
      month: "NOV",
    },
    {
      month: "DEC",
    },
  ],
};

export const unitInterpolate = (
  frame: number,
  inputRange: [number, number],
  outputRange: [number, number]
) => {
  const [istart, iend] = inputRange;
  const [ostart, oend] = outputRange;
  const interval = (ostart - oend) / (istart - iend);
  return (frame - istart) * interval + ostart;
};

export const interoplate = (
  frame: number,
  inputRange: Array<number>,
  outputRange: Array<number>
) => {
  for (let i = 0; i <= inputRange.length - 1; i++) {
    if (inputRange[i] <= frame && frame <= inputRange[i + 1]) {
      return unitInterpolate(
        frame,
        [inputRange[i], inputRange[i + 1]],
        [outputRange[i], outputRange[i + 1]]
      );
    }
  }

  return 0;
};

export const range = (start: number, end: number, step: number = 1) => {
  let arr = [];
  for (let i = start; i < end; i += step) {
    arr.push(i);
  }
  return arr;
};

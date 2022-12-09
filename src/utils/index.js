const padTo2Digits = (num) => num.toString().padStart(2, "0");

const separateIntegerAndDecimal = (floatNumber) => {
  const integer = Math.trunc(floatNumber);
  const decimal = floatNumber - integer;
  return [integer, decimal];
};

const getMinutesAndSecondsFromInteger = (integerSeconds) => [
  Math.floor(integerSeconds / 60),
  integerSeconds % 60,
];

export const getLrcTimeFormatFromSeconds = (totalSeconds) => {
  const fixedTotalSeconds = totalSeconds.toFixed(2);
  const [integer, decimal] = separateIntegerAndDecimal(fixedTotalSeconds);
  const [minutes, seconds] = getMinutesAndSecondsFromInteger(integer);

  return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}.${padTo2Digits(
    Math.trunc(decimal * 100)
  )}`;
};

export const filterMusicName = (musicName) => musicName || "wrong-question";

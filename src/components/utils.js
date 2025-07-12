const MIN_RADIUS = 4;
const MAX_RADIUS = 50;
const DEPTH = 2;
const LEFT_COLOR = "000000";
const RIGHT_COLOR = "33ccff";
const NUM_POINTS = 2000;

const getGradientStop = (ratio) => {
  ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;

  const c0 = LEFT_COLOR.match(/.{1,2}/g).map(
    (oct) => parseInt(oct, 16) * (1 - ratio)
  );
  const c1 = RIGHT_COLOR.match(/.{1,2}/g).map(
    (oct) => parseInt(oct, 16) * ratio
  );
  const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255));
  const color = ci
    .reduce((a, v) => (a << 8) + v, 0)
    .toString(16)
    .padStart(6, "0");

  return `#${color}`;
};

const calculateColor = (x) => {
  const maxDiff = MAX_RADIUS * 2;
  const distance = x + MAX_RADIUS;
  const ratio = distance / maxDiff;
  return getGradientStop(ratio);
};

const randomFromInterval = (min, max) => Math.random() * (max - min) + min;

export const pointsInner = Array.from({ length: NUM_POINTS }, (_, k) => {
  const radius = randomFromInterval(MIN_RADIUS, MAX_RADIUS);
  const angle = Math.random() * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const z = randomFromInterval(-DEPTH, DEPTH);
  return { idx: k, position: [x, y, z], color: calculateColor(x) };
});

export const pointsOuter = Array.from({ length: NUM_POINTS / 4 }, (_, k) => {
  const radius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2);
  const angle = Math.random() * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const z = randomFromInterval(-DEPTH * 10, DEPTH * 10);
  return { idx: k, position: [x, y, z], color: calculateColor(x) };
});

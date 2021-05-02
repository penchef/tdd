export const sum = (x: number, y: number): number | undefined => {
  if (!x && !y) {
    return undefined;
  }
  return x + y;
};


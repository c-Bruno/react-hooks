export const shuffle = (array: Array<string>) => {
  return [...array].sort(() => Math.random() - 0.5);
};

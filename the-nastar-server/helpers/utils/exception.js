export const randomOrder = () => {
  const date = new Date();
  const random = Math.random() * 1000;
  return date.getTime() + random;
};

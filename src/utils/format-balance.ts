export const formatBalance = (balanceInEther: string): string => {
  const [integerPart, decimalPart] = balanceInEther.split(".");
  const truncatedDecimalPart = decimalPart ? decimalPart.slice(0, 5) : "0000";
  return `${integerPart}.${truncatedDecimalPart}`;
};

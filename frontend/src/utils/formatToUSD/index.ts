export default function formatToUSD(value: number){
  const formattedValue = value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    trailingZeroDisplay: "stripIfInteger",
  });

  return formattedValue;
};
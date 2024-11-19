type Props = {
  label: string;
  valueA: string;
  valueB: string;
  formatter: (value: number, measurement?: string) => string;
  highestXLowest?: boolean;
  shoulBeFormatted?: boolean;
  shouldBeCompared?: boolean;
  measurement?: string;
};

const CompareField = ({
  label,
  valueA,
  valueB,
  formatter,
  highestXLowest,
  shoulBeFormatted,
  measurement,
  shouldBeCompared,
}: Props) => {
  
  const formattedValueA = shoulBeFormatted
    ? measurement
      ? formatter(Number(valueA), measurement)
      : formatter(Number(valueA))
    : valueA;

  const defineColor = (valA, valB) => {
    if (highestXLowest) {
      return valA < valB ? "red" : "green";
    } else {
      return valB > valA ? "green" : "red";
    }
  };

  return (
    <div className="flex gap-1 text-lg">
      <strong>{label}: {" "}</strong>
      <div>
        <span style={{ color: shouldBeCompared ? defineColor(valueA, valueB) : "" }}>
          {shouldBeCompared ? formattedValueA : valueA}
        </span>
      </div>
    </div>
  );
};

export default CompareField;

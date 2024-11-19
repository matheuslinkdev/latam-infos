type Props = {
  value: string | number;
  comparedValue: string | number;
  formatter: any
};

export default function CompareValues({value, comparedValue, formatter}: Props) {

  const formattedValue = formatter(value)

  return (
    <div>
      <span style={{ color: value > comparedValue ? "green" : "red" }}>{formattedValue}</span>
    </div>
  );
}

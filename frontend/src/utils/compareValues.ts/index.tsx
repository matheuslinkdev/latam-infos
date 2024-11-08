type Props = {
  value: string | number;
  comparedValue: string | number;
};

export default function CompareValues({value, comparedValue}: Props) {
  return (
    <div>
      <span style={{ color: value > comparedValue ? "green" : "red" }}>{value}</span>
    </div>
  );
}

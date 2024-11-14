export default function ordinalSufixByPosition(position: number | string) {
  const posStr = String(position);

  if (posStr.endsWith("1") && posStr !== "11" && posStr !== "111") {
    return `${posStr}st`;
  } else if (posStr.endsWith("2") && posStr !== "12" && posStr !== "112") {
    return `${posStr}nd`;
  } else if (posStr.endsWith("3") && posStr !== "13" && posStr !== "113") {
    return `${posStr}rd`;
  } else {
    return `${posStr}th`;
  }
}

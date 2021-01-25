import { useEffect } from "react";

export function Delay(props: { msg: string; timeInMs: number }) {
  const { msg, timeInMs } = props;
  useEffect(() => {
    setTimeout(() => msg, timeInMs);
  }, [timeInMs]);
  return null;
}

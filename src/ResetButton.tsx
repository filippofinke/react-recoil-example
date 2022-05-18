import { useSetRecoilState } from "recoil";
import { counterState } from "./state/counterState";

export default function () {
  const setValue = useSetRecoilState(counterState);

  return <button onClick={() => setValue(0)}>Reset</button>;
}

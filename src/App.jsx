import { counterState } from "./state/counterState";
import { useRecoilValue } from "recoil";
import Counter from "./Counter";
import ResetButton from "./ResetButton";

export default function () {
  const value = useRecoilValue(counterState);

  return (
    <div className="App">
      <h1>Current value: {value}</h1>
      <Counter />
      <ResetButton />
    </div>
  );
}

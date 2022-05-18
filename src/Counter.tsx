import { useRecoilState } from "recoil";
import { counterState } from "./state/counterState";

export default function () {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div style={{ margin: "10px" }}>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

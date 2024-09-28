import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../states/store";
import { decrement,incrementAsync } from "../counter/counterSlice";

function Counter() {
  const dispactch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="card">
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => dispactch(incrementAsync(25))}>Increment</button>
        <button>{count}</button>

        <button
          onClick={() => {
            if (count != 0) {
            return  dispactch(decrement());
            }
          }}
        >
          Decrement
        </button>
      </div>

      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default Counter;

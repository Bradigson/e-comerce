import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Redux-reducer/Reducer";
const Counter = ()=>{
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();
    return(
        <div>
            <div className="d-flex align-items-center justify-content-between">
                <button onClick={()=> dispatch(decrement())}>-</button>
                    <h4>{count}</h4>
                <button onClick={()=> dispatch(increment()) }>+</button>

            </div>

        </div>
    )
}

export default Counter;
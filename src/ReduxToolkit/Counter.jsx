import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Redux-reducer/Reducer";
const Counter = ()=>{
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();
    return(
        <div>
            <div className="d-flex align-items-center justify-content-between">
                {
                    count === 0 ? (
                        <button disabled className="btn btn-primar shadow" onClick={()=> dispatch(decrement())}>-</button>
                    ) : (
                        <div>
                            <button className="btn btn-primary shadow" onClick={()=> dispatch(decrement())}>-</button>
                        </div>
                    )
                    
                }

                    <h4 className="user-select-none">{count}</h4>
                 <button className="btn btn-success  shadow" onClick={()=> dispatch(increment()) }>+</button>
                

            </div>

        </div>
    )
}

export default Counter;
// import { useDispatch, useSelector } from "react-redux";
// import { Button } from "shared/ui/Button/Button";
// import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
// import { counterActions } from "../model/slice/CouterSlice";

// const Counter = () => {
//     const dispatch = useDispatch();
//     const couterValue = useSelector(getCounterValue);

//     const inc = () => {
//         dispatch(counterActions.increment());
//     };

//     const dec = () => {
//         dispatch(counterActions.decrement());
//     };

//     return (
//         <div>
//             <h1 data-testid="value-title">{couterValue}</h1>
//             <Button
//                 data-testid="inc-btn"
//                 onClick={inc}
//             >
//                 inc
//             </Button>
//             <Button
//                 data-testid="dec-btn"
//                 onClick={dec}
//             >
//                 dec
//             </Button>
//         </div>
//     );
// };

// export default Counter;

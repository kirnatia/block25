// import { useState } from 'react'
// import './App.css'

// function Button() {
//   return (
//     <button>Click Me!</button>
//   )
// }

// function App() {
//   const [count, setCount] = useState(0)
//   const number = count;

//   return (
//     <>
//       <div>
//         <Button onClick={() => setCount(count + 1)} count is {...number}/>
//       </div>
//       <div className="card">
//         {/* <button onClick={() => setCount(count + 1)}>
//           count is {count}
//         </button> */}
//       </div>
//     </>
//   )
// }
// // export default function App() {
// //   const [count, setCount] = useState(0);
// //   return (
// //     <div className="App">
// //       <Button />
// //     </div>
// //   );
// // }

// export default App

import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Button count={count} setCount={setCount} />
    </div>
  );
}

function Button(props) {
  console.log("Props: ", props);
  return (
    <button
      onClick={() => {
        props.setCount(props.count + 1);
      }}
    >
      {props.count}
    </button>
  );
}
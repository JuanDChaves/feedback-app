import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// React 17

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>, 
//     document.getElementById("root"));

// React 18

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
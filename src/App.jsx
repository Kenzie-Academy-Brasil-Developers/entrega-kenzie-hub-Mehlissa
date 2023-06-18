import { RouterMain } from "./routes/RoutesMain";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import { Reset } from "./styles/Reset";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <div>
      <Reset />
      <GlobalStyles />

      <RouterMain />

      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;

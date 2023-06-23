import { RouterMain } from "./routes/RoutesMain";
import { Flip, Slide, toast, ToastContainer, Zoom } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import { Reset } from "./styles/Reset";
import { GlobalStyles } from "./styles/GlobalStyles";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";

function App() {
  const { loading } = useContext(UserContext);

  return (
    <div>
      <Reset />
      <GlobalStyles />

      {loading ? (
        <p>
          {toast.info("Carregando...", {
            position: "bottom-left",
            autoClose: 500,
            transition: Slide,
          })}
        </p>
      ) : (
        <RouterMain />
      )}

      <ToastContainer theme="colored" autoClose={1000} hideProgressBar={true} />
    </div>
  );
}

export default App;

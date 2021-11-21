import Routes from "../src/routes";
import { GlobalStyle } from "../src/styles/global";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;

import RouteController from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <RouteController/>
      <ToastContainer/>
    </>
  );
}

export default App;
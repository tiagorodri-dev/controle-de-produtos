import "./style/global.css";
import "./style/style.css";

import MyApp from "./Components/MyApp/MyApp";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="container">
      <ToastContainer />

      <div className="todo">
          <MyApp />
      </div>

    </div>
  );
}

export default App;

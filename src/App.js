import React, { useState, useEffect } from 'react';
import './style/global.css';
import './style/style.css';
import MyApp from './Components/MyApp/MyApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container">
      <ToastContainer />

      {loading ? (
        <div className="text-center mt-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="mt-3">
            <strong>Carregando...</strong>
          </div>
        </div>
      ) : (
        <div className="todo">
          <MyApp />
        </div>
      )}
    </div>
  );
}

export default App;

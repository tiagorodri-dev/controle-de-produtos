import "./style/global.css";
import "./style/style.css";

import Header from "./Components/Header/Header";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleCreateTask() {
    if (field1 === "" || field2 === "" || field3 === "" || field4 === "") {
      toast.error("Preencha todos os campos");
    }
    else {
      toast.success("Informações adicionadas com sucesso!");
      const idRandom = (num) => Math.floor(Math.random() * num);
      const newTask = {
        id: idRandom(223212009009),
        field1: field1,
        field2: field2,
        field3: field3,
        field4: field4,
        isComplete: false
      };

      setTasks([...tasks, newTask]);
      setField1("");
      setField2("");
      setField3("");
      setField4("");
    }
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter(remove => remove.id !== id));
    toast.success("Informações removidas com sucesso!");
  }

  const [currentDate] = useState(new Date().toLocaleDateString());

  const handlePrint = () => {
    window.print();
  }

  return (
    <div className="App">
      <ToastContainer />

      <div className="todo">
        <Header />

        <section>
          <h2>Avarias</h2>

            <div className="avaria-dados">
                <div>
                    <h5>Empresa:</h5>
                    <input type="text" className="empresa"/>
                </div>

                <div>
                    <h5>Data:</h5>
                    <span>{currentDate}</span>
                </div>

                <div>
                  <button onClick={handlePrint} className="download">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                  </button>
                </div>
            </div>

            <div className="table-container">
              <table className="table table-bordered">

                <thead>
                  <tr>
                    <th>Quantidade</th>
                    <th>#</th>
                    <th>Descrição</th>
                    <th>Código de Barras</th>
                    <th>Ações</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="bodytable">
                    <td>
                      <input
                        type="number"
                        value={field1}
                        onChange={(ev) => setField1(ev.target.value)}
                      />
                    </td>

                    <td>
                      <select value={field2} onChange={(ev) => setField2(ev.target.value)}>
                        <option value=""></option>
                        <option value="Un">Un</option>
                        <option value="Kg">Kg</option>
                        <option value="Cx">Cx</option>
                      </select>
                    </td>

                    <td>
                      <input
                        type="text"
                        value={field3}
                        onChange={(ev) => setField3(ev.target.value)}
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        value={field4}
                        onChange={(ev) => setField4(ev.target.value)}
                      />
                    </td>

                    <td>
                      <button onClick={handleCreateTask}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                      </button>
                    </td>
                  </tr>

                  {tasks.map(task => (
                    <tr key={task.id}>
                      <td>{task.field1}</td>
                      <td>{task.field2}</td>
                      <td>{task.field3}</td>
                      <td>{task.field4}</td>
                      <td>
                        <button onClick={() => handleDeleteTask(task.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                        </button>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
        </section>

      </div>

    </div>
  );
}

export default App;

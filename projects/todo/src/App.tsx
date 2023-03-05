import { Header } from "./components/Header";

import addSvg from './assets/add.svg';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.todoList}>
        <div className={styles.newTaskInputGroup}>
          <input
            placeholder="Adicione uma nova tarefa"
          />

          <button>
            Criar
            <img src={addSvg} />
          </button>
        </div>
      </div>
    </div>
  )
}
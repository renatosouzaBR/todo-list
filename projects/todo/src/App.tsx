import { Header } from "./components/Header";

import { Counter } from "./components/Counter";

import addSvg from './assets/add.svg';
import clipboardSvg from './assets/clipboard.svg';
import styles from './App.module.css';

export function App() {
  return (
    <main>
      <Header />

      <div className={styles.content}>
        <section className={styles.newTaskInputGroup}>
          <input
            placeholder="Adicione uma nova tarefa"
          />

          <button>
            Criar
            <img src={addSvg} />
          </button>
        </section>

        <section className={styles.list}>
          <header>
            <Counter title="Tarefas criadas" />
            <Counter title="Concluídas" secundary />
          </header>

          <div className={styles.tasks}>
            <img src={clipboardSvg} alt="Lista vazia" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </section>
      </div>        
    </main>
  )
}
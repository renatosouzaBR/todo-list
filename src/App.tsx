import { ChangeEvent, FormEvent, useState } from "react";

import { Header } from "./components/Header";
import { Counter } from "./components/Counter";
import { Task, TaskTypes } from "./components/Task";

import addSvg from './assets/add.svg';
import clipboardSvg from './assets/clipboard.svg';
import styles from './App.module.css';

export function App() {
  const [tasksData, setTasksData] = useState<TaskTypes[]>([]);
  const [taskText, setTaskText] = useState('');
  const completedTasks = tasksData.reduce((accumulator, currentValue) => accumulator + (currentValue.completed ? 1 : 0), 0)

  function handleChangeTaskText(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    const mergedTasks = [...tasksData, { id: tasksData.length + 1, title: taskText, completed: false }];
    setTasksData(mergedTasks);
    setTaskText('');
  }

  function handleCompleteTask(completedTask: TaskTypes) {
    const newTasksData = tasksData.map(task => {
      if (task.id === completedTask.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });

    setTasksData(newTasksData);
  }

  function handleRemoveTask(taskToRemove: TaskTypes) {
    const newTasksData = tasksData.filter(task => task.id !== taskToRemove.id);
    setTasksData(newTasksData);
  }

  return (
    <main>
      <Header />

      <div className={styles.content}>
        <form className={styles.newTaskInputGroup} onSubmit={handleAddNewTask}>
          <input
            placeholder="Adicione uma nova tarefa"
            value={taskText}
            onChange={handleChangeTaskText}
          />

          <button type="submit" disabled={taskText.trim().length === 0}>
            Criar
            <img src={addSvg} />
          </button>
        </form>

        <section className={styles.list}>
          <header>
            <Counter title="Tarefas criadas" count={tasksData.length} />
            <Counter title="Concluídas" count={completedTasks} secundary />
          </header>

          {tasksData.length === 0 &&
            <div className={styles.tasks}>
              <img src={clipboardSvg} alt="Lista vazia" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          }

          {tasksData.map(task => 
            <Task
              task={task}
              onCheckTask={() => handleCompleteTask(task)}
              onRemoveTask={() => handleRemoveTask(task)}
            />
          )}
        </section>
      </div>        
    </main>
  )
}
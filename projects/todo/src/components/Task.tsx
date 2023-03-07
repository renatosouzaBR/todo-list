import { useState } from 'react';
import { Trash, Check } from 'phosphor-react';

import styles from './Task.module.css';

export interface TaskTypes {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskProps {
  task: TaskTypes;
  onCheckTask: () => void;
  onRemoveTask: () => void;
}

export function Task({ task, onCheckTask, onRemoveTask }: TaskProps) {
  const { title, completed, } = task;

  return (
    <div className={styles.task}>
      <button className={`${styles.checkbox} ${completed && styles.checkboxChecked}`} onClick={onCheckTask}>
        {completed && <Check size={12} weight="bold" />}
      </button>

      <span className={`${styles.taskSpan} ${completed && styles.spanChecked}`}>
        {title}
      </span>

      <button className={styles.deleteButton} onClick={onRemoveTask}>
        <Trash />
      </button>
    </div>
  );
}
import { useState } from 'react';
import { Trash, Check } from 'phosphor-react';

import styles from './Task.module.css';

export function Task() {
  const [taskChecked, setTaskChecked] = useState(false);

  function handleCheckUncheckTask() {
    setTaskChecked(value => !value);
  }

  return (
    <div className={styles.task}>
      <button className={`${styles.checkbox} ${taskChecked && styles.checkboxChecked}`} onClick={handleCheckUncheckTask}>
        {taskChecked && <Check size={12} weight="bold" />}
      </button>

      <span className={`${styles.taskSpan} ${taskChecked && styles.spanChecked}`}>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </span>

      <button className={styles.deleteButton}>
        <Trash />
      </button>
    </div>
  );
}
import styles from './Counter.module.css';

interface CounterProps {
  title: string;
  secundary?: boolean;
}

export function Counter({ title, secundary }: CounterProps) {
  return (
    <strong className={!secundary ? styles.counter : `${styles.counter} ${styles.counterSecundary}`}>
      {title}
      <span>0</span>
    </strong>
  );
}
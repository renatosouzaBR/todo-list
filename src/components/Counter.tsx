import styles from './Counter.module.css';

interface CounterProps {
  title: string;
  count: number;
  secundary?: boolean;
}

export function Counter({ title, count, secundary }: CounterProps) {
  return (
    <strong className={!secundary ? styles.counter : `${styles.counter} ${styles.counterSecundary}`}>
      {title}
      <span>{count}</span>
    </strong>
  );
}
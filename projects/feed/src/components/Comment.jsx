import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <section className={styles.comment}>
      <img src="https://github.com/renatosouzaBR.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentArea}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Renato Souza</strong>
              <span>Cerca de 2h</span>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <button>
          <ThumbsUp size={20} />
          Aplaudir <span>03</span>
        </button>
      </div>
    </section>
  )
}
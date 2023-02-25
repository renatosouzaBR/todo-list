import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <img src="https://github.com/renatosouzaBR.png" />

        <div className={styles.author}>
          <strong>Renato Souza</strong>
          <span>Developer</span>
        </div>

        <time title='24 de fevereiro de 2023' dateTime='2023-02-24 13:01:00'>Publicado a 1h</time>
      </header>

      <div className={styles.postDetails}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href='#'>jane.design/doctorcare</a></p>
        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentArea}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Escreva um comentário...' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  )
}
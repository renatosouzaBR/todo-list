import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { SideBar } from './components/SideBar'
import { Post } from './components/Post'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />

        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
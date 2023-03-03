import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { SideBar } from './components/SideBar'
import { Post, PostType } from './components/Post'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      name: "Renato Souza",
      job: 'Developer',
      avatarURL: 'https://github.com/renatosouzaBR.png'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date("2023-02-25 10:10:00")
  },
  {
    id: 2,
    author: {
      name: "Carlinhos",
      job: 'Design',
      avatarURL: 'https://github.com/renatosouzaBR.png'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date("2023-02-15 12:30:00")
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />

        <main>
          {posts.map(post => 
            <Post
              key={post.id}
              post={post}
            />
          )}
        </main>
      </div>
    </div>
  )
}
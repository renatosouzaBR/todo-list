import { ChangeEvent, FormEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale'

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

interface Author {
  name: string;
  job: string;
  avatarURL: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const { author, publishedAt, content } = post;
  const formattedPublishedAt = format(publishedAt, "d 'de' LLLL 'de' yyyy", { locale: ptBR });
  const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

  const [comments, setComments] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState('');

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
  }

  function handleNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleDeleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <Avatar src={author.avatarURL} />

        <div className={styles.author}>
          <strong>{author.name}</strong>
          <span>{author.job}</span>
        </div>

        <time title={formattedPublishedAt} dateTime={publishedAt.toISOString()}>
          {publishedAtRelativeToNow}
        </time>
      </header>

      <div className={styles.postDetails}>
        {content.map(item => {
          if (item.type === 'link') return <p key={item.content}>👉 <a href='#'>{item.content}</a></p>;
          return <p key={item.content}>{item.content}</p>
        })}
      </div>

      <form onSubmit={handleNewComment} className={styles.commentArea}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Escreva um comentário...'
          onChange={handleNewCommentChange}
          value={newCommentText}
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.comments}>
        {comments.map(comment => 
          <Comment key={comment} content={comment} onDeleteComment={handleDeleteComment} />
        )}
      </div>
    </article>
  )
}
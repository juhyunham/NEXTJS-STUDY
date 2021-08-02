import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const res = await fetch(`http://localhost:8080/api/posts`)
//   const posts = await res.json();

//   return {
//     props: {
//       posts
//     }
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?start=0&_end=10`)
  const posts = await res.json();

  return {
    props: {
      posts
    },
    revalidate: 20
  }
}
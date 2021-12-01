import { createClient } from 'contentful';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindas ao novo site do MPD!
        </h1>

        <div className={styles.grid}>
          <a href="/vagas" className={styles.card}>
            <h2>Vagas &rarr;</h2>
            {/* <p>Find in-depth information about Next.js features and API.</p> */}
          </a>

          {/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_KEY, // ID of a Compose-compatible space to be used \
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // Content Delivery API - access token \
    });
  
    const res = await client.getEntries({ content_type: 'vagas' });
    console.log('--------------- > getStaticProps');
    return {
      props: {
        vagas: res.items
      }
    }
  }
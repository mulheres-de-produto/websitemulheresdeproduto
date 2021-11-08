import styles from '../styles/Home.module.css'
import { createClient } from 'contentful';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_KEY, // ID of a Compose-compatible space to be used \
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // delivery API key for the space \
  });

  const res = await client.getEntries({ content_type: 'vagas' });
  
  return {
    props: {
      vagas: res.items
    }
  }
}

export default function Vagas({ vagas }) {
  return (
    <div className="vagas-list">
      
    </div>
  )
}

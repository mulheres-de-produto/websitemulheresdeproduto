import styles from '../../styles/Home.module.css'
import { createClient } from 'contentful';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_KEY, // ID of a Compose-compatible space to be used \
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // Content Delivery API - access token \
  });

  const res = await client.getEntries({ content_type: 'vagas' });
  console.log('getStaticProps /vagas');
  return {
    props: {
      vagas: res.items
    }
  }
}

function Vaga({vaga}) {
  var vaga = vaga;
  console.log(vaga, vaga.offerDescription)
  return (
    <div className="vaga">
        <div>{vaga.title}</div>
        <div>{vaga.nivel}</div>
        <div>{vaga.link}</div>
        <br/>
        {/* <p>{vaga.OfferDescription}</p> */}
        {JSON.stringify(vaga.offerDescription)}
    </div>
  );
}
export default function Vagas({ vagas }) {
  return (
    <div className="vagas-list">
      {vagas.map(vaga => <Vaga key={`vaga-${vaga.slug}`} vaga={vaga.fields}/>)}
    </div>
  )
}

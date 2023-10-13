import styles from '../../styles/Home.module.css'
import PageLayout from '../../components/PageLayout'
import Image from 'next/image'


export default function Home({ articles = [] }) {
  return (
    <PageLayout title='NewsWeb - Home'>
      <div className={styles.container}>
        {articles.length === 0 && <p>No tenemos artículos</p>}
        
        {
          articles.length > 0 && articles.map((article, index) => (
            <article key={index}>
              <Image
                alt={`Image for the article ${article.title}`}
                src={article.urlToImage}
                width={450}
                height={300}
                quality={50}
                priority={index < 2}
              />

              <h2>{ article.title }</h2>

              <p>{ article.description }</p>
            </article>
          ))
        }
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=75d2b7166bc842d2a53249decf7ce58d');
  const { articles } = await response.json();

  return {
    props: {
      articles
    }
  };
}

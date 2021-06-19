import Head from 'next/head';
import Link from 'next/Link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='' />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor neque
          adipisci ab? Ipsa accusantium id dolor ullam repellat natus, iste
          sapiente fugiat ex ducimus ipsam veritatis voluptates accusamus
          molestiae? Quo quis minus vero, mollitia modi magni natus corporis
          odio corrupti veniam magnam. Unde sunt neque natus, iusto quod
          voluptas, officia laudantium quisquam, ab cum animi nobis voluptatem
          dolor fuga magni.
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}

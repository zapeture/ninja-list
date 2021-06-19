import styles from '../../styles/Ninjas.module.css';
import Link from 'next/Link';
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link
          href={'/ninjas/' + ninja.id}
          className={styles.single}
          key={ninja.id}>
          <h3>{ninja.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;

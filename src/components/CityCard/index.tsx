// components/CityCard.tsx
import styles from './CityCard.module.css';
import Link from 'next/link';

import Image from 'next/image';
interface CityCardProps {
  name: string;
  photo: string;
  id:string;
}

export default function CityCard({ name, photo, id }: CityCardProps) {

  return (
    <Link href={`/city/${id}`} className={styles.citycard}>
        <Image
          src={photo}
          alt={name}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 400px"
        />
      <span className={styles.label}>{name}</span>
    </Link>
  );
}

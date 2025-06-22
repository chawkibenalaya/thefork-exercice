import Image from 'next/image';
import styles from './RestaurantCard.module.css';
import RestaurantLink from '../RestaurantLink';

interface RestaurantCardProps {
  name: string;
  photo: string;
  address: {
    street: string;
    locality: string;
  };
  averagePrice: {
    amount: number;
    currency: string;
  };
  aggregateRatings?: {
    ratingValue: number;
    reviewCount: number;
  };
  offer?: string;
  id: string;
  slug:string;
}

export default function RestaurantCard({
  name,
  photo,
  address,
  averagePrice,
  aggregateRatings,
  offer,
  id,
  slug,
}: RestaurantCardProps) {
  return (
    <RestaurantLink restaurantID={id} restaurantSlug={slug}>
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={photo}
          alt={name}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.address}>
          {address.street}, {address.locality}
        </p>
        <p className={styles.price}>
          {averagePrice.amount} {averagePrice.currency}
        </p>
        {aggregateRatings && (
          <p className={styles.rating}>
            ⭐ {aggregateRatings.ratingValue} ({aggregateRatings.reviewCount} avis)
          </p>
        )}
        {offer && <p className={styles.offer}>🎁 {offer}</p>}
      </div>
    </div>
    </RestaurantLink>
  );
}

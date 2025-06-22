import Image from 'next/image';
import styles from './RestaurantCard.module.css';
import RestaurantLink from '../RestaurantLink';
import IconChatBubble from '@/components/IconChatBubble';
import { RestaurantCardProps } from '@/types/restaurant';
import { cleanName } from '@/lib/utils/cleanName';


export default function RestaurantCard({
  name,
  photo,
  address,
  averagePrice,
  aggregateRatings,
  id,
  slug,
  bestOffer
}: RestaurantCardProps) {
  return (
    <RestaurantLink restaurantID={id} restaurantSlug={slug}>
      <div className={styles.card} data-testid="restaurant-card">
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
          <div className={styles.row}>
            <div className={styles.box}>
            <h3 className={styles.name}>{cleanName(name)}</h3>
            </div>
            {aggregateRatings && <div className={styles.relative}>
              <p className={styles.rating}>
                {aggregateRatings.ratingValue.toFixed(1)} </p>
            </div>}
          </div>

          <div className={styles.row}>
            <div className={styles.box}>
              <p className={styles.address}>
                {address.street}, {address.locality}
              </p>
            </div>
            {aggregateRatings && <div className={styles.reviewCountBox}>
                <IconChatBubble /> <p className={styles.reviewCount}> {aggregateRatings.reviewCount}</p>
              </div>}
          </div>

          <p className={styles.price}>
            {averagePrice.currency === 'EUR' ? '€' : '$'}  {averagePrice.value} average price
          </p>

        </div>
        <button className={styles.book}>{bestOffer ? `Book • Up to ${bestOffer}`:'Book'}</button>
      </div>
    </RestaurantLink>
  );
}

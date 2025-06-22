import styles from './RestaurantsGrid.module.css';
import RestaurantCard from '../RestaurantCard';
import { Restaurant } from '@/types/restaurant';

interface Props {
  restaurants: Restaurant[];
}

export default function RestaurantsGrid({ restaurants }: Props) {
  return (
    <div className={styles.grid}>
      {restaurants.map((r) => (
        <RestaurantCard
          key={r.id}
          id={r.id}
          name={r.name}
          photo={r.photo}
          address={r.address}
          averagePrice={r.averagePrice}
          aggregateRatings={r.aggregateRatings}
          offer={r.offer}
          slug={r.slug}
        />
      ))}
    </div>
  );
}

'use client';
import { useState } from 'react';
import CityCard from '@/components/CityCard';
import { City } from '@/types/city';
import styles from './CityGrid.module.css';
import IconChevron from '../IconChevron';

export default function CityGridSection({ cities, selectedCity }: { cities: City[], selectedCity: City }) {
    const [expanded, setExpanded] = useState(true);

    return (
        <section>
            <div className={styles.container}>
                <h1 className={styles.city}>{selectedCity.name}</h1>
                <button className={styles.toggle} onClick={() => setExpanded(!expanded)}>
                    {expanded ? 'Collapse' : 'Expand'}
                    <span
                        className={`${styles.chevron} ${expanded ? styles.rotated : ''}`}
                        aria-hidden="true"
                    >
                        <IconChevron />
                    </span>
                </button>
            </div>

            <div className={`${styles.gridWrapper} ${!expanded ? styles.collapsed : ''}`}>
                <div className={styles.grid}>
                    {cities.filter(c=>c.id!==selectedCity.id).map((city) => (
                        <CityCard key={city.id} name={city.name} photo={city.photo} />
                    ))}
                </div>
            </div>
        </section>
    );
}

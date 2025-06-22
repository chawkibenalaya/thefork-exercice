/**
 * DO NOT EDIT
 */

import React, { PropsWithChildren } from 'react';

type RestaurantLinkType = {
  restaurantID: string;
  restaurantSlug: string;
};

const RestaurantLink: React.FC<RestaurantLinkType & PropsWithChildren> = ({
  restaurantSlug,
  restaurantID,
  ...props
}) => {
  return (
    <a
      href={`https://www.thefork.com/restaurant/${restaurantSlug}-r${restaurantID}`}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

export default RestaurantLink;

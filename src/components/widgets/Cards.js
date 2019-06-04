import React from 'react';

import { Card1, Card2, Card3, Card4, Card5 } from './card-templates';

function Card(props) {
  switch (props.variant) {
    case 'card1':
      return <Card1 />;
    case 'card2':
      return <Card2 />;
    case 'card3':
      return <Card3 />;
    case 'card4':
      return <Card4 />;
    case 'card5':
      return <Card5 />;
    default:
      return <Card1 />;
  }
}

export default Card;

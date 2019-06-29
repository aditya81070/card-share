import React from 'react';

import { Card1, Card2, Card3, Card4, Card5 } from './card-templates';

function Card(props) {
  switch (props.variant) {
    case 'card1':
      return <Card1 details={props.details} />;
    case 'card2':
      return <Card2 details={props.details} />;
    case 'card3':
      return <Card3 details={props.details} />;
    case 'card4':
      return <Card4 details={props.details} />;
    case 'card5':
      return <Card5 details={props.details} />;
    default:
      return <Card1 details={props.details} />;
  }
}

export default Card;

import React from 'react';

import Card1 from './card-templates/card1'
import Card2 from './card-templates/card2'
import Card3 from './card-templates/card3'
import Card4 from './card-templates/card4'
import Card5 from './card-templates/card5'

function Card (props) {
  switch(props.variant) {
    case 'card1' : return <Card1 />;
    break;
    case 'card2' : return <Card2 />;
    break;
    case 'card3' : return <Card3 />;
    break;
    case 'card4' : return <Card4 />;
    break;
    case 'card5' : return <Card5 />;
    break;
    default: return <Card1 />
  }
}

export default Card;




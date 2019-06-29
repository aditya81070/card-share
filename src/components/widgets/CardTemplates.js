import React from 'react';

import Card1 from '../../assets/img/templates/cards/card1.png';
import Card2 from '../../assets/img/templates/cards/card2.png';
import Card3 from '../../assets/img/templates/cards/card3.png';
import Card4 from '../../assets/img/templates/cards/card4.png';
import Card5 from '../../assets/img/templates/cards/card5.png';

function CardTemplates(props) {
  switch (props.variant) {
    case 'card1':
      return <img src={Card1} alt="card-template" />;
    case 'card2':
      return <img src={Card2} alt="card-template" />;
    case 'card3':
      return <img src={Card3} alt="card-template" />;
    case 'card4':
      return <img src={Card4} alt="card-template" />;
    case 'card5':
      return <img src={Card5} alt="card-template" />;
    default:
      return <img src={Card1} alt="card-template" />;
  }
}

export default CardTemplates;

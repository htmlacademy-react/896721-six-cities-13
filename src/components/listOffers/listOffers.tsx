// import { useState } from 'react';
import CardHotel from '../../components/cardHotel/cardHotel';
import {Offers} from '../../types/offer';

type listOffersProps = {
  cardsHotel: Offers;
}

function ListOffers({cardsHotel}: listOffersProps): JSX.Element {
  // const [idActiveCursos, setIdActiveCursos] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsHotel.map((offer) => (
        <CardHotel
          offer={offer}
          key={offer.id}
          // onMouseEnter={setIdActiveCursos(offer.id)}
          // onMouseLeave={}
        />
      ))}
    </div>
  );
};

export default ListOffers;

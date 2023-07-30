import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import MainHotelCards from '../../pages/mainHotelCards/mainHotelCards';
import Favorites from '../../pages/favorites/favorites.tsx';
import Login from '../../pages/login/login.tsx';
import OfferHotel from '../../pages/offer/offer.tsx';
import Message404 from '../../pages/404/404.tsx';

type AppScreenProps = {
  cardHotelCount: number;
}

function App({cardHotelCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainHotelCards cardHotelCount={cardHotelCount} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<Favorites />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferHotel />}
        />
        <Route
          path="*"
          element={<Message404 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainHotelCards from '../../pages/mainHotelCards/mainHotelCards';
import Favorites from '../../pages/favorites/favorites.tsx';
import Login from '../../pages/login/login.tsx';
import OfferHotel from '../../pages/offer/offer.tsx';
import Message404 from '../../pages/404/404.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import {Offers} from '../../types/offer';

type AppScreenProps = {
  cardsHotel: Offers;
}

function App({cardsHotel}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainHotelCards cardsHotel={cardsHotel} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites cardsHotel={cardsHotel}/>
              </PrivateRoute>
            }
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
    </HelmetProvider>
  );
}

export default App;

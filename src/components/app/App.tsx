import MainHotelCards from '../../pages/mainHotelCards/mainHotelCards';

type AppScreenProps = {
  cardHotelCount: number;
}

function App({cardHotelCount}: AppScreenProps): JSX.Element {
  return (
    <MainHotelCards cardHotelCount={cardHotelCount} />
  );
}

export default App;

import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TableCoins from './TableCoins';

export default function TablaApi() {
  const [coins, setCoins] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1'
    );
    setCoins(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Coin Market Brañañin</h1>
      <TableCoins coins={coins} />
    </div>
  );
}

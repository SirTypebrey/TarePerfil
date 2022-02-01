import React from 'react';
import CoinRow from './CoinRow';
import uuid from 'react-uuid';
const TableCoins = ({ coins }) => {
  const propiedades = ['#', 'NAME', 'PRICE', 'PRICE CHANGE', 'MAX SUPPLY'];
  return (
    <table>
      <thead>
        <tr>
          {propiedades.map((propiedad) => (
            <td key={uuid()}>{propiedad}</td>
          ))}
        </tr>
      </thead>
      <tbody className="ms-3000">
        {coins.map((coin, index) => (
          <CoinRow coin={coin} key={index} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;

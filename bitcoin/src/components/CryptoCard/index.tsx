import type { BitcoinHistoryResponse } from "../../types/types";

interface CryptoCardProps {
  crypto: BitcoinHistoryResponse;
}

const CryptoCard = ({ crypto }: CryptoCardProps) => {
  return (
    <>
      <div className="coin-header">
        <img src={crypto.image.small} alt={crypto.name} width={48} />
        <h2 className="symbol">
          {crypto.name} ({crypto.symbol.toUpperCase()})
        </h2>
      </div>
      <li className="label">
        USD:{" "}
        {crypto.market_data.current_price.usd.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </li>

      <li className="label">
        BRL:{" "}
        {crypto.market_data.current_price.brl.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </li>

      <li className="label">
        EUR:{" "}
        {crypto.market_data.current_price.eur.toLocaleString("de-DE", {
          style: "currency",
          currency: "EUR",
        })}
      </li>
    </>
  );
};

export default CryptoCard;

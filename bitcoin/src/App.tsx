import { CryptoCard } from "./components";
import type { BitcoinHistoryResponse } from "./types/types";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState<BitcoinHistoryResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin/history?date=22-10-2026",
        );

        if (!response.ok) {
          throw new Error(
            `Erro ${response.status}: Não foi possível buscar os dados.`,
          );
        }

        const json: BitcoinHistoryResponse = await response.json();
        setData(json);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erro desconhecido");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) return <p className="loading">Carregando dados...</p>;
  if (error)
    return (
      <p className="error" style={{ color: "red" }}>
        Erro: {error}
      </p>
    );

  return (
    <>
      <h1>histórico do BitCoin</h1>
      {data && <CryptoCard crypto={data} />}
    </>
  );
}

export default App;

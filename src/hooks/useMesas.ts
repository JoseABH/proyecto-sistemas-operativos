// src/hooks/useMesas.ts
import { useState, useEffect } from 'react';
import { Mesas } from '../types/Mesa';
import { getMesas } from '../Services/Mesas';

const useMesas = () => {
  const [mesas, setMesas] = useState<Mesas[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMesas = async () => {
      const mesasData = await getMesas();
      setMesas(mesasData);
      setLoading(false);
    };

    fetchMesas();
  }, []);

  return { mesas, loading };
};

export default useMesas;

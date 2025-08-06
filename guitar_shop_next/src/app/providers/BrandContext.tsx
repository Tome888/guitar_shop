"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Brand = {
  id: string;
  image: string;
  name: string;
  origin: string;
};

type BrandContextType = {
  brands: Brand[];
  loading: boolean;
  error: string | null;
};

const BrandContext = createContext<BrandContextType>({
  brands: [],
  loading: false,
  error: null,
});

export const useBrandContext = () => useContext(BrandContext);

export const BrandProvider = ({ children }: { children: React.ReactNode }) => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getBrands = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/getBrands");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: Brand[] = await res.json();
        setBrands(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    getBrands();
  }, []);

  return (
    <BrandContext.Provider value={{ brands, loading, error }}>
      {children}
    </BrandContext.Provider>
  );
};

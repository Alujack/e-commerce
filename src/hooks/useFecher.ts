// hooks/useFetcher.ts
import { useState, useEffect } from 'react';

interface FetcherOptions extends RequestInit {
  // Extend as needed, for example:
  // customOption?: string;
}

interface FetcherResult<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

const useFetcher = <T>(url: string, options: FetcherOptions = {}): FetcherResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, error, loading };
};

export default useFetcher;

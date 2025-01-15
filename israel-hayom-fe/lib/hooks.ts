"use client";

import { useState, useEffect } from "react";
import { Writer } from "@/lib/types";

const useFetchWriters = () => {
  const [writersData, setWritersData] = useState<Writer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWriters = async () => {
      try {
        const response = await fetch("/api/writers");
        if (!response.ok) {
          throw new Error("Failed to fetch writers");
        }
        const data = await response.json();
        setWritersData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch writers");
      } finally {
        setLoading(false);
      }
    };
    fetchWriters();
  }, []);

  return { writersData, loading, error };
};

export default useFetchWriters;

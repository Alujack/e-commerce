// utils/fetcher.ts
import { getSession } from "next-auth/react";

export const fetchData = async (url: string) => {
  const session = await getSession();
  if (!session || !session.accessToken) {
    throw new Error("No session or access token found");
  }

  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${session.accessToken}`
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

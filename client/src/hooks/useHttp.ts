import { useState } from "react";

export const useHttp = () => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const request = async (url: string, method = "GET", headers = {}, body = null) => {
    setPending(true);

    try {
      const res = await fetch(url, {
        method,
        headers,
        body,
      });
      const data = await res.json();

      setPending(false);

      if (!res.ok) throw new Error(data.message ?? "Response error");

      return data;
    } catch (e) {
      setError(true);
      throw e;
    }
  };

  return { pending, error, request };
};

export default useHttp;

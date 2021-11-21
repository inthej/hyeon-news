import {useEffect, useState} from "react";

export default function usePromise(promiseCreator, deps) {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  const process = async () => {
    setLoading(true);
    try {
      const resolved = await promiseCreator();
      setResolved(resolved);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    process();
  }, deps);

  return [loading, resolved, error];
}

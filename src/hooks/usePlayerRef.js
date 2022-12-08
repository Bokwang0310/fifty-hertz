import { useRef, useCallback } from "react";

export function usePlayerRef() {
  const playerRef = useRef(null);
  const setPlayerRef = useCallback((node) => {
    if (node !== null) playerRef.current = node;
  }, []);
  return [playerRef, setPlayerRef];
}

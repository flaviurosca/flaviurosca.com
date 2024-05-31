import { useEffect, useRef } from "react";
import baffle from "baffle";

const useBaffle = (selector: string) => {
  const baffleRef = useRef<ReturnType<typeof baffle> | null>(null);

  useEffect(() => {
    const target = baffle(selector);
    target.set({
      characters: "/ ░>/▓▓ █▓▓>▓ █▓█ ▒█▒// ░█▒▒ ▓>/ ▒▒░▒ <░▓█",
      speed: 120,
    });
    target.start();
    target.reveal(4000, 100);
    baffleRef.current = target;

    const interval = setInterval(() => {
      if (baffleRef.current) {
        baffleRef.current.start();
        baffleRef.current.reveal(4000, 100);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [selector]);

  return baffleRef;
};

export default useBaffle;

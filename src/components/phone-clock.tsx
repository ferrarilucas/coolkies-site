"use client";

import { useEffect, useState } from "react";

const format = (date: Date) =>
  date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", hour12: false });

export function PhoneClock() {
  const [time, setTime] = useState("9:41");

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    const tick = () => setTime(format(new Date()));

    tick();
    const untilNextMinute = 60000 - (Date.now() % 60000);
    const timeout = setTimeout(() => {
      tick();
      interval = setInterval(tick, 60000);
    }, untilNextMinute);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return <span className="tabular-nums">{time}</span>;
}

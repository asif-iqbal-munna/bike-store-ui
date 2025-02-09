"use client";

import { Typography } from "antd";
import { useEffect, useState } from "react";

const { Text } = Typography;

interface CountdownTimerProps {
  targetDate: Date;
}

const timerStyle: React.CSSProperties = {
  display: "flex",
  gap: "16px",
  color: "#fff",
};

const timeBlockStyle: React.CSSProperties = {
  textAlign: "center",
};

const numberStyle: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: "bold",
  lineHeight: 1,
  margin: 0,
};

const labelStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  textTransform: "uppercase",
};

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div style={timerStyle}>
      <div style={timeBlockStyle}>
        <Text style={numberStyle}>{timeLeft.days}</Text>
        <div style={labelStyle}>Days</div>
      </div>
      <Text style={numberStyle}>:</Text>
      <div style={timeBlockStyle}>
        <Text style={numberStyle}>{timeLeft.hours}</Text>
        <div style={labelStyle}>Hours</div>
      </div>
      <Text style={numberStyle}>:</Text>
      <div style={timeBlockStyle}>
        <Text style={numberStyle}>{timeLeft.minutes}</Text>
        <div style={labelStyle}>Minutes</div>
      </div>
      <Text style={numberStyle}>:</Text>
      <div style={timeBlockStyle}>
        <Text style={numberStyle}>{timeLeft.seconds}</Text>
        <div style={labelStyle}>Seconds</div>
      </div>
    </div>
  );
}

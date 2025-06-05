/// components/Typewriter.jsx
  import { useEffect, useState } from "react";

  export default function Typewriter({ text = "", speed = 50 }) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
      if (typeof text !== "string") return;

      setDisplayed("");
      let i = 0;
      const interval = setInterval(() => {
        if (i >= text.length) {
          clearInterval(interval);
          return;
        }
        setDisplayed((prev) => prev + text[i]);
        i++;
      }, speed);

      return () => clearInterval(interval);
    }, [text, speed]);

    return <span>{displayed}</span>;
  }










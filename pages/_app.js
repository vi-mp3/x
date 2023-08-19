import "@/styles/globals.css";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function App({ Component, pageProps }) {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <>
      {client && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "white",
          }}
          outerStyle={{
            border: "3px solid white",
          }}
        />
      )}
      <Component {...pageProps} />
    </>
  );
}

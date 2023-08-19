import { useEffect, useState } from "react";
import keyboardjs from "keyboardjs";
import debounce from "lodash/debounce";

export default function Home() {
  const [level, setLevel] = useState(false);
  const [jump, setJump] = useState(false);

  const debouncedJump = debounce(() => setJump(false), 1000);

  function openLevel() {
    setLevel(true);
  }

  useEffect(() => {
    keyboardjs.bind("space", () => {
      if (!level) {
        return;
      }

      setJump(true);
      debouncedJump();
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 mx-auto max-w-5xl mt-8">
      {!level &&
        [...Array(9)].map(() => (
          <div
            onClick={openLevel}
            className="bg-gray-500 rounded-lg px-4 pt-2 pb-32 text-2xl hover:bg-gray-400 transition"
          >
            Level Name
          </div>
        ))}
      {level && (
        <div>
          <div
            className={`bg-gray-500 ${
              jump ? "mt-[200px]" : "mt-[400px]"
            } w-32 h-[200px]`}
          >
            &nbsp;
          </div>
        </div>
      )}
    </div>
  );
}
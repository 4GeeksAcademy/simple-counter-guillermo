import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import ResetButton from "./ResetButton";

const UnitsCounter = () => {
  console.log("UnitsCounter");
  const [units, setUnits] = useState(0);
  const [tens, setTens] = useState(0);
  const [hundreds, setHundreds] = useState(0);
  const [thousands, setThousands] = useState(0);
  const [millions, setMillions] = useState(0);
  const [tenMillions, setTenMillions] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    const interval = setInterval(() => {
      console.log("interval");
      setUnits((prevUnits) => {
        if (prevUnits === 9) {
          setTens((prevTens) => {
            if (prevTens === 9) {
              setHundreds((prevHundreds) => {
                if (prevHundreds === 9) {
                  setThousands((prevThousands) => {
                    if (prevThousands === 9) {
                      setMillions((prevMillions) => {
                        if (prevMillions === 9) {
                          setTenMillions((prevTenMillions) => prevTenMillions + 1);
                          return 0;
                        } else {
                          return prevMillions + 1;
                        }
                      });
                      return 0;
                    } else {
                      return prevThousands + 1;
                    }
                  });
                  return 0;
                } else {
                  return prevHundreds + 1;
                }
              });
              return 0;
            } else {
              return prevTens + 1;
            }
          });
          return 0;
        } else {
          return prevUnits + 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-24 bg-black text-center w-full justify-center gap-x-2.5">
      <Counter>
        <p>
          <i className="fa-regular fa-clock"></i>
        </p>
      </Counter>
      <Counter value={tenMillions} />
      <Counter value={millions} />
      <Counter value={thousands} />
      <Counter value={hundreds} />
      <Counter value={tens} />
      <Counter value={units} />
      <ResetButton 
        setUnits={setUnits}
        setTens={setTens}
        setHundreds={setHundreds}
        setThousands={setThousands}
        setMillions={setMillions}
        setTenMillions={setTenMillions}
      />
    </div>
  );
};

export default UnitsCounter;

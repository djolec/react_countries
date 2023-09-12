import React from "react";
import BorderButton from "./BorderButton";

const Borders = ({ country }) => {
  const { borders = [] } = country;

  const neededInfo = {
    borders
  };

  return (
    <div>
      <p className="text-[var(--text)] 2xl:text-2xl font-bold transition-colors ease-in-out duration-150">
        Border Countries:
      </p>

      {borders.length > 0 ? (
        <div className="grid grid-cols-border 2xl:grid-cols-borderBig gap-x-[10px] 2xl:gap-x-[20px]">
          {neededInfo.borders.map((border) => {
            return <BorderButton border={border} key={border}/>;
          })}
        </div>
      ) : (
        <p className="text-[var(--text)] 2xl:text-2xl">This country doesn't have any land borders.</p>
      )}
    </div>
  );
};

export default Borders;

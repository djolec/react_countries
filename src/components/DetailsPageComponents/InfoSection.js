import React from "react";


const InfoSection = ({ country }) => {
  console.log(country)
  const {
    timezones,
    landlocked,
    car: { side: drivingSide },
    area,
    name: { nativeName: nativeName },
    population,
    continents: region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders = [],
  } = country;

  const neededInfo = {
    timezones: timezones.join(", "),
    nativeName: nativeName !== undefined ? Object.values(nativeName).map((natName) => {
        return natName.official;
      })
      .join(", ") : "No native name"
      ,
    population: population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 "),
    area: area.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 "),
    region: region.length > 1 ? region.join(", ") : region,
    subregion: subregion !== undefined ? subregion : "No subregion",
    capitalCity: capital !== undefined ? capital.join(", ") : "No capital city",
    domain: tld !== undefined ? tld[0] : "No domain",
    currencies:
      currencies !== undefined
        ? Object.values(currencies)[0].name
        : "No currency",
    languages: languages !== undefined ? Object.values(languages).join(", ") : "No languages",
    borders,
  };

  return (
    <div className="flex sm:flex-row flex-col justify-between gap-8">
      <div className="sm:w-1/2 w-full flex flex-col gap-2 text-[var(--text)]">
            <p className="font-bold 2xl:text-2xl">
                Native name:&nbsp;
                <span className="font-normal">{neededInfo.nativeName}</span>
            </p>
            <p className="font-bold 2xl:text-2xl">
                Population:&nbsp;
                <span className="font-normal">{neededInfo.population}</span>
            </p>
            <p className="font-bold 2xl:text-2xl">
                Region:&nbsp;
                <span className="font-normal">{neededInfo.region}</span>
            </p>
            <p className="font-bold 2xl:text-2xl">
                Sub Region:&nbsp;
                <span className="font-normal">{neededInfo.subregion}</span>
            </p>
            <p className="font-bold 2xl:text-2xl">
                Capital:&nbsp;
                <span className="font-normal">{neededInfo.capitalCity}</span>
            </p>
            <p className="font-bold 2xl:text-2xl">
                Timezones:&nbsp;
                <span className="font-normal">{neededInfo.timezones}</span>
            </p>
      </div>
      <div className="flex flex-col gap-2 text-[var(--text)] sm:w-1/2 w-full">
            <p className="font-bold 2xl:text-2xl">
                Top Level Domain:&nbsp;
                <span className="font-normal">{neededInfo.domain}</span>
            </p>
            <p className="font-bold 2xl:text-2xl">
                Currencies:&nbsp;
                <span className="font-normal">{neededInfo.currencies}</span>
            </p>
            <p className="font-bold 2xl:text-2xl">
                Area:&nbsp;
                <span className="font-normal">{neededInfo.area} km²</span>
            </p>
            <p className="font-bold 2xl:text-2xl">
                Driving side:&nbsp;
                <span className="font-normal">{drivingSide}</span>
            </p>
            <p className="font-bold 2xl:text-2xl">
                Landlocked:&nbsp;
                <span className="font-normal">{landlocked ? "yes" : "no"}</span>
            </p>
            <p className="font-bold 2xl:text-2xl">
                Languages:&nbsp;
                <span className="font-normal">{neededInfo.languages}</span>
            </p>
      </div>
    </div>
  );
};

export default InfoSection;

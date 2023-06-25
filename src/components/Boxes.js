import React from "react";

export default function Boxes() {
  const Stats = [
    {
      Tittle: "Profile Viewed",
      Count: "23",
    },
    {
      Tittle: "Total Reach",
      Count: "23",
    },
    {
      Tittle: "Total Orders",
      Count: "23",
    },
    {
      Tittle: "Total Discovers",
      Count: "23",
    },
  ];
  return (
    <section className="grid grid-cols-2 py-24  gap-5 px-5 lg:flex lg:items-center lg:justify-center">
      {Stats.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <div className="border-[2px] max-w-sm px-12 py-8 hover:shadow-md shadow-slate-200 duration-300 ease-in-out shadow-sm border-slate-100 cursor-pointer">
              <div className="text-center space-y-1.5">
                <h1 className="md:text-lg font-semibold">{_.Tittle}</h1>
                <p>{_.Count}</p>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </section>
  );
}

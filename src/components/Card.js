export default function Card() {
  const data = [
    {
      image:
        "https://images.pexels.com/photos/6766286/pexels-photo-6766286.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: "Tailor",
      About:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Contact: "8317680338",
      Address: "Kandlakoya",
    },
    {
      image:
        "https://images.pexels.com/photos/6766286/pexels-photo-6766286.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: "Tailor",
      About:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Contact: "8317680338",
      Address: "Kandlakoya",
    },
    {
      image:
        "https://images.pexels.com/photos/6766286/pexels-photo-6766286.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: "Tailor",
      About:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Contact: "8317680338",
      Address: "Kandlakoya",
    },
    {
      image:
        "https://images.pexels.com/photos/6766286/pexels-photo-6766286.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: "Tailor",
      About:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Contact: "8317680338",
      Address: "Kandlakoya",
    },
    {
      image:
        "https://images.pexels.com/photos/6766286/pexels-photo-6766286.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: "Tailor",
      About:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Contact: "8317680338",
      Address: "Kandlakoya",
    },
    {
      image:
        "https://images.pexels.com/photos/6766286/pexels-photo-6766286.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: "Tailor",
      About:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Contact: "8317680338",
      Address: "Kandlakoya",
    },
    {
      image:
        "https://images.pexels.com/photos/6766286/pexels-photo-6766286.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: "Tailor",
      About:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Contact: "8317680338",
      Address: "Kandlakoya",
    },
    {
      image:
        "https://images.pexels.com/photos/6766286/pexels-photo-6766286.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: "Tailor",
      About:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Contact: "8317680338",
      Address: "Kandlakoya",
    },
  ];

  return (
    <main className="px-6 py-10 flex justify-center flex-col gap-5 items-center sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 sm:gap-6">
      {data.map((_, index) => {
        return (
          <>
            <div
              key={index}
              className="border-[0.3px] border-slate-200 shadow-sm rounded-xl p-3 max-w-sm md:max-w-xl hover:shadow-md duration-300 ease-in-out cursor-pointer"
            >
              <div>
                <img src={_.image} alt="pic" className="rounded-lg" />
                <div className="space-y-2.5 my-3.5 pl-1">
                  <h1 className="text-2xl font-semibold">{_.Name}</h1>
                  <p className="leading-7 text-sm">{_.About.slice(0, 150)}</p>
                </div>
                <div className="flex items-center justify-end space-x-4 py-3.5">
                  <button className="bg-yellow-500 text-white px-6 py-1.5 rounded-full font-semibold text-sm">
                    View Profile
                  </button>
                  <button className="bg-yellow-500 text-white px-6 py-1.5 rounded-full font-semibold text-sm">
                    <a href={`tel:${_.Contact}`}>Contact</a>
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </main>
  );
}

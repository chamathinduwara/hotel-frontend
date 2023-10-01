"use client";

// component import
import Item from "./Item";

const Photos = [
  { id: 1, url: "/background/bg1.jpg", alt: "photo1" },
  { id: 2, url: "/background/bg2.jpg", alt: "photo2" },
  { id: 3, url: "/background/bg3.jpg", alt: "photo3" },
];

const New = () => {
  return (
    <div className="bg-white mt-10 pt-10 px-16">
      <div className="flex items-start justify-start w-full ">
        <h1 className="text-4xl text-blue-800 font-bold font-serif ">NEW</h1>
      </div>
      <p className="mt-2 text-2xl font-light font-serif text-black tracking-wider">
        adslf asd jfa lkasjdf jdsa
      </p>
      <div className="flex items-center justify-between w-full h-fit mt-5">
        {Photos.map((photo) => (
          <div className="" key={photo.id}>
            <Item id={photo.id} url={photo.url} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;

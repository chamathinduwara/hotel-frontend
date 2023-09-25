"use client";

const Search = () => {
  return (
    <div className="flex flex-row w-fit h-16 items-center justify-center bg-gray-200 px-2 bg-opacity-50">
      <form className="flex flex-row items-center justify-center">
        <div className="flex justify-center items-center mr-1 bg-white h-12">
          <input
            className=" mx-2 outline-dotted outline-1 text-black placeholder:text-black pl-2"
            placeholder="Date"
            type="date"
          />
          <input
            className=" mr-2 outline-dotted outline-1  text-black placeholder:text-black pl-2"
            placeholder="Date"
            type="date"
          />
        </div>
        <div className="flex justify-center items-center mr-1 bg-white h-12">
          <input
            className="outline-dotted outline-1 mx-2 text-black placeholder:text-black pl-2"
            placeholder="1 Room, 1 Adult, 0 Children"
            type="text"
          />
        </div>
        <div className="flex justify-center items-center mr-1 bg-white h-12">
          <input
            className="outline-dotted outline-1 mx-2 text-black placeholder:text-black pl-2"
            placeholder="1 Room, 1 Adult, 0 Children"
            type="text"
          />
        </div>
        <button className="btn bg-yellow-300 h-12 p-2 text-lg text-gray-800 font-semibold">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;

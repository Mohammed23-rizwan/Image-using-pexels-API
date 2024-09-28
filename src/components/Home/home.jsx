import { useEffect, useRef, useState } from "react";
import MenuList from "../menulist/menuList";
import DisplayItem from "../DisplayItem/DisplayItem";
const Home = () => {
  const inputRef = useRef();
  const [data, setData] = useState("nature");
  const [fiData, setfiData] = useState();

  const generate = () => {
    setData(inputRef.current.value);
  };
  const output = async (data) => {
    const url = `https://api.pexels.com/v1/search?query=${data}&per_page=15`;
    await fetch(url, {
      headers: {
        Authorization: import.meta.env.VITE_API_KEY,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((msg) => {
        setfiData(msg.photos);
      })
      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    output(data);
  }, [data]);

  return (
    <div className=" w-full min-h-screen grid place-items-center my-[55px]">
      <div className=" w-[90%] min-h-[90%] bg-[#fff] rounded-[5px] shadow-[-6px_18px_13px_35px_#fff5f5] px-4 border border-black">
        <div className="serach w-full m-[25px] flex justify-center">
          <input
            type="text"
            ref={inputRef}
            name=""
            id=""
            className="bg-transparent outline-none border-[2px] border-red-100 p-1"
            placeholder="Search..."
          />
          <button
            className="px-4 py-[5px] ml-[25px] bg-red-100 rounded-[5px]"
            onClick={() => {
              generate();
            }}
          >
            Search
          </button>
        </div>
        <MenuList />
        <DisplayItem fiData={fiData} />
      </div>
    </div>
  );
};

export default Home;

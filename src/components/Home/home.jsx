import MenuList from "../menulist/menuList";
const Home = () => {
  return (
    <div className=" w-full min-h-screen grid place-items-center my-[55px]">
      <div className=" w-[90%] min-h-[90%] bg-[#fff] rounded-[5px] shadow-[-6px_18px_13px_35px_#fff5f5] px-4">
        <div className="serach w-full m-[25px] flex justify-center">
          <input
            type="text"
            name=""
            id=""
            className="bg-transparent outline-none border-[2px] border-red-100 p-1"
            placeholder="Search..."
          />
          <button className="px-4 py-[5px] ml-[25px] bg-red-100 rounded-[5px]">
            Search
          </button>
        </div>
        <MenuList />
      </div>
    </div>
  );
};

export default Home;

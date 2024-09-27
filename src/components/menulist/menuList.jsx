import DisplayItem from "../DisplayItem/DisplayItem";

/* eslint-disable react/jsx-key */
const MenuList = () => {
  const defaultValue = ["Nature", "Ocean", "Forest"];
  return (
    <div>
      <ul className=" w-full flex gap-[10px]  mb-[25px]">
        {defaultValue.map((item) => {
          return (
            <li className="w-[80px] h-[30px] border border-red-100 text-center text-base capitalize cursor-pointer">
              {item}
            </li>
          );
        })}
      </ul>
      <DisplayItem />
    </div>
  );
};

export default MenuList;

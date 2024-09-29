// eslint-disable-next-line react/prop-types
const MenuList = ({ setData }) => {
  const defaultValue = [
    { id: 1, data: "Nature" },
    { id: 2, data: "ocean" },
    { id: 3, data: "dark" },
  ];

  return (
    <div>
      <ul className=" w-full flex gap-[10px]  mb-[25px]">
        {defaultValue.map((item) => {
          return (
            <li
              key={item.id}
              className="w-[80px] h-[30px] border border-red-100 text-center text-base capitalize cursor-pointer bg-red-100 text-black rounded-[5px]"
              onClick={(items) => {
                const out = items.target.innerText;
                setData(out);
              }}
            >
              {item.data}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuList;

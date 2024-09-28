import { useEffect } from "react";

/* eslint-disable react/prop-types */
const DisplayItem = ({ fiData }) => {
  const data = "Please Enter a Valid Title";
  useEffect(() => {}, [fiData]);
  return (
    <div className="grid grid-cols-5 place-items-center gap-3 mb-4">
      {/* {if(fidata ==0){return <h6></h6>}} */}
      {fiData == 0 ? (
        <h6 className="text-center text-lg"> {data}</h6>
      ) : (
        fiData?.map((item) => {
          return (
            <div
              key={item.id}
              className="w-full h-[250px] border border-red-100 mb-4 overflow-hidden"
            >
              <img
                src={item.src.medium}
                alt=""
                className="w-full h-full object-cover hover:scale-150 ease-in-out duration-1000"
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default DisplayItem;

// eslint-disable-next-line no-unused-vars
import { useEffect, useRef } from "react";
import Home from "./components/Home/home";

const App = () => {
  // const [data, setdata] = useState();
  // const query = "nature";

  // const [inputValue, setInputValue] = useState("");
  // const previousInputValue = useRef("");

  // const generatetitle = () => {
  //   console.log(previousInputValue.current.value);
  // };

  // const fetching = async (dataing) => {
  //   const url = `https://api.pexels.com/v1/search?query=${dataing}&per_page=100`;
  //   await fetch(url, {
  //     headers: {
  //       Authorization: import.meta.env.VITE_API_KEY,
  //     },
  //   })
  //     .then((resp) => {
  //       return resp.json();
  //     })
  //     .then((datas) => {
  //       return setdata(datas.photos);
  //     });
  // };
  // useEffect(() => {
  // fetching(query);
  // console.log(previousInputValue);
  // }, []);
  // console.log(data);

  return (
    <div>
      {/* {data?.map((item) => {
        return (
          <div key={item.id} className="container">
            <img src={item.src.medium} alt="" />
          </div>
        );
      })} */}
      {/* <h1>App</h1> */}
      {/* <input type="text" name="" id="" ref={useingRef} />
      <button>click</button> */}
      {/* <input type="text" ref={previousInputValue} />
      <button
        type="button"
        onClick={() => {
          generatetitle();
        }}
      >
        Click
      </button> */}
      <Home />
    </div>
  );
};

export default App;

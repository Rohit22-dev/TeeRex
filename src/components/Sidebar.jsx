import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Sidebar = () => {
  const { setData, tempData, toggleButton, setToggleButton } =
    useContext(UserContext);

  const filterData = {
    Color: [
      "Red",
      "Blue",
      "Green",
      "Black",
      "Pink",
      "Grey",
      "White",
      "Purple",
      "Yellow",
    ],
    Gender: ["Men", "Women"],
    Price: ["0-Rs250", "Rs251-450", "Rs 451"],
    Type: ["Polo", "Hoodie", "Basic"],
  };

  const [selectedFilter, setSelectedFilter] = useState({
    Color: "",
    Gender: "",
    Price: "",
    Type: "",
  });

  useEffect(() => {
    let selectedItems = [...tempData];
    for (var key in selectedFilter) {
      if (selectedFilter[key] !== "") {
        switch (key) {
          case "Price":
            switch (selectedFilter[key]) {
              case "0-Rs250":
                selectedItems = selectedItems.filter(
                  (item) => item.price <= 250
                );
                break;
              case "Rs251-450":
                selectedItems = selectedItems.filter(
                  (item) => item.price >= 251 && item.price <= 450
                );
                break;
              case "Rs 451":
                selectedItems = selectedItems.filter(
                  (item) => item.price > 451
                );
                break;
              default:
                break;
            }
            break;
          default:
            selectedItems = selectedItems.filter(
              (item) => item[key.toLowerCase()] === selectedFilter[key]
            );
            break;
        }
      }
    }
    setData(selectedItems);
  }, [selectedFilter]);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setSelectedFilter((prevState) => {
      return { ...prevState, [name]: checked ? value : "" };
    });
  };

  return (
    <>
      {toggleButton && (
        <div className="z-10 fixed top-0 -right-2 p-5 w-1/2 h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism border-none text-white animate-slide-in ">
          <div
            onClick={() => setToggleButton(false)}
            className="text-xl w-full my-2"
          >
            <CloseRoundedIcon className="cursor-pointer" />
          </div>
          <div className="self-center">
            {Object.entries(filterData).map((data, i) => {
              return (
                <div className="py-1" key={i}>
                  <h1 className="font-bold text-black">{data[0]}</h1>
                  {data[1].map((option, index) => {
                    return (
                      <div key={index}>
                        <input
                          type="checkbox"
                          name={data[0]}
                          value={option}
                          checked={selectedFilter[data[0]] === option}
                          onChange={handleChange}
                        />
                        <label className="font-semibold text-sm ml-2">
                          {option}
                        </label>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="gap-2 shadow-lg rounded-sm p-4 pl-8 hidden sm:block h-fit mt-20 w-[20rem] sticky top-44">
        {Object.entries(filterData).map((data, i) => {
          return (
            <div className="py-1" key={i}>
              <h1 className="font-bold text-black">{data[0]}</h1>
              {data[1].map((option, index) => {
                return (
                  <div key={index}>
                    <input
                      type="checkbox"
                      name={data[0]}
                      value={option}
                      checked={selectedFilter[data[0]] === option}
                      onChange={handleChange}
                    />
                    <label className="font-semibold text-sm ml-2">
                      {option}
                    </label>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
{
  /* <div>
  {toggleButton && (
        <div className="z-10 fixed top-0 -right-2 p-5 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism border-none text-white animate-slide-in ">
          <div
            onClick={() => setToggleButton(false)}
            className="text-xl w-full my-2"
          >
            <CloseRoundedIcon className="cursor-pointer" />
          </div>
        </div>
      )}
  <div className={toggleButton?"self-center":"gap-2 shadow-lg rounded-sm p-4 pl-8 hidden sm:block h-fit mt-20 w-[20rem] sticky top-44"}>
        {Object.entries(filterData).map((data, i) => {
          return (
            <div className="py-1" key={i}>
              <h1 className="font-bold text-black">{data[0]}</h1>
              {data[1].map((option, index) => {
                return (
                  <div key={index}>
                    <input
                      type="checkbox"
                      name={data[0]}
                      value={option}
                      checked={selectedFilter[data[0]] === option}
                      onChange={handleChange}
                    />
                    <label className="font-semibold text-sm ml-2">
                      {option}
                    </label>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
</div>*/
}

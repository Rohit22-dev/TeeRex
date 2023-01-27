import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

const Sidebar = () => {
  const { setData, tempData } = useContext(UserContext);

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
    // console.log(selectedItems, selectedFilter, "hello");
    setData(selectedItems);
    // console.log(Data);
  }, [selectedFilter]);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setSelectedFilter((prevState) => {
      return { ...prevState, [name]: checked ? value : "" };
    });
  };

  return (
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
                  <label className="font-semibold text-sm ml-2">{option}</label>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;

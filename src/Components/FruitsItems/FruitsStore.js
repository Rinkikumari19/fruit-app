import React from "../../hooks/CusModules";
import { FruitLists } from "../../utils/common";
import CustomButton from "../../shared/CustomButton";
import { Box } from "../../hooks/CusMaterialComponents";

export const FruitsStore = ({ data, searchString }) => {
  return (
    <Box className="available-div">
      {FruitLists.filter(
        (item) =>
          item.name.toLowerCase().includes(searchString.toLowerCase()) &&
          item.type.toLowerCase().includes(data.toLowerCase())
      ).map((ele, i) => {
        return (
          <Box className="fruit-card fruit-c-ml">
            <img className="sub-slider" src={ele.img} alt={ele.alt} />
            <h4>{ele.name}</h4>
            <p>{ele.qty}</p>
            <Box className="fruits-items">
              <CustomButton>{ele.price}</CustomButton>
              <CustomButton className="heading">Add</CustomButton>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

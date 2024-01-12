import { Box } from "../../hooks/CusMaterialComponents";
import { FruitsStore } from "./FruitsStore";

export default function OutOfStockFood({ data, searchString }) {
  return (
    <>
      <Box className=" home-div">
        <Box className="contact-head">
          <u>
            <Box
              className="available-dot"
              style={{ background: "red", marginLeft: "42%" }}
            ></Box>
            <h5>Out Of Stock Fruits</h5>
          </u>
        </Box>
        <FruitsStore {...{ data, searchString }} />
      </Box>
    </>
  );
}

import { Box } from "../../hooks/CusMaterialComponents";
import { FruitsStore } from "./FruitsStore";
import { useWidth } from "../../hooks/use-width";

export default function OutOfStockFood({ data, searchString }) {
  const { width } = useWidth();
  return (
    <>
      <Box className=" home-div">
        <Box className="contact-head">
          <u>
            <Box
              className="available-dot"
              style={{
                background: "red",
                marginLeft: width <= 768 ? "25%" : "42%",
              }}
            ></Box>
            <h5>Out Of Stock Fruits</h5>
          </u>
        </Box>
        <FruitsStore {...{ data, searchString }} />
      </Box>
    </>
  );
}

import { Box } from "../../hooks/CusMaterialComponents";
import { FruitsStore } from "./FruitsStore";

export default function AvailableFood({ data, searchString }) {
  return (
    <>
      <Box className="home-div">
        <Box className="contact-head">
          <Box className="available-dot"></Box>
          <u>
            <h5>Available Fruits</h5>
          </u>
        </Box>
        <FruitsStore {...{ data, searchString }} />
      </Box>
    </>
  );
}

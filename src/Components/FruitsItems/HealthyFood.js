import { HealthIcon } from "../../hooks/CusMaterialIcon";
import { Box } from "../../hooks/CusMaterialComponents";
import { FruitsStore } from "./FruitsStore";

export default function HealthyFood({ data, searchString }) {
  return (
    <>
      <Box className=" home-div">
        <Box className="contact-head">
          <u className="offer">
            <HealthIcon />
            <h5>Most Healthy Fruits</h5>
          </u>
        </Box>
        <FruitsStore {...{ data, searchString }} />
      </Box>
    </>
  );
}

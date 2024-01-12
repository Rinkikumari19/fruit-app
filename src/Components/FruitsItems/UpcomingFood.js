import { SwapVertIcon } from "../../hooks/CusMaterialIcon";
import { Box } from "../../hooks/CusMaterialComponents";
import { FruitsStore } from "./FruitsStore";

export default function UpcomingFood({ data, searchString }) {
  return (
    <>
      <Box className=" home-div">
        <Box className="contact-head">
          <u className="offer">
            <SwapVertIcon />
            <h5>Upcoming Fruits</h5>
          </u>
        </Box>
        <FruitsStore {...{ data, searchString }} />
      </Box>
    </>
  );
}

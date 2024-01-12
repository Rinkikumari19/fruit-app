import { Redeem } from "../../hooks/CusMaterialIcon";
import { Box } from "../../hooks/CusMaterialComponents";
import { FruitsStore } from "./FruitsStore";

export default function OfferFood({ data, searchString }) {
  return (
    <>
      <Box className=" home-div">
        <Box className="contact-head">
          <u className="offer">
            <Redeem />
            <h5>Offers On Fruits</h5>
          </u>
        </Box>
        <FruitsStore {...{ data, searchString }} />
      </Box>
    </>
  );
}

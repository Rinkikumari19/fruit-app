import { Typography } from "../hooks/CusMaterialComponents";

export default function CustomTypography({ children, ...props }) {
  return <Typography {...props}>{children}</Typography>;
}
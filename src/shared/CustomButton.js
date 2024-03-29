import { React } from "../hooks/CusModules";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  verifyBtn: {
    "&.MuiButton-root": {
      marginRight: 10,
      marginLeft: 10,
      // textTransform: "capitalize",
    },
  },
}));

export default function CustomButton({ children, ...rest }) {
  const classes = useStyles();

  return (
    <Button
      className={`${classes.verifyBtn} mobile-verify-btn`}
      variant="contained"
      {...rest}
      disableElevation
    >
      {children}
    </Button>
  );
}

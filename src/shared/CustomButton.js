import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  verifyBtn: {
    "&.MuiButton-root": {
        marginRight:10,
        marginLeft:10,
    //   width: "35%",
    //   marginBottom: 30,
    //   position:'relative',
    //   top:24,
    //   backgroundColor: '#EF0000',
    //   textTransform: 'capitalize',
    //   color:"#fff",
    },
  },
}))

export default function CustomButton({ children, ...rest }) {
  const classes = useStyles();

  return (
    <Button 
    className={classes.verifyBtn}
     variant='contained' {...rest} disableElevation>
      {children}
    </Button>
  );
}
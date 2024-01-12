// import { TextField } from "../hooks/CusMaterialComponents";
// import { withStyles } from "@material-ui/styles";

// const StyledTextField = withStyles((theme) => ({
//   root: {
//     "& .MuiInputLabel-root": {
//       color: "#393939",
//       fontSize: 14,
//       textTransform: "capitalize",
//       paddingLeft: "17px",
//     },
//     "& .MuiInputBase-formControl, & .MuiInputBase-formControl:hover, & .MuiInputBase-formControl.Mui-focused":
//       {
//         borderRadius: 10,
//         "&.MuiOutlinedInput-multiline": {
//           padding: 0,
//           "& .MuiOutlinedInput-input": {
//             height: "auto",
//           },
//         },
//         "& .MuiOutlinedInput-notchedOutline": {
//           borderColor: "#C2C2C2",
//           borderWidth: 1,
//         },
//       },
//     "& .MuiInputAdornment-root": {
//       marginTop: "0 !important",
//       position: "relative",
//       height: 30,
//       paddingRight: 10,
//       "&:after": {
//         content: "''",
//         position: "absolute",
//         right: 0,
//         top: 0,
//         bottom: 0,
//         width: 1,
//         backgroundColor: "#E9E9E9",
//       },
//     },
//     "& .MuiFilledInput-underline:before, .MuiFilledInput-underline:after": {
//       content: "normal",
//     },
//     "& .MuiInputBase-input": {
//       color: "#393939",
//       fontSize: 16,
//       padding: "10px 15px",
//       borderRadius: 5,
//       height: 24,
//       [theme.breakpoints.down("xs")]: {
//         height: 20,
//       },
//       "&:-webkit-autofill": {
//         animation: "none !important",
//       },
//       "&::placeholder": {
//         color: "#797979",
//         opacity: 1,
//       },
//       "&.MuiInputBase-inputAdornedStart": {
//         paddingLeft: 10,
//       },
//     },
//     "& .MuiInputBase-root": {
//       "& .MuiInputAdornment-positionEnd": {
//         paddingRight: theme.spacing(1) + 2,
//         color: "#666666cc",
//       },
//     },
//     "& .MuiOutlinedInput-root.Mui-error": {
//       "& .MuiOutlinedInput-notchedOutline": {
//         borderColor: "#E5E5E5",
//       },
//     },
//     "& .MuiOutlinedInput-root.Mui-focused": {
//       "& .MuiOutlinedInput-notchedOutline": {
//         borderColor: "#E5E5E5",
//         borderWidth: 1,
//       },
//     },
//   },
// }))(TextField);

export default function CustomInput({ ...rest }) {
  //   return <StyledTextField {...rest} />;
  return <input {...rest} />;
}

export const validation = (name, value) => {
  let arr = [];
  switch (name) {
    case "username":
    case "productName":
    case "quantity":
      if (!value?.trim()) arr.push(`Please enter ${name}`);
      return arr;

    case "email":
      if (
        !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value?.trim())
      )
        arr.push("Please enter valid email");
      return arr;

    case "password":
      const pattern =
        // eslint-disable-next-line no-useless-escape
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      if (!value?.trim()) {
        arr.push("Please enter Password");
      } else if (!value?.trim().match(pattern)) {
        arr.push(
          "Must contain one upper & lower case letter and a non-letter (number or symbol.) Must be 8-20 characters."
        );
      }
      return arr;
    case "amount":
      if (
        (value.length > 0 && !Number(value)) ||
        Math.sign(Number(value)) === -1
      ) {
        arr.push("Please enter valid amount [0-9]");
      }
      return arr;

    case "phone_number":
      if (
        (value.length > 0 && !Number(value)) ||
        Math.sign(Number(value)) === -1
      ) {
        arr.push("Please enter valid phone number [0-9]");
      } else if (value.length > 0 && value.length !== 10) {
        arr.push("Please enter valid 10 digits phone number");
      }
      return arr;

    default:
      return arr;
  }
};

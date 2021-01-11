const booleanToString = (b: boolean): string => {
  let output = b === true ? "true" : "false";
  document.write(output);
  return output;
};

booleanToString(true);

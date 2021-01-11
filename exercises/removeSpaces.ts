function removeSpaces(str: string): string {
  console.log(str.replace(/\s/g, ""));
  return str.replace(/\s/g, "");
}

removeSpaces("a   b   c");

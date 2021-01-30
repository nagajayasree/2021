interface InputStr {
  str: string;
}
export const CapEachWord = ({ str }: InputStr) => {
  let words = str.split(" ");
  console.log(words);
  let upperCase = [];
  let output = "";
  for (let i = 0; i < words.length; i++) {
    upperCase.push(
      words[i].charAt(0).toUpperCase() + words[i].slice(1, words[i].length)
    );
  }
  output = upperCase.join(" ");
  return <div>{output}</div>;
};

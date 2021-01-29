import * as React from "react";
const AppContext = React.createContext({
  stdName: "",
  rollNo: 0,
});
const S1 = () => {
  const stdContext = React.useContext(AppContext);
  return <p>Hello {stdContext.stdName}</p>;
};
export const Student = () => {
  return (
    <AppContext.Provider value={{ stdName: "Siri", rollNo: 23 }}>
      <S1 />
    </AppContext.Provider>
  );
};

interface IBook {
  name: string;
  author: string;
  pages: number;
}
const BookContext = React.createContext<IBook | null>(null);

const Book1 = () => {
  const bookCxt = React.useContext(BookContext);
  return (
    <p>
      Name:{bookCxt?.name}, Author:{bookCxt?.author}, Pages:{bookCxt?.pages}
    </p>
  );
};
export const Book = () => {
  return (
    <BookContext.Provider
      value={{
        name: "Learn Typescript",
        author: "Anders Hejlsberg",
        pages: 100,
      }}
    >
      <Book1 />
    </BookContext.Provider>
  );
};

const book2: IBook = {
  name: "2nd book",
  author: "2nd author",
  pages: 59,
};
export const Book2 = () => {
  return (
    <BookContext.Provider value={book2}>
      <Book1 />
    </BookContext.Provider>
  );
};

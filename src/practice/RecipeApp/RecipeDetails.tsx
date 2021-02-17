export const RecipeDetails = ({ match }: any) => {
  return (
    <>
      <h3>{match.params.recipeName}</h3>
      {/* <p>{match.params.id}</p> */}
      {/* <p>{match.params.steps}</p> */}
    </>
  );
};

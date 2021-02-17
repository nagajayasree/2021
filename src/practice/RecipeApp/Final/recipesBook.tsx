export interface RecipeInterface {
  book: {
    recipeName: string;
    steps: { step1: string; step2: string; step3: string }[];
    id: number;
  }[];
}

export let recipeArr: RecipeInterface = {
  book: [
    {
      recipeName: "Paneer Mix Veg Recipe",
      steps: [
        {
          step1:
            "Slice veggies diagonally or as per your choice. Cut paneer into cubes and set aside.Heat oil in a pan, add all the veggies and sauté for a few minutes.",
          step2:
            "Add sugar, salt, black pepper and close the lid for a 2-3 minutes.Now add turmeric and red chilli powder. Pour in tomato gravy and cook for another 2-3 minutes.",
          step3:
            "Finally add paneer cubes and tomato ketchup. Mix well.Add garam masala, cover the lid and cook for 2 minutes.Once done, you can garnish with coriander leaves and serve.",
        },
      ],
      id: 1,
    },
    {
      recipeName: "Instant Chatpati Bhel Recipe",
      steps: [
        {
          step1:
            "To prepare this delicious dish, peel the onion and finely chop it in a large bowl.Next, finely chop the green chilli and add to the bowl of onions.Then, add salt in the same bowl.",
          step2:
            "Now, add powdered sugar to the bowl of onions.Finally, add puffed rice and sev to the large bowl and mix well all the ingredients.Then, add tamarind chutney over the mixture.",
          step3:
            "Mix well all the ingredients once again.Then, wash the coriander leaves and finely chop them. Add them to the bowl of sev and puffed rice.Mix once again.In the last, add pomegranate seeds and mix it well. Serve immediately.",
        },
      ],
      id: 2,
    },
  ],
};

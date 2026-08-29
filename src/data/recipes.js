export const recipeDetails = [
  {
    id: 'doro-wat',
    title: 'Doro Wat',
    category: 'Ethiopian Cuisine',
    description:
      'A rich Ethiopian chicken stew prepared with berbere, onions and spices.',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
    rating: '4.8',
    totalTime: '60 min',
    difficulty: 'Medium',
    prepTime: '20 min',
    cookTime: '40 min',
    servings: 4,
    ingredients: [
      { amount: '1 kg', name: 'chicken' },
      { amount: '3 tbsp', name: 'berbere' },
      { amount: '2', name: 'large onions' },
      { amount: '3 cloves', name: 'garlic' },
      { amount: '2 tbsp', name: 'niter kibbeh' },
    ],
    steps: [
      {
        title: 'Prepare the onions',
        description:
          'Finely chop the onions and cook them slowly until they become soft and golden.',
      },
      {
        title: 'Add the spices',
        description:
          'Add garlic and berbere and cook until the spices become fragrant.',
      },
      {
        title: 'Add the chicken',
        description:
          'Add the chicken pieces and mix thoroughly with the spice mixture.',
      },
      {
        title: 'Simmer and serve',
        description:
          'Cover and simmer until the chicken is tender. Serve warm with injera.',
      },
    ],
    nutrition: [
      { label: 'Calories', value: '520 kcal' },
      { label: 'Protein', value: '32g' },
      { label: 'Carbs', value: '18g' },
      { label: 'Fat', value: '24g' },
    ],
    chefTip: {
      title: 'Layer the flavors slowly',
      description:
        'Cook the onions until deep golden brown before adding berbere — that is where the richness of the stew comes from.',
    },
  },
  {
    id: 'citrus-salmon',
    title: 'Citrus Salmon',
    category: 'Seafood',
    description:
      'Tender salmon glazed with orange and dill for a bright finish.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    rating: '4.8',
    totalTime: '30 min',
    difficulty: 'Medium',
    prepTime: '10 min',
    cookTime: '20 min',
    servings: 2,
    ingredients: [
      { amount: '2 fillets', name: 'salmon' },
      { amount: '1', name: 'orange' },
      { amount: '1 tbsp', name: 'dill' },
      { amount: '1 tbsp', name: 'olive oil' },
    ],
    steps: [
      {
        title: 'Prepare the salmon',
        description: 'Season the salmon with salt, pepper, and olive oil.',
      },
      {
        title: 'Cook',
        description:
          'Cook the salmon until crispy on the outside and tender inside.',
      },
      {
        title: 'Finish',
        description: 'Add orange juice and dill before serving.',
      },
    ],
    nutrition: [
      { label: 'Calories', value: '440 kcal' },
      { label: 'Protein', value: '34g' },
      { label: 'Carbs', value: '12g' },
      { label: 'Fat', value: '22g' },
    ],
    chefTip: {
      title: 'Do not overcook',
      description: 'Remove the salmon as soon as it flakes easily.',
    },
  },
  {
    id: 'berry-cloud',
    title: 'Berry Cloud',
    category: 'Dessert',
    description:
      'A light layered dessert with whipped cream and warm berries.',
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80',
    rating: '4.7',
    totalTime: '20 min',
    difficulty: 'Easy',
    prepTime: '10 min',
    cookTime: '10 min',
    servings: 4,
    ingredients: [
      { amount: '2 cups', name: 'berries' },
      { amount: '1 cup', name: 'whipped cream' },
      { amount: '1 pack', name: 'vanilla biscuits' },
      { amount: '2 tbsp', name: 'honey' },
    ],
    steps: [
      {
        title: 'Prepare berries',
        description: 'Warm the berries gently with honey.',
      },
      {
        title: 'Layer',
        description: 'Arrange biscuits and cream in a serving glass.',
      },
      {
        title: 'Serve',
        description: 'Top with warm berries and serve chilled.',
      },
    ],
    nutrition: [
      { label: 'Calories', value: '280 kcal' },
      { label: 'Protein', value: '6g' },
      { label: 'Carbs', value: '32g' },
      { label: 'Fat', value: '14g' },
    ],
    chefTip: {
      title: 'Chill before serving',
      description: 'A cold dessert tastes much lighter and more refreshing.',
    },
  },
]

export const featuredRecipes = recipeDetails
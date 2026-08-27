export const recipes = {
    doroWat: {
      id: 'doro-wat',
      title: 'Doro Wat',
      category: 'Ethiopian Cuisine',
      description:
        'A rich Ethiopian chicken stew prepared with berbere, onions, spices, and traditional Ethiopian butter.',
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
        { label: 'Calories', value: '420' },
        { label: 'Protein', value: '38g' },
        { label: 'Carbs', value: '18g' },
        { label: 'Fat', value: '24g' },
      ],
      chefTip: {
        title: 'Let the spices develop slowly.',
        description:
          "Cooking the onions and spices slowly creates a deeper, richer flavor. Don't rush this part of the recipe.",
      },
    },
  }
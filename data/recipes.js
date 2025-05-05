export default [
    // 美式早餐
    {
      id: 1,
      title: 'Classic Pancakes',
      type: 'breakfast',
      description: 'Fluffy, classic pancakes perfect for breakfast.',
      image: '/images/classic-pancakes.jpg',
      difficulty: 'Easy',  // 适用于 "Easy" 难度
      time: 25,            // 适用于 25分钟
      calories: 227,
      cuisine: 'American',
      level: 'Beginner',
      ingredients: [
        '1 1/2 cups all-purpose flour',
        '3 1/2 teaspoons baking powder',
        '1 teaspoon salt',
        '1 tablespoon white sugar',
        '1 1/4 cups milk',
        '1 egg',
        '3 tablespoons butter, melted',
        '1 teaspoon vanilla extract (optional)'
      ],
      instructions: [
        'In a large bowl, sift together the flour, baking powder, salt and sugar.',
        'Make a well in the center and pour in the milk, egg, melted butter and vanilla; mix until smooth.',
        'Heat a lightly oiled griddle or frying pan over medium-high heat.',
        'Pour the batter onto the griddle, using approximately 1/4 cup for each pancake.',
        'Cook until bubbles form and the edges are dry, then flip and cook until browned on the other side.',
        'Serve hot with maple syrup and fresh fruit.'
      ],
      nutrition: {
        calories: '227 kcal',
        carbohydrates: '28g',
        protein: '6g',
        fat: '9g',
        saturatedFat: '5g',
        cholesterol: '57mg',
        sodium: '503mg'
      }
    },
  
    // 菲律宾早餐
    {
      id: 2,
      title: 'Tapsilog',
      type: 'breakfast',
      description: 'Classic Filipino breakfast with marinated beef, garlic rice, and egg.',
      image: '/images/tapsilog.jpg',
      difficulty: 'Medium',  // 适用于 "Medium" 难度
      time: 30,              // 适用于 30分钟
      calories: 350,
      cuisine: 'Filipino',
      level: 'Intermediate',
      ingredients: [
        '1 lb beef sirloin, thinly sliced',
        '2 cloves garlic, minced',
        '2 tbsp soy sauce',
        '1 tbsp vinegar',
        '1 tbsp brown sugar',
        '1 tbsp fish sauce',
        '1 egg',
        '2 cups cooked rice'
      ],
      instructions: [
        'Marinate beef with soy sauce, vinegar, garlic, brown sugar, and fish sauce for at least 30 minutes.',
        'Cook rice and set aside.',
        'Fry the beef until tender and browned.',
        'Fry the egg in a separate pan.',
        'Serve the beef with garlic rice and egg.'
      ],
      nutrition: {
        calories: '350 kcal',
        carbohydrates: '40g',
        protein: '22g',
        fat: '15g'
      }
    },
  
    // 中国早餐
    {
      id: 3,
      title: 'Congee (Rice Porridge)',
      type: 'breakfast',
      description: 'Traditional Chinese rice porridge, often served with pickled vegetables or century egg.',
      image: '/images/congee.jpg',
      difficulty: 'Hard',  // 适用于 "Hard" 难度
      time: 45,            // 适用于 45分钟
      calories: 180,
      cuisine: 'Chinese',
      level: 'Advanced',
      ingredients: [
        '1 cup rice',
        '6 cups water',
        '1 tablespoon ginger, shredded',
        '1 tablespoon soy sauce',
        'Pickled vegetables or century egg (optional)'
      ],
      instructions: [
        'Rinse rice and add to a pot with water.',
        'Bring to a boil, then simmer for about 45 minutes, stirring occasionally.',
        'Add ginger and soy sauce for flavor.',
        'Serve with pickled vegetables or century egg.'
      ],
      nutrition: {
        calories: '180 kcal',
        carbohydrates: '38g',
        protein: '4g',
        fat: '1g'
      }
    }
  ]
  
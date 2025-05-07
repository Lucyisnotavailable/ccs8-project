export default [
  {
    id: 1,
    title: 'Classic Pancakes',
    type: 'breakfast',
    description: 'Fluffy, classic pancakes perfect for breakfast.',
    image: '/images/classic-pancakes.jpg',
    time: 25,
    calories: 227,
    cuisine: 'Western',
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
  {
    id: 2,
    title: 'Tapsilog',
    type: 'breakfast',
    description: 'Classic Filipino breakfast with marinated beef, garlic rice, and egg.',
    image: '/images/tapsilog.jpg',
    time: 30,
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
  {
    id: 3,
    title: 'Congee (Rice Porridge)',
    type: 'breakfast',
    description: 'Traditional Chinese rice porridge, often served with pickled vegetables or century egg.',
    image: '/images/congee.jpg',
    time: 45,
    calories: 180,
    cuisine: 'Asian',
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
  },
  {
    id: 4,
    title: 'Avocado Toast with Egg',
    type: 'breakfast',
    description: 'A simple yet satisfying breakfast featuring creamy avocado on toast, topped with a perfectly cooked egg.',
    image: '/images/avocado-toast-egg.jpg',
    time: 10,
    calories: 300,
    cuisine: 'Western',
    level: 'Beginner',
    ingredients: [
      '1 slice multigrain bread',
      '½ ripe avocado',
      '1 egg',
      '1 teaspoon lemon juice',
      'Salt and pepper to taste',
      'Optional: pinch of cayenne pepper'
    ],
    instructions: [
      'Toast the bread slice to your preference.',
      'In a bowl, mash the avocado with lemon juice, salt, and pepper.',
      'Spread the mashed avocado onto the toasted bread.',
      'Cook the egg to your liking (fried, poached, or scrambled) and place it on top of the avocado spread.',
      'Sprinkle with a pinch of cayenne pepper if desired.'
    ],
    nutrition: {
      calories: '300 kcal',
      carbohydrates: '20g',
      protein: '9g',
      fat: '20g'
    }
  },
  {
    id: 5,
    title: 'Filipino Garlic Fried Rice (Sinangag)',
    type: 'breakfast',
    description: 'A flavorful and aromatic rice dish made by sautéing garlic and mixing it with day-old rice.',
    image: '/images/sinangag.jpg',
    time: 15,
    calories: 220,
    cuisine: 'Filipino',
    level: 'Beginner',
    ingredients: [
      '3 cups cooked white rice (preferably day-old)',
      '5 cloves garlic, minced',
      '2½ tablespoons cooking oil',
      '½ teaspoon salt'
    ],
    instructions: [
      'Heat oil in a large pan over medium heat.',
      'Add minced garlic and sauté until golden brown.',
      'Add the cooked rice, breaking up any clumps, and mix well with the garlic.',
      'Season with salt and continue to stir-fry for 5–7 minutes until the rice is heated through.'
    ],
    nutrition: {
      calories: '220 kcal',
      carbohydrates: '40g',
      protein: '4g',
      fat: '7g'
    }
  },
  {
    id: 6,
    title: 'Overnight Chia Pudding',
    type: 'breakfast',
    description: "A nutritious and easy-to-make pudding that's perfect for a make-ahead breakfast.",
    image: '/images/overnight-chia-pudding.jpg',
    time: 5,
    calories: 197,
    cuisine: 'Western',
    level: 'Beginner',
    ingredients: [
      '2 tablespoons chia seeds',
      '½ cup almond milk (or milk of choice)',
      '1 teaspoon maple syrup or honey'
    ],
    instructions: [
      'In a jar or bowl, combine chia seeds, milk, and sweetener.',
      'Stir well to prevent clumping.',
      'Cover and refrigerate overnight.',
      'In the morning, stir the pudding and top with fruits or nuts if desired.'
    ],
    nutrition: {
      calories: '197 kcal',
      carbohydrates: '15g',
      protein: '4g',
      fat: '11g'
    }
  },
  {
    id: 7,
    title: 'Mango Banana Smoothie',
    type: 'breakfast',
    description: 'A refreshing and tropical smoothie combining the sweetness of mangoes and bananas.',
    image: '/images/mango-banana-smoothie.jpg',
    time: 5,
    calories: 180,
    cuisine: 'Asian',
    level: 'Beginner',
    ingredients: [
      '1 ripe banana',
      '½ cup frozen mango pieces',
      '½ cup orange-mango juice blend',
      '⅓ cup plain yogurt'
    ],
    instructions: [
      'Combine all ingredients in a blender.',
      'Blend until smooth.',
      'Pour into a glass and serve immediately.'
    ],
    nutrition: {
      calories: '180 kcal',
      carbohydrates: '36g',
      protein: '4g',
      fat: '2g'
    }
  },
  {
    id: 8,
    title: 'French Toast',
    type: 'breakfast',
    description: 'A classic breakfast dish made by soaking bread slices in a sweet egg mixture and frying them to golden perfection.',
    image: '/images/french-toast.jpg',
    time: 15,
    calories: 300,
    cuisine: 'Western',
    level: 'Beginner',
    ingredients: [
      '2 eggs',
      '½ cup milk',
      '¼ teaspoon vanilla extract',
      '½ teaspoon cinnamon sugar',
      '6 slices stale bread',
      'Butter for frying'
    ],
    instructions: [
      'In a shallow bowl, beat eggs, then add milk, vanilla extract, and cinnamon sugar.',
      'Dip each bread slice into the egg mixture, ensuring both sides are coated.',
      'Heat butter in a skillet over medium heat.',
      'Fry the soaked bread slices until golden brown on both sides.'
    ],
    nutrition: {
      calories: '300 kcal',
      carbohydrates: '36g',
      protein: '8g',
      fat: '14g'
    }
  },
  {
    id: 9,
    title: 'Taho-Inspired Soy Pudding',
    type: 'breakfast',
    description: 'A homemade version of the popular Filipino street food made with soft tofu, sweet syrup, and tapioca pearls.',
    image: '/images/taho-inspired-soy-pudding.jpg',
    time: 10,
    calories: 200,
    cuisine: 'Filipino',
    level: 'Beginner',
    ingredients: [
      '1 cup silken tofu',
      '2 tablespoons brown sugar',
      '1 tablespoon water',
      '¼ cup cooked sago pearls'
    ],
    instructions: [
      'Heat the silken tofu until warm.',
      'In a saucepan, dissolve brown sugar in water over medium heat to make syrup.',
      'In a serving glass, layer the warm tofu, syrup, and sago pearls.',
      'Serve warm.'
    ],
    nutrition: {
      calories: '200 kcal',
      carbohydrates: '30g',
      protein: '8g',
      fat: '5g'
    }
  },
  {
    id: 10,
    title: 'Egg Muffin Cups',
    type: 'breakfast',
    description: 'Portable and protein-packed egg muffins filled with vegetables, perfect for meal prep.',
    image: '/images/egg-muffin-cups.jpg',
    time: 20,
    calories: 90,
    cuisine: 'Western',
    level: 'Beginner',
    ingredients: [
      '6 eggs',
      '¼ cup diced bell peppers',
      '¼ cup chopped spinach',
      'Salt and pepper to taste',
      'Optional: cheese or diced ham'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'In a bowl, beat the eggs and mix in vegetables, salt, and pepper.',
      'Grease a muffin tin and pour the egg mixture evenly into cups.',
      'Bake for 15–20 minutes or until the eggs are set.',
      'Cool slightly before removing from tin.'
    ],
    nutrition: {
      calories: '90 kcal',
      carbohydrates: '2g',
      protein: '6g',
      fat: '6g'
    }
  }
];

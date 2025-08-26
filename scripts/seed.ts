import { db } from '../src/lib/db';
import { products } from '../src/lib/db/schema';

const nikeProducts = [
  {
    name: 'Nike Air Max 270',
    description: 'The Nike Air Max 270 delivers visible cushioning under every step.',
    price: '150.00',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/air-max-270-mens-shoes-KkLcGR.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 50,
  },
  {
    name: 'Nike Air Force 1',
    description: 'The radiance lives on in the Nike Air Force 1, the basketball original.',
    price: '110.00',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 75,
  },
  {
    name: 'Nike Dri-FIT T-Shirt',
    description: 'Nike Dri-FIT technology moves sweat away from your skin.',
    price: '25.00',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16a4b0a9-3c7e-4e6e-9b4e-7b4b4b4b4b4b/dri-fit-mens-fitness-t-shirt-2QjSZw.png',
    category: 'Apparel',
    brand: 'Nike',
    stock: 100,
  },
  {
    name: 'Nike React Infinity Run',
    description: 'Nike React Infinity Run Flyknit is designed to help reduce injury.',
    price: '160.00',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6/react-infinity-run-flyknit-mens-running-shoe-zX42Km.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 30,
  },
  {
    name: 'Nike Swoosh Sports Bra',
    description: 'The Nike Swoosh Sports Bra provides medium support for a variety of activities.',
    price: '35.00',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q6/swoosh-medium-support-sports-bra-2V3mZX.png',
    category: 'Apparel',
    brand: 'Nike',
    stock: 60,
  },
  {
    name: 'Nike Tech Fleece Hoodie',
    description: 'The Nike Tech Fleece Hoodie features premium fleece fabric.',
    price: '90.00',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c1d2e3f4-g5h6-i7j8-k9l0-m1n2o3p4q5r6/tech-fleece-pullover-hoodie-mens-hoodie-1bhpZK.png',
    category: 'Apparel',
    brand: 'Nike',
    stock: 40,
  },
];

async function seed() {
  try {
    console.log('Seeding database...');
    
    // Insert Nike products
    await db.insert(products).values(nikeProducts);
    
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seed();
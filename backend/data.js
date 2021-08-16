import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Isidora',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
       
        name: 'Repair Shops Nearby',
        category: 'Repair',
        image: '/images/repair.jpg',
        price: 10,
        desc:'nearest',
        brand: '20km away',
        rating: 4.5,
        numReviews: 10,
        countInStock: 10,
        description: 'we are specialized support KIA and Megan',
      },
      {
        
        name: 'Tow Service',
        category: 'Tow',
        image: '/images/tow.jpg',
        price: 10,
        desc:'nearest 20km away',
        brand: '10 minutes away',
        countInStock: 10,
        rating: 4.0,
        numReviews: 10,
        description1:'high quality product',
      },
      {
        
        name: 'Tutorial',
        category: 'Tutorial',
        image: '/images/tutorial.jpg',
        price: 0,
        desc:'nearest 20km away',
        rating: 4.8,
        numReviews: 17,
        countInStock: 0,
        description:'easy to follow tutorials',
        description1:'veseli see ',
      },
    
   
   
    ],
  };
  export default data;
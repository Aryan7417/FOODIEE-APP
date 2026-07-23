export const Categoriess = [
  {
    id: 1,
    name: "Pizza",
    image: require("../../../assets/images/head/pizza.jpg"),
  },
  

  
  
  {
    id: 7,
    name: "Sandwich",
    image: require("../../../assets/images/head/sandwitch.jpg"),
  },
  {
    id: 8,
    name: "Rolls",
    image: require("../../../assets/images/head/rool.jpg"),
  },
  {
    id: 9,
    name: "Pasta",
    image: require("../../../assets/images/head/pasta.jpg"),
  },
  {
    id: 10,
    name: "Momos",
    image: require("../../../assets/images/head/momo.jpg"),
  },
  
  {
    id: 12,
    name: "Ice Cream",
    image: require("../../../assets/images/head/icecreem.jpg"),
  },
  {
    id: 13,
    name: "Bakery",
    image: require("../../../assets/images/head/barery.jpg"),
  },
  {
    id: 14,
    name: "Juices",
    image: require("../../../assets/images/head/juices.jpg"),
  },
  
 
  {
    id: 17,
    name: "Healthy",
    image: require("../../../assets/images/head/healty.jpg"),
  },
  {
    id: 18,
    name: "Salads",
    image: require("../../../assets/images/head/salasd.jpg"),
  },
  {
    id: 19,
    name: "BBQ",
    image: "https://picsum.photos/200?random=19",
  },
  {
    id: 20,
    name: "Street Food",
    image: require("../../../assets/images/head/street food.jpg"),
  },
];

export const featured = {
  id: 1,
  title: "Hot & Spicy",
  description: "Discover the best hot and spicy dishes near you.",
  restaurants: [
    {
      id: 1,
      name: "Papa John's",
      image: null,
      description: "Hot and spicy pizzas with fresh ingredients.",
      lng: 38.2145602,
      lat: -85.5324269,
      address: "434 Second Street",
      stars: 4.6,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "Pepperoni Pizza",
          description: "Loaded with pepperoni and mozzarella cheese.",
          price: 399,
          image: null,
        },
        {
          id: 2,
          name: "Chicken Pizza",
          description: "Grilled chicken with extra cheese.",
          price: 449,
          image: null,
        },
      ],
    },
    {
      id: 2,
      name: "Burger King",
      image:null,
      description: "Fresh burgers with crispy fries.",
      lng: 38.245214,
      lat: -85.542786,
      address: "12 King Avenue",
      stars: 4.5,
      reviews: "3.8k",
      category: "Burger",
      dishes: [
        {
          id: 3,
          name: "Whopper",
          description: "Flame grilled beef burger.",
          price: 299,
          image: null,
        },
        {
          id: 4,
          name: "Chicken Burger",
          description: "Crispy chicken burger with lettuce.",
          price: 249,
          image:null,
        },
      ],
    },
    {
      id: 3,
      name: "Biryani House",
      image: null,
      description: "Authentic Hyderabadi biryani.",
      lng: 38.225641,
      lat: -85.518764,
      address: "89 Food Street",
      stars: 4.8,
      reviews: "5.2k",
      category: "Biryani",
      dishes: [
        {
          id: 5,
          name: "Chicken Biryani",
          description: "Traditional Hyderabadi chicken biryani.",
          price: 349,
          image: null,
        },
        {
          id: 6,
          name: "Mutton Biryani",
          description: "Slow-cooked mutton dum biryani.",
          price: 449,
          image: null,
        },
      ],
    },
  ],
};


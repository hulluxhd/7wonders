const data = [
  {
    id: 1,
    category: 'Hotel',
    city: 'Miami',
    country: 'USA',
    name: 'Hotel EAST Miami',
    types: ['Luxurious'],
    about: `Everyone needs a place to recharge their batteries. For travelers visiting Miami, EAST, Miami is an excellent choice for rest and rejuvenation. Known for its luxurious ambience and proximity to great restaurants and popular attractions, EAST, Miami makes it easy to enjoy the best of Miami.

    Guests can use free Wi-Fi and rooms at EAST, Miami come with a flat-screen TV, minibar and air conditioning.
    
    During your stay, take advantage of some of the amenities offered, including a concierge, room service, and a terrace. Guests at EAST, Miami can also enjoy a pool and breakfast on site.
    
    Nearby landmarks such as Gesu Catholic Church (1.0 km) and Freedom Tower (1.5 km) make EAST, Miami a great place to stay when visiting Miami.
    
    If you're looking for a winery, consider visiting El Carajo, Lagniappe, or Lekoke Wine and Bites, which are all conveniently located a short distance from EAST, Miami.
    
    Should time allow, Bayside Marketplace and American Airlines Arena are some popular attractions that are within walking distance.
    
    Whether you're traveling for pleasure or business – or both – EAST, Miami is sure to make your visit to Miami a memorable experience.`,
    rating: 4.5,
    imagePath: 'images/EAST_Miami.jpg',
  },
  {
    id: 2,
    category: 'Resort',
    city: 'Atol Baa',
    country: 'Maldives',
    name: 'Anantara Kihavah Maldives',
    types: ['Luxurious'],
    about: 'A pool villa paradise, Anantara Kihavah Villas is a luxury resort in the Maldives that offers the ultimate in privacy and tranquility, your own sanctuary within a sanctuary. Expansive space that opens onto bright tropical nature with private pools, high ceilings and wooden interiors. Savor the culinary art and wine served in one of the only underwater restaurants and cellars in the world.',
    rating: 4.5,
    imagePath: 'images/Anantara_Kihavah.jpg',
  },
  {
    id: 3,
    category: 'Hotel',
    city: 'Udaipur',
    country: 'India',
    name: 'Oberoi Udaivilas',
    types: ['Luxurious'],
    about: `The Oberoi Udaivilas is a great choice for travelers visiting Udaipur. It has a luxurious atmosphere in addition to several amenities to enrich your stay.

    Guests will find amenities such as a flat screen TV, air conditioning and a minibar in their rooms, and guests can get online, with free wifi available at the hotel.
    
    Oberoi Udaipur features a 24 hour front desk, room service, and a concierge, to help make your stay more enjoyable. The property also has a pool and breakfast. If you are driving to The Oberoi Udaivilas Hotel, free parking is available.
    
    Those visiting the popular landmarks while visiting Udaipur will be pleased to know that Udaipur Oberoi is within close proximity of places like Ambrai Ghat (0.8 km) and Jagdish Temple (1.2 km).
    
    While visiting Udaipur, you may want to try some dumplings at one of the nearby restaurants, such as Ambrai.
    
    Udaipur is also known for some great history museums, including Bagore Ki Haveli, City Palace of Udaipur, and City Palace Museum, which are not too far from Udaipur Oberoi.
    
    Enjoy your stay in Udaipur!`,
    rating: 5,
    imagePath: 'images/Oberoi_Udaivilas.jpg',
  },
  {
    id: 4,
    category: 'Hotel',
    city: 'Dubai',
    country: 'UAE',
    name: 'Burj Al Arab',
    types: ['Luxurious'],
    about: `Burj Al Arab Jumeirah is an excellent choice for travelers visiting Dubai, offering a romantic environment alongside many helpful amenities designed to enhance your stay.

    Close to some of Dubai's most popular landmarks, such as Meem Gallery (4.1 km) and The Palladium (4.9 km), Burj Al Arab is a great destination for tourists.
    
    Rooms at Al Arab Burj Hotel feature a flat-screen TV, air conditioning, and a minibar, providing exceptional comfort and convenience. In addition, guests can access the internet with free wi-fi.
    
    A concierge, room service, and a terrace are some of the conveniences offered at this hotel. A pool and breakfast will also help to make your stay even more special. If you are driving, Seven Star Hotel offers free parking.
    
    While visiting Dubai, you may want to try some shrimp at one of the nearby restaurants, such as Pai Thai, Al Iwan, or Fish Hut Seafood Restaurant - Al Barsha.
    
    Dubai is also known for some lively marinas, including Dubai Marina Yacht Club and Dubai Marina, which are not too far from Dubai Burj Al Arab.
    
    Enjoy your visit to Dubai!`,
    rating: 3.8,
    imagePath: 'images/Burj_Al_Arab.jpg',
  },
  {
    id: 5,
    category: 'Hotel',
    city: 'Antalya',
    country: 'Turkey',
    name: 'Titanic Mardan Palace',
    types: ['Luxurious'],
    about: `Overlooking the shores of the Mediterranean with the Taurus Mountains behind it, Mardan Palace is breathtaking.

In addition to the Ottoman-style rooms and impeccable service, the hotel's highlight is its five-hectare swimming pool – the largest in the Mediterranean – with a 90,000-liter aquarium in the middle and an impressive da Vinci arched bridge above.`,
    rating: 4.2,
    imagePath: 'images/Mardan_Palace.jpg',
  },
  {
    id: 6,
    category: 'Hotel & Spa',
    city: 'Arenal Volcano National Park',
    country: 'Costa Rica',
    name: 'Nayara Hotel and Spa',
    types: ['Luxurious'],
    about: `487 / 5.000
    Resultados de tradução
    Distributed by the lush jungle close to an extinct volcano and a lake. Unlike most rustic resorts in Costa Rica, Nayara offers modern accommodations, but in total harmony with its surroundings.
    
    The full spa is perched high on a cliff overlooking the forest. There are several activities such as rafting and volcano tours. Its specialty is wine-filled dinner, with a selection of restaurants featuring the best wines from Central and South America.`,
    rating: 4.5,
    imagePath: 'images/Nayara.jpg',
  },
  {
    id: 7,
    category: 'Resort',
    city: 'Soufriere',
    country: 'Santa Lúcia',
    name: 'Jade Mountain',
    types: ['Luxurious'],
    about: `With its 600 hectares, it is a paradise overlooking the treetops of the Piton Mountains (a UNESCO World Heritage Site) and the Caribbean Sea.

    Entirely designed by architect-owner Jade Mountain, it has 24 suites with their own mini-infinity pool (and five suites with Jacuzzis) that point directly out to the ocean.
    
    Dining is led by chef James Beard and guests can enjoy their meals at the bar, beach or some other spa facility at the resort. Wonderful!`,
    rating: 4.5,
    imagePath: 'images/Jade_Mountain.jpg',
  },
  {
    id: 8,
    category: 'Casino',
    city: 'Las Vegas',
    country: 'USA',
    name: 'Palms Casino Resort',
    types: ['Luxurious'],
    about: `Looking for a place to stay in Las Vegas? You've just found: Palms Casino Resort, a quiet hotel offering the best of Las Vegas.

    Guests will find amenities such as a flat screen TV, a minibar and air conditioning in their rooms, and guests can get online with the hotel's free wifi.
    
    Las Vegas Palms Hotel features room service, a concierge, and a terrace, to help make your stay more enjoyable. The property also has a heated pool and breakfast. If you are driving to Palms Casino, free parking is available.
    
    While staying at Las Vegas Palms, visitors can check out Bellagio Chocolate Fountain (1.9 km) and Mirage Volcano (2.1 km), some of Las Vegas' top attractions.
    
    If you're looking for a wine cellar, consider visiting La Cave, D. Vino Italian Food & Wine Bar, or CUT by Wolfgang Puck, which are all conveniently located a short distance from Palms Casino Resort.
    
    Las Vegas is also known for some great federal parks, including Old Las Vegas Mormon Fort, which are not too far from The Palms Las Vegas.
    
    You're sure to enjoy staying there, as the Palms Casino Resort is right next to all the great things Las Vegas has to offer.`,
    rating: 4.5,
    imagePath: 'images/Palms_Casino_Resort.jpg',
  },
];

export default data;

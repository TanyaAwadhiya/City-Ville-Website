import { City } from '../types';

export const indianCities: City[] = [
  {
    id: 'delhi',
    name: 'Delhi',
    description: 'The capital of India, Delhi is a city where ancient and modern blend seamlessly together.',
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
    state: 'Delhi',
    population: '19 million',
    places: [
      {
        id: 'red-fort',
        name: 'Red Fort',
        description: 'Historic fortress built in the 17th century, showcasing Mughal architecture.',
        image: 'https://images.pexels.com/photos/13317316/pexels-photo-13317316.jpeg',
        type: 'monument'
      },
      {
        id: 'qutub-minar',
        name: 'Qutub Minar',
        description: 'UNESCO World Heritage site featuring a 73-meter tall minaret built in 1193.',
        image: 'https://images.pexels.com/photos/13513595/pexels-photo-13513595.jpeg',
        type: 'monument'
      },
      {
        id: 'india-gate',
        name: 'India Gate',
        description: 'War memorial dedicated to Indian soldiers who died in World War I.',
        image: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg',
        type: 'monument'
      }
    ],
    colleges: [
      {
        id: 'du',
        name: 'University of Delhi',
        description: 'One of India\'s premier universities offering diverse undergraduate and postgraduate programs.',
        established: '1922',
        type: 'Public University',
        rating: 'NAAC A++',
        image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg'
      },
      {
        id: 'iit-delhi',
        name: 'IIT Delhi',
        description: 'Premier engineering institution known for research and innovation.',
        established: '1961',
        type: 'Technical Institute',
        rating: 'Institute of National Importance',
        image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg'
      }
    ],
    hospitals: [
      {
        id: 'aiims-delhi',
        name: 'All India Institute of Medical Sciences',
        description: 'India\'s leading public healthcare institute and hospital.',
        established: '1956',
        type: 'Government Hospital',
        specialties: ['Cardiology', 'Neurology', 'Oncology'],
        image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg'
      },
      {
        id: 'apollo-delhi',
        name: 'Apollo Hospital',
        description: 'Multi-specialty private hospital with state-of-the-art facilities.',
        type: 'Private Hospital',
        specialties: ['Cardiac Surgery', 'Orthopedics', 'Transplants'],
        image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg'
      }
    ]
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    description: 'The financial capital of India, known for its entertainment industry and vibrant culture.',
    image: 'https://images.pexels.com/photos/2409953/pexels-photo-2409953.jpeg',
    state: 'Maharashtra',
    population: '20 million',
    places: [
      {
        id: 'gateway-of-india',
        name: 'Gateway of India',
        description: 'Iconic arch monument built in the early 20th century.',
        image: 'https://images.pexels.com/photos/4134644/pexels-photo-4134644.jpeg',
        type: 'monument'
      },
      {
        id: 'marine-drive',
        name: 'Marine Drive',
        description: '3.6-kilometer-long boulevard along the coastline, also known as the Queen\'s Necklace.',
        image: 'https://images.pexels.com/photos/4134634/pexels-photo-4134634.jpeg',
        type: 'other'
      }
    ],
    colleges: [
      {
        id: 'iit-bombay',
        name: 'IIT Bombay',
        description: 'Leading engineering and research institution in Powai.',
        established: '1958',
        type: 'Technical Institute',
        rating: 'Institute of National Importance',
        image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg'
      },
      {
        id: 'st-xaviers',
        name: 'St. Xavier\'s College',
        description: 'Historic college known for arts, science, and commerce programs.',
        established: '1869',
        type: 'Arts & Science College',
        rating: 'NAAC A++',
        image: 'https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg'
      }
    ],
    hospitals: [
      {
        id: 'tata-memorial',
        name: 'Tata Memorial Hospital',
        description: 'India\'s leading cancer research and treatment center.',
        established: '1941',
        type: 'Specialty Hospital',
        specialties: ['Oncology', 'Cancer Research'],
        image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg'
      },
      {
        id: 'breach-candy',
        name: 'Breach Candy Hospital',
        description: 'Premium private hospital known for excellent healthcare services.',
        type: 'Private Hospital',
        specialties: ['Cardiology', 'Neurosurgery', 'General Medicine'],
        image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg'
      }
    ]
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    description: 'India\'s Silicon Valley, known for its pleasant climate and tech industry.',
    image: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg',
    state: 'Karnataka',
    population: '12 million',
    places: [
      {
        id: 'lalbagh',
        name: 'Lalbagh Botanical Garden',
        description: 'A 240-acre garden featuring diverse flora and a glass house.',
        image: 'https://images.pexels.com/photos/13990668/pexels-photo-13990668.jpeg',
        type: 'park'
      },
      {
        id: 'vidhana-soudha',
        name: 'Vidhana Soudha',
        description: 'The state legislature building known for its Neo-Dravidian architecture.',
        image: 'https://images.pexels.com/photos/3573351/pexels-photo-3573351.jpeg',
        type: 'monument'
      }
    ],
    colleges: [
      {
        id: 'iisc',
        name: 'Indian Institute of Science',
        description: 'Premier research institution known for scientific and technological research.',
        established: '1909',
        type: 'Research Institute',
        rating: 'Institute of Eminence',
        image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg'
      },
      {
        id: 'rvce',
        name: 'RV College of Engineering',
        description: 'Leading private engineering college with excellent placement record.',
        established: '1963',
        type: 'Engineering College',
        rating: 'NAAC A++',
        image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg'
      }
    ],
    hospitals: [
      {
        id: 'manipal-bangalore',
        name: 'Manipal Hospital',
        description: 'Multi-specialty hospital with advanced medical facilities.',
        type: 'Private Hospital',
        specialties: ['Cardiology', 'Neurology', 'Orthopedics'],
        image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg'
      },
      {
        id: 'nimhans',
        name: 'NIMHANS',
        description: 'Leading institute for mental health and neurosciences.',
        established: '1925',
        type: 'Government Hospital',
        specialties: ['Psychiatry', 'Neurology', 'Neurosurgery'],
        image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg'
      }
    ]
  },
  {
    id: 'bhopal',
    name: 'Bhopal',
    description: 'The City of Lakes, known for its rich history and natural beauty.',
    image: 'https://images.pexels.com/photos/15873486/pexels-photo-15873486.jpeg',
    state: 'Madhya Pradesh',
    population: '2.3 million',
    places: [
      {
        id: 'upper-lake',
        name: 'Upper Lake',
        description: 'One of Asia\'s largest artificial lakes, dating back to the 11th century.',
        image: 'https://images.pexels.com/photos/15873493/pexels-photo-15873493.jpeg',
        type: 'other'
      },
      {
        id: 'taj-ul-masajid',
        name: 'Taj-ul-Masajid',
        description: 'One of Asia\'s largest mosques, featuring pink facades and marble domes.',
        image: 'https://images.pexels.com/photos/15873499/pexels-photo-15873499.jpeg',
        type: 'monument'
      }
    ],
    colleges: [
      {
        id: 'manit',
        name: 'Maulana Azad National Institute of Technology',
        description: 'Premier engineering institution of national importance.',
        established: '1960',
        type: 'Technical Institute',
        rating: 'NIRF Rank: Top 100',
        image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg'
      },
      {
        id: 'bmhmc',
        name: 'Bhopal Memorial Hospital and Research Centre',
        description: 'Medical college offering advanced healthcare education.',
        established: '1984',
        type: 'Medical College',
        rating: 'MCI Approved',
        image: 'https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg'
      }
    ],
    hospitals: [
      {
        id: 'aiims-bhopal',
        name: 'AIIMS Bhopal',
        description: 'Premier government medical institute and hospital.',
        established: '2012',
        type: 'Government Hospital',
        specialties: ['General Medicine', 'Surgery', 'Pediatrics'],
        image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg'
      },
      {
        id: 'hamidia',
        name: 'Hamidia Hospital',
        description: 'Major public hospital serving the city.',
        type: 'Government Hospital',
        specialties: ['Emergency Care', 'General Medicine', 'Orthopedics'],
        image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg'
      }
    ]
  },
  {
    id: 'indore',
    name: 'Indore',
    description: 'The cleanest city in India, famous for its street food and historical landmarks.',
    image: 'https://images.pexels.com/photos/11451749/pexels-photo-11451749.jpeg',
    state: 'Madhya Pradesh',
    population: '2.2 million',
    places: [
      {
        id: 'rajwada',
        name: 'Rajwada Palace',
        description: 'A seven-story palace from the Holkar dynasty, built in 1747.',
        image: 'https://images.pexels.com/photos/11451753/pexels-photo-11451753.jpeg',
        type: 'monument'
      },
      {
        id: 'sarafa-bazaar',
        name: 'Sarafa Bazaar',
        description: 'Famous night food market known for traditional Indian street food.',
        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
        type: 'market'
      }
    ],
    colleges: [
      {
        id: 'iit-indore',
        name: 'IIT Indore',
        description: 'Premier engineering and technology institute.',
        established: '2009',
        type: 'Technical Institute',
        rating: 'Institute of National Importance',
        image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg'
      },
      {
        id: 'davv',
        name: 'Devi Ahilya Vishwavidyalaya',
        description: 'Major public university offering various programs.',
        established: '1964',
        type: 'Public University',
        rating: 'NAAC A+',
        image: 'https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg'
      }
    ],
    hospitals: [
      {
        id: 'choithram',
        name: 'Choithram Hospital',
        description: 'Leading multi-specialty hospital in central India.',
        established: '1979',
        type: 'Private Hospital',
        specialties: ['Cardiology', 'Neurology', 'Nephrology'],
        image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg'
      },
      {
        id: 'my-hospital',
        name: 'MY Hospital',
        description: 'Largest government hospital in Indore.',
        type: 'Government Hospital',
        specialties: ['General Medicine', 'Surgery', 'Emergency Care'],
        image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg'
      }
    ]
  }
];
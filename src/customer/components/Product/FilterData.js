export const genre = [
    "Fantasy",
    "Romance",
    "Adventure",
    "Detective",
    "Thriller",
    "Horror",
    "Art",
    "Psychology",
  ];

export const filters = [
  {
    id: "genre",
    name: "Genre",
    options: [
      { value: "fantasy", label: "Fantasy" },
      { value: "romance", label: "Romance" },
      { value: "adventure", label: "Adventure" },
      { value: "detective", label: "Detective" },
      { value: "thriller", label: "Thriller" },
      { value: "horror", label: "Horror" },
      {value:"art",label:"Art"},
      {value:"psychology",label:"Psychology"}
    ],
  },

  {
    id: "language",
    name: "Language",
    options: [
      { value: "kz", label: "KZ" },
      { value: "eng", label: "ENG" },
      { value: "spn", label: "SPN" },
      { value: "frn", label: "FRN" },
      { value: "chn", label: "CHN" },
      { value: "krn", label: "KRN" },
    ],
  },
  
];

export const singleFilter=[
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₸159 To ₸399" },
      { value: "399-999", label: "₸399 To ₸999" },
      { value: "999-1999", label: "₸999 To ₸1999" },
      { value: "1999-2999", label: "₸1999 To ₸2999" },
      { value: "3999-4999", label: "₸3999 To ₸4999" },
    ],
  },
  {
    id: "disccout",
    name: "Disccount Range",
    options: [
      {
        value: "10",
        label: "10% And Above",
      },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
      { value: "60", label: "60% And Above" },
      { value: "70", label: "70% And Above" },
      { value: "80", label: "80% And Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
      
    ],
  },
]

export const sortOptions = [
  
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];

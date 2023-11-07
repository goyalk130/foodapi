const data = [
  {
    name: "Butter Chicken",
    url: "https://www.seriouseats.com/images/2015/01/butter-chicken-lead-2-thumb.jpg",
  },
  {
    name: "Chicken Tikka Masala",
    url: "https://www.bbcgoodfood.com/recipes/chicken-tikka-masala",
  },
  {
    name: "Biryani",
    url: "https://www.thekitchn.com/how-to-make-chicken-biryani-recipe-228451",
  },
  {
    name: "Naan",
    url: "https://www.seriouseats.com/images/2014/02/naan-bread-recipe-2-thumb.jpg",
  },
  {
    name: "Tandoori Chicken",
    url: "https://www.bbcgoodfood.com/recipes/tandoori-chicken",
  },
  {
    name: "Samosas",
    url: "https://www.bbcgoodfood.com/recipes/samosas",
  },
  {
    name: "Aloo Gobi",
    url: "https://www.thekitchn.com/how-to-make-aloo-gobi-recipe-224683",
  },
  {
    name: "Palak Paneer",
    url: "https://www.bbcgoodfood.com/recipes/palak-paneer",
  },
  {
    name: "Dal Makhani",
    url: "https://www.seriouseats.com/images/2014/02/how-to-make-dal-makhani-2-thumb.jpg",
  },
  {
    name: "Chana Masala",
    url: "https://www.thekitchn.com/how-to-make-chana-masala-recipe-224682",
  },
  {
    name: "Jeera Aloo",
    url: "https://www.bbcgoodfood.com/recipes/jeera-aloo",
  },
  {
    name: "Baingan Bharta",
    url: "https://www.seriouseats.com/images/2014/02/baingan-bharta-2-thumb.jpg",
  },
  {
    name: "Rajma Chawal",
    url: "https://www.thekitchn.com/how-to-make-rajma-chawal-recipe-224681",
  },
  {
    name: "Dosa",
    url: "https://www.bbcgoodfood.com/recipes/dosa-recipe",
  },
  {
    name: "Idli",
    url: "https://www.seriouseats.com/images/2014/01/how-to-make-idlis-2-thumb.jpg",
  },
  {
    name: "Vada",
    url: "https://www.bbcgoodfood.com/recipes/vada-recipe",
  },
  {
    name: "Uttapam",
    url: "https://www.seriouseats.com/images/2014/01/uttapam-recipe-2-thumb.jpg",
  },
  {
    name: "Poori",
    url: "https://www.bbcgoodfood.com/recipes/poori-recipe",
  },
  {
    name: "Paratha",
    url: "https://www.seriouseats.com/images/2014/01/paratha-recipe-2-thumb.jpg",
  },
  {
    name: "Roti",
    url: "https://www.bbcgoodfood.com/recipes/roti-recipe",
  },
  {
    name: "Papadum",
    url: "https://www.seriouseats.com/images/2014/02/papadum-recipe-2-thumb.jpg",
  },
  {
    name: "Gulab Jamun",
    url: "https://www.bbcgoodfood.com/recipes/gulab-jamun-recipe",
  },
  {
    name: "Jalebi",
    url: "https://www.seriouseats.com/images/2014/01/how-to-make-jalebi-2-thumb.jpg",
  },
  {
    name: "Gajar ka Halwa",
    url: "https://www.bbcgoodfood.com/recipes/gajar-ka-halwa-recipe",
  },
  {
    name: "Ladoo",
    url: "https://www.seriouseats.com/images/2014/01/how-to-make-ladoos-2-thumb.jpg",
  },
  {
    name: "Barfi",
    url: "https://www.bbcgoodfood.com/recipes/barfi-recipe",
  },
  {
    name: "Rasmalai",
    url: "https://www.seriouseats.com/images/2014/02/how-to-make-rasmalai-2-thumb.jpg",
  },
  {
    name: "Panipuri",
    url: "https://www.bbcgoodfood.com/recipes/panipuri-recipe",
  },
  {
    name: "Bhel Puri",
    url: "https://www.seriouseats.com/images/2014/02/bhel-puri-recipe-2-thumb.jpg",
  },
  {
    name: "Sev Puri",
    url: "https://www.bbcgoodfood.com/recipes/sev-puri-recipe",
  },
  {
    name: "Dahi Puri",
    url: "https://www.seriouseats.com/images/2014/02/dahi-puri-recipe-2-thumb.jpg",
  },
  {
    name: "Ragda Patties",
    url: "https://www.bbcgoodfood.com/recipes/ragda-patties-recipe",
  },
  {
    name: "Pav Bhaji",
    url: "https://www.seriouseats.com/images/2014/0",
  },
  {
    name: "Vada Pav",
    url: "https://www.bbcgoodfood.com/recipes/vada-pav-recipe",
  },
  {
    name: "Misal Pav",
    url: "https://www.seriouseats.com/images/2014/02/misal-pav-recipe-2-thumb.jpg",
  },
  {
    name: "Dhokla",
    url: "https://www.bbcgoodfood.com/recipes/dhokla-recipe",
  },
  {
    name: "Patra",
    url: "https://www.seriouseats.com/images/2014/02/patra-recipe-2-thumb.jpg",
  },
  {
    name: "Undhiyu",
    url: "https://www.bbcgoodfood.com/recipes/undhiyu-recipe",
  },
  {
    name: "Khaman Dhokla",
    url: "https://www.seriouseats.com/images/2014/02/khaman-dhokla-recipe-2-thumb.jpg",
  },
  {
    name: "Fafda Jalebi",
    url: "https://www.bbcgoodfood.com/recipes/fafda-jalebi-recipe",
  },
  {
    name: "Mohanthal",
    url: "https://www.seriouseats.com/images/2014/02/mohanthal-recipe-2-thumb.jpg",
  },
  {
    name: "Basundi",
    url: "https://www.bbcgoodfood.com/recipes/basundi-recipe",
  },
  {
    name: "Doi Maachh",
    url: "https://www.seriouseats.com/images/2014/01/doi-maachh-recipe-2-thumb.jpg",
  },
  {
    name: "Aloo Posto",
    url: "https://www.bbcgoodfood.com/recipes/aloo-posto-recipe",
  },
  {
    name: "Chingri Macher Malai Curry",
    url: "https://www.seriouseats.com/images/2014/02/chingri-macher-malai-curry-recipe-2-thumb.jpg",
  },
  {
    name: "Kosha Mangsho",
    url: "https://www.bbcgoodfood.com/recipes/kosha-mangsho-recipe",
  },
  {
    name: "Phuchka",
    url: "https://www.seriouseats.com/images/2014/02/phuchka-recipe-2-thumb.jpg",
  },
  {
    name: "Jhaal Muri",
    url: "https://www.bbcgoodfood.com/recipes/jhaal-muri-recipe",
  },
  {
    name: "Ghugni",
    url: "https://www.seriouseats.com/images/2014/01/ghugni-recipe-2-thumb.jpg",
  },
  {
    name: "Beguni",
    url: "https://www.bbcgoodfood.com/recipes/beguni-recipe",
  },
  {
    name: "Mochar Ghonto",
    url: "https://www.seriouseats.com/images/2014/02/mochar-ghonto-recipe-2-thumb.jpg",
  },
  {
    name: "Roshogolla",
    url: "https://www.bbcgoodfood.com/recipes/roshogolla-recipe",
  },
  {
    name: "Sondesh",
    url: "https://www.seriouseats.com/images/2014/01/how-to-make-sondesh-2-thumb.jpg",
  },
  {
    name: "Mishti Doi",
    url: "https://www.bbcgoodfood.com/recipes/mishti-doi-recipe",
  },
  {
    name: "Rasgulla",
    url: "https://www.seriouseats.com/images/2014/02/rasgulla-recipe-2-thumb.jpg",
  },
  {
    name: "Payesh",
    url: "https://www.bbcgoodfood.com/recipes/payesh-recipe",
  },
  {
    name: "Hyderabadi Biryani",
    url: "https://www.seriouseats.com/images/2014/02/how-to-make-hyderabadi-biryani-2-thumb.jpg",
  },
  {
    name: "Nihari",
    url: "https://www.bbcgoodfood.com/recipes/nihari-recipe",
  },
  {
    name: "Haleem",
    url: "https://www.seriouseats.com/images/2014/02/haleem-recipe-2-thumb.jpg",
  },
  {
    name: "Rogan Josh",
    url: "https://www.bbcgoodfood.com/recipes/rogan-josh-recipe",
  },
  {
    name: "Pindi Chole",
    url: "https://www.seriouseats.com/images/2014/02/pindi-chole-recipe-2-thumb.jpg",
  },
  {
    name: "Saag",
    url: "https://www.bbcgoodfood.com/recipes/saag-recipe",
  },
];

export default data;

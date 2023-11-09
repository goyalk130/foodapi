const data = [
  {
    name: "Butter Chicken",
    url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/04/butter-chicken-recipe.jpg",
  },
  {
    name: "Chicken Tikka Masala",
    url: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Tikka-Masala-min-750x750.jpg",
  },
  {
    name: "Biryani",
    url: "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
  },
  {
    name: "Naan",
    url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butter-naan.jpg",
  },
  {
    name: "Tandoori Chicken",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theloveofspice.com%2Ftandoori-chicken-recipe%2F&psig=AOvVaw0pzqTeb3yprNikMWZuf8F7&ust=1699466698038000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiXnvq8soIDFQAAAAAdAAAAABAD",
  },
  {
    name: "Samosas",
    url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg",
  },
  {
    name: "Aloo Gobi",
    url: "https://ministryofcurry.com/wp-content/uploads/2017/04/Aloo-Gobi-5.jpg",
  },
  {
    name: "Palak Paneer",
    url: "https://healthynibblesandbits.com/wp-content/uploads/2020/01/Saag-Paneer-FF.jpg",
  },
  {
    name: "Dal Makhani",
    url: "https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog-500x500.jpg",
  },
  {
    name: "Chana Masala",
    url: "https://www.indianveggiedelight.com/wp-content/uploads/2019/05/chana-masala-recipe-featured.jpg",
  },
  {
    name: "Jeera Aloo",
    url: "https://www.cookwithmanali.com/wp-content/uploads/2015/09/Jeera-Aloo-Recipe-Indian-500x500.jpg",
  },
  {
    name: "Baingan Bharta",
    url: "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg",
  },
  {
    name: "Rajma Chawal",
    url: "https://www.cookwithmanali.com/wp-content/uploads/2014/08/Baingan-Bharta-500x500.jpg",
  },
  {
    name: "Dosa",
    url: "https://www.daringgourmet.com/wp-content/uploads/2023/06/Dosa-Recipe-3.jpg",
  },
  {
    name: "Idli",
    url: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/idli-recipe-4.jpg",
  },
  {
    name: "Vada",
    url: "https://myfoodstory.com/wp-content/uploads/2022/09/Medu-Vada-5.jpg",
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

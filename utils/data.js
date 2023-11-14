const data = [
  {
    name: "Butter Chicken",
    url: "https://imgs.search.brave.com/UzpS-ShNXTJf3IAld3hfoTnrPFLvKYZk8nymQdLrad8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9idXR0ZXItY2hp/Y2tlbl80NjY2ODkt/NTQ0NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
  },
  {
    name: "Chicken Tikka Masala",
    url: "https://imgs.search.brave.com/GjRMbFJdsMvfkhBcLjbSLSm4CPozWKsqKo6OPfokG9c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/NjkxMTkzNy9waG90/by9idXR0ZXItY2hp/Y2tlbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NF9mUlR5/eHdtNjR0YklxNWUz/eGxoUjlmZ1pIcFdt/TGRtNlZuam1SaUZo/VT0",
  },
  {
    name: "Biryani",
    url: "https://imgs.search.brave.com/4za-mzW6UXaZN3NHsGp_LXSz6oVreakUwgGAXyYKub4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc5/MDg1NDk0L3Bob3Rv/L2luZGlhbi1iaXJ5/YW5pLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1WSkFVZml1/YXZGWUI3UFh3aXN2/VWhMcVdGSjIwLTlt/MDg3LWN6VUpwOUZz/PQ",
  },
  {
    name: "Naan",
    url: "https://imgs.search.brave.com/yrQ2m0UPZaz6s2C5xCil-QjatFzQ0zyaqH4_4cbsN3g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzg5LzM5LzY1/LzM2MF9GXzQ4OTM5/NjU3OF9kMVlQVWht/S3BHSzhMZ3QwV3ZP/Q2txakRDSVppMjNU/by5qcGc",
  },
  {
    name: "Tandoori Chicken",
    url: "https://imgs.search.brave.com/gVqJp0Tfy4awUgV0wYmG4zStYJYszrD49OCkpVetGtI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA1/ODAyOTIyMC9waG90/by90YW5kb29yaS1j/aGlja2VuLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1jNnVl/Mmc3ZW8zZlBLakNF/b1NFeFhvczg1V1dX/bGFQYU9YbldGbWIw/OWNRPQ",
  },
  {
    name: "Samosas",
    url: "https://imgs.search.brave.com/0y87gnTDfyQjgIQQZQK47OJMIecWO9TxNA0t6l6x9I8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzMzLzcwLzUw/LzM2MF9GXzUzMzcw/NTAxN19ESHE1MkRH/aDAwUHV1UEMwOHlm/UXE2T1lqWkV3cUVw/QS5qcGc",
  },
  {
    name: "Aloo Gobi",
    url: "https://imgs.search.brave.com/_9Vsx19auWK8-5FkoK6eushkGO3FDR1XFJ4KQ9Ede5M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hpbGlwZXBwZXJt/YWRuZXNzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/NC9BbG9vLUdvYmkt/UmVjaXBlNi5qcGc",
  },
  {
    name: "Palak Paneer",
    url: "https://imgs.search.brave.com/dI-rzYknBSBvw1jzDB_c6ixZTS7ckrx0jW69UCZ-3y0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFudmVnZ2ll/ZGVsaWdodC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDIvcGFsYWstcGFu/ZWVyLXN0b3ZldG9w/LTEuanBn",
  },
  {
    name: "Dal Makhani",
    url: "https://imgs.search.brave.com/dl0o6ifTu975KP2EP7eqgd5LOEr_QXm6_ooG9foGr_k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hpc2thZmZhaXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzEwL0RhbC1N/YWtoYW5pLTItMS0x/MjAweDE4MDAuanBn",
  },
  {
    name: "Chana Masala",
    url: "https://imgs.search.brave.com/8Fk86kMVJk7HV6Uye7pNQCV16z1x2yNKEpCHmhzWqkE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMzAv/MjAyMC8wOC9jaGFu/YS1tYXNhbGEtZmI4/MDliYy5qcGc_cXVh/bGl0eT05MCZyZXNp/emU9NDQwLDQwMA",
  },
  {
    name: "Jeera Aloo",
    url: "https://imgs.search.brave.com/y3iG8CH9W_X6cqnF1kdnIuqLh1mp1mGDdXcrieWTtAY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4x/LmZvb2R2aXZhLmNv/bS9zdGF0aWMtY29u/dGVudC9mb29kLWlt/YWdlcy9jdXJyeS1y/ZWNpcGVzL2plZXJh/LWFsb28tcmVjaXBl/L2plZXJhLWFsb28t/cmVjaXBlLmpwZw",
  },
  {
    name: "Baingan Bharta",
    url: "https://imgs.search.brave.com/lYWcNX5XXtjPEhn58FB4Rh7dCL1r6Xo8sTZFcO7Xlzo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzUxL2Zl/LzdmLzUxZmU3Zjk2/NTBiZDNjZWE5ZDMy/MmRmYWFlOTJhYWQz/LmpwZw",
  },
  {
    name: "Rajma Chawal",
    url: "https://imgs.search.brave.com/U37aQ90ZP-KmbhIqi8F0WHHkUeIcq1-cmj_cv_2NigM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Vjb25kcmVjaXBl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wMS9yYWpt/YS1jaGF3YWwtMi03/MjB4NTQ0LmpwZw",
  },
  {
    name: "Dosa",
    url: "https://imgs.search.brave.com/cF-6vMKQyUsRSI3Wb0YNRnpjwHnmw_GCEb423qD27cg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzg2LzMzLzcy/LzM2MF9GXzE4NjMz/NzIwOV85cmJjTUx1/M3dHQ0ROYUVvSzFq/TzBhTnpiMHB2N1hz/Ny5qcGc",
  },
  {
    name: "Idli",
    url: "https://imgs.search.brave.com/iu_hxge1x00sVOqlOtuxQfZzSjJDCowzd2gdgfy3VnU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTgzMTIwNC9waG90/by9pZGxpLXNhbWJo/YXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUdpMmpUUXhp/RXNSWUFMbkc4bDhS/WjBZYlRvQ3FoMHB5/UG9udUtYVEFrZkE9",
  },
  {
    name: "Vada",
    url: "https://imgs.search.brave.com/DygEeU7Pk6iQ0bbYcYWNWKOV0O1R00nzRrFMYXq7jpQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4x/LmZvb2R2aXZhLmNv/bS9zdGF0aWMtY29u/dGVudC9mb29kLWlt/YWdlcy9icmVha2Zh/c3QtcmVjaXBlcy9t/ZWR1LXZhZGEvbWVk/dS12YWRhLmpwZw",
  },
  {
    name: "Uttapam",
    url: "https://imgs.search.brave.com/4CJbwVefl3-cfGJdYfkkcJzw7Is1vjP3urw5zjGbC9A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Zmxhdm91cm9mZm9v/ZC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDMvSW5z/dGFudC1SYXZhLVV0/dGFwYW0tMi5qcGc",
  },
  {
    name: "Poori",
    url: "https://imgs.search.brave.com/mHVYFGIkZ2X26EVIOMEGV6d9PLxx-oFLzr_qx3HW8EA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFuaGVhbHRo/eXJlY2lwZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzEyL3Bvb3JpLXB1/cmktcmVjaXBlLmpw/Zy53ZWJw",
  },
  {
    name: "Paratha",
    url: "https://imgs.search.brave.com/ehMN5XUdvHIqybB8q5R8NyUjtIzsPCSlyaN8s8UAyJY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MTQ2Njc1Ny9waG90/by9hbG9vLXBhcmF0/aGEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXN4S3Q3bVMx/SFJGWnBsdGRpMHdV/bXBkVk1VWFlRTFNm/eXM5T2Nya05KaDQ9",
  },
  {
    name: "Roti",
    url: "https://imgs.search.brave.com/ahFd_9js-vHUKYs0SwDK_t_rrst0mgCWOgq1vSnW3FY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/NDEwNDg0Ny9waG90/by9ob21lbWFkZS1p/bmRpYW4tcm90aS1v/ci1jaGFwYXRpLWlu/ZGlhbi1icmVhZC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/RFQ3N2VzSlRMTFgy/OTZsbzRPZFJiN1dN/dmJVSjRYb3NpSkJ6/QjRwaFZsND0",
  },
  {
    name: "Papadum",
    url: "https://imgs.search.brave.com/drz8Pi87iR2xg0Ju-Lgaff4FFiZ52S5qNq3TsCoUfbM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jLnJl/Y2lwZWxhbmQuY29t/L2ltYWdlcy9yLzE3/NDE4LzFiNDI5NmRh/ODNiMzk2OGE1MWJh/XzU1MC5qcGc",
  },
  {
    name: "Gulab Jamun",
    url: "https://imgs.search.brave.com/olKIWP4QVW19Z5K41eI43YGcBagKTAUQReRNnDlF4c4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzM0LzQ0LzYy/LzM2MF9GXzUzNDQ0/NjIwMV9XQTkwNkZM/MmVYY2dzMlp3RkhF/eU5TUVRlWUlFaWd3/OS5qcGc",
  },
  {
    name: "Jalebi",
    url: "https://imgs.search.brave.com/GqhuQ0kZgZc8d4L-JTuiMJXFKrYVN6bdxPJnkDBwJAY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzE2LzQxLzky/LzM2MF9GXzQxNjQx/OTIzN18yR2tlZmxo/cTZmaGxReGlzZ2Vj/ZENGdHNraEloR3FH/OC5qcGc",
  },
  {
    name: "Gajar ka Halwa",
    url: "https://imgs.search.brave.com/5Kr22Skfu67Gjjao6B2T_Spf_oe_XFdhVNNG1BbiQ9k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzczLzM3LzA1/LzM2MF9GXzI3MzM3/MDUzNV9BeGx1VFFC/M2tiNzJpY3VCb2Ju/RkVhRWx0cGpHMG5u/MS5qcGc",
  },
  {
    name: "Ladoo",
    url: "https://imgs.search.brave.com/irkdsymMdAV4AgaTTNal4sNwglt0jvxp7RAAgNW5EVc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2MxL0xhZGR1X1N3/ZWV0LkpQRw",
  },
  {
    name: "Barfi",
    url: "https://imgs.search.brave.com/CZ37q1KrUsAul9MyNHS7Pi39b_22ICs8cgoYgtO6dl0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFybGFkYWxhbC5j/b20vdGRfY29udF9p/bWcvZHJ5X2ZydWl0/X2JhcmZpX0RTQzc3/OTkuSlBH",
  },
  {
    name: "Rasmalai",
    url: "https://imgs.search.brave.com/KN0TciuAIzludlhgCFTiGaPR6JhsYN2djXkfFeyQ6L8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzE1LzU5LzE0/LzM2MF9GXzExNTU5/MTQ5M19WWnY4SkFP/bVZJRGhEdDB3S0tm/eHhrRzN5WmRmelVh/TC5qcGc",
  },
  {
    name: "Panipuri",
    url: "https://imgs.search.brave.com/xqRGqpppfjRjpcD1MouMdVrmv-lxhr0Foy0q2LbktEA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTI1/NDE2ODI3L3Bob3Rv/L3BhbmktcHVyaS1n/b2xnYXBwZS1jaGF0/LWl0ZW0taW5kaWEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXRPQ21OMjhBWEhJ/ZTNTTUJnc3pXVTZQ/TFVENnc2Q1U2cTh5/TWR3U0FLUHc9",
  },
  {
    name: "Bhel Puri",
    url: "https://imgs.search.brave.com/p-8uDl541GS1LDDB8-dwz8GbdBAvZS3y6Q6S-sp2omA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzYzLzk0Lzc0/LzM2MF9GXzE2Mzk0/NzQyMl92QjhHcGw5/RUd2MmI0YTRnc05K/eHhzemtQdFBmbWJF/WS5qcGc",
  },
  {
    name: "Sev Puri",
    url: "https://imgs.search.brave.com/zwFghYcjsJqAgMZdK8B9uqlE9JX17WsYhSnEpmlR4D4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vc2FuZGh5/YWhhcmloYXJhbi5j/by51ay93cC1jb250/ZW50L3VwbG9hZHMv/MjAxMC8xMS9zZXYt/cHVyaS0yLW9mLTMt/bWluLmpwZz9yZXNp/emU9NzAwLDQ0OCZz/c2w9MQ",
  },
  {
    name: "Dahi Puri",
    url: "https://imgs.search.brave.com/l0YVwHYB9BY-nE-8eEUGX9-fgw-Yc1uXs2xWzPxyViU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hpc2thZmZhaXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzExL0RhaGkt/UHVyaS1TdGVwLTEz/LmpwZw",
  },
  {
    name: "Ragda Patties",
    url: "https://imgs.search.brave.com/VftSd123nX69xIDuVJfODGVwmxQHtt52uf3AUVk8YJw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbmRp/YW52ZWdyZWNpcGUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzAyL2hvdy10/by1tYWtlLXJhZ2Rh/LXBhdHRpZXMtcmVj/aXBlLmpwZw",
  },
  {
    name: "Pav Bhaji",
    url: "https://imgs.search.brave.com/zFEMfTp0gpLKBNpzm6KbaWTj4lyu3f7T8WovTzNx1uI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzYxLzQ2LzI5/LzM2MF9GXzE2MTQ2/MjkxN196aXFxdUVG/aDZrOGttR0RGNzI0/d01DaWp5RkFhNFlu/dS5qcGc",
  },
  {
    name: "Vada Pav",
    url: "https://imgs.search.brave.com/O0RQDR1cSGTJUzI18xLjQImCWzu50j5wlvKhf61TcIE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/NzE2NDE0OC9waG90/by92YWRhLXBhdi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/X0pXLTNZYm4yUUtT/NUw0d0o5Y1dUM3Q0/TnVKTlpRMU5vOF9f/bTFjNXozdz0",
  },
  {
    name: "Misal Pav",
    url: "https://imgs.search.brave.com/Yjdc0tbU7lkx478Fp3327yKihrmqhqOUVARjbXAPLjs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzAyLzY4LzA5/LzM2MF9GXzQwMjY4/MDk1OV9jMEFXOGxC/a1dzOFlVSW1NbGV0/M0VXY2ZiOXVVVnZy/eS5qcGc",
  },
  {
    name: "Dhokla",
    url: "https://imgs.search.brave.com/zSnEoyFwdOAJsjotufB_KgAONOcI66N0GCKozJ8NNLY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzI3LzE3LzQw/LzM2MF9GXzYyNzE3/NDAxOF9EVVZ0bHJN/QWVNVzJpcWxKaWFR/VE0zeTBYcUlDTUVi/Zy5qcGc",
  },
  {
    name: "Patra",
    url: "https://imgs.search.brave.com/36uCN-LjkZUvO4skwOp_q-vFpaL99_vmftIJS44durA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29va2luZ2Nhcm5p/dmFsLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wOC9Q/YXRyYS1yZWNpcGUt/QWx1LXZhZGktNzY4/eDEwMjQud2VicA",
  },
  {
    name: "Undhiyu",
    url: "https://imgs.search.brave.com/M0D1iPPE4vTz5xk6Fiz-WVuUC8TgF9gaIppmXCKK-4Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vYmluamFs/c3ZlZ2tpdGNoZW4u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzAxL1N1cnRp/LVVuZGhpeXUtSDIt/MS5qcGc_cmVzaXpl/PTYwMCw5MDAmc3Ns/PTE",
  },
  {
    name: "Khaman Dhokla",
    url: "https://imgs.search.brave.com/NXM6-D-4GDr8j4UElN2rAak4Sk-yj-WY0TxBPZvv4uc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY3/NTk0MDMyL3Bob3Rv/L2Rob2tsYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YnNu/RWdlQlVEX2huMDdk/QXlQdWFORXV5UVNF/THlVWlZxc0ZPZ3Fh/RTl3bz0",
  },
  {
    name: "Fafda",
    url: "https://imgs.search.brave.com/e6Ak6yn9hVx34Fx8tlQ0ZUFEktile4gYe1GDvmjSESo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzM3LzU1LzMy/LzM2MF9GXzUzNzU1/MzIxNF9TWUN3TnFX/Vm5Lc3BTMHNmZ1VI/YTJ0Z1IyMjJ1cExT/Zy5qcGc",
  },
  {
    name: "Mohanthal",
    url: "https://imgs.search.brave.com/ysNmvoLaww5uzZ0L7-KsuRgkBYyEc3BLiabeOmDqHRs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQyLzNi/LzA3LzQyM2IwN2E4/NDY0NDY2MDRkYWQ2/Mjk3MmZhNDg3M2Fl/LmpwZw",
  },
  {
    name: "Basundi",
    url: "https://imgs.search.brave.com/6cXuOaBfTu9fFbSF3_u0sodFN2dyHl-MU01fsCgPgk8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29va2luZ2Nhcm5p/dmFsLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wMy9C/YXN1bmRpLTEud2Vi/cA",
    
  },
  {
    name: "Doi Maachh",
    url: "https://imgs.search.brave.com/ov_HWjCIptGK4a2JZ4vvVWjYHFWM8I3QQcud_AXbITQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbmRp/YW5zaW1tZXIud3Bl/bmdpbmVwb3dlcmVk/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/Zm9ybWlkYWJsZS9E/b2ktTWFhY2guanBn",
  },
  {
    name: "Aloo Posto",
    url: "https://imgs.search.brave.com/4YvvyH_ID9W0u7IInzbz-SjxiuFHc5tTfym9hMDWooM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9sZHNreS5jb20v/aW1nLzIwMTcvMDkv/eDYwMHg3MDAtMTgt/MTUwNTcyNDA5OC5q/cGcucGFnZXNwZWVk/LmljLndmazBPMElT/NDIuanBn",
  },
  {
    name: "Chingri Macher Malai Curry",
    url: "https://imgs.search.brave.com/nwQbo6qEHhiN7BZKwQTfk7HLenJrfplXUGNnr8mC58w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWFzeWNvb2tpbmd3/aXRobW9sbHkuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE1/LzA5L0NoaW5ncmkt/TWFsYWktQ3Vycnkt/My5qcGc",
  },
  {
    name: "Kosha Mangsho",
    url: "https://imgs.search.brave.com/JpLC9TyWMHz0KUD69PtaxqtQQMQF5yQbOTpJBE7OBec/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hpc2thZmZhaXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzAxL0tvc2hh/LU1hbmdzaG8tMi0x/LTEyMDB4MTgwMC5q/cGc",
  },
  {
    name: "Phuchka",
    url: "https://imgs.search.brave.com/K58OJCHJh4ApOSOaiZILQOaL3NmAGVAabkj4GiVOlIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ydW1r/aXNnb2xkZW5zcG9v/bi5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDgvRnVj/aGthLmpwZw",
  },
  {
    name: "Jhaal Muri",
    url: "https://imgs.search.brave.com/Oit6X93CG6dd1kSrXP7qEK1hcpT3ntyxUW-Vg3hiA6s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVl/YTVmMzkxM2IwY2Nm/MDZkMGVjMjU2My8x/NTkzNDQ1NzAzNTkx/LTJBTVZJQlpHWkU2/SzdWRTJMMktRL0po/YWwrTXVyaSsoNiku/anBn",
  },
  {
    name: "Ghugni",
    url: "https://imgs.search.brave.com/bFPaQDFMLDsrLVe-lWssg1U_lbKa2HClpkqdu6aEBg4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdGhlZm9v/ZGhvZy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDYv/Z2h1Z25pLWNoYWF0/LWVkaXRlZC5qcGVn",
  },
  {
    name: "Beguni",
    url: "https://imgs.search.brave.com/R_5-ovZuw7AZjwYb6Kky_gFpTfGPoV2YUxLNyDm7kD8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlYmVuZ2FsaXJl/Y2lwZS5jb20vaW1h/Z2VzL0JyZWFrZmFz/dF9TbmFja3NfYW5k/X0FwcGV0aXplcnMv/YmVndW5pL3RzciUy/MGxhLmpwZw",
  },
  {
    name: "Mochar Ghonto",
    url: "https://imgs.search.brave.com/T3vwHlFvjnCsSoyJLBfmbWgx1YUQ96Z354RimRq1YVA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWct/Z2xvYmFsLmNwY2Ru/LmNvbS9yZWNpcGVz/LzRlNWFiNGI0ZDNi/ZjdkZmYvNjgweDQ4/MmNxNzAvbW9jaGFy/LWdob250by1iZW5n/YWxpLXN0eWxlLWJh/bmFuYS1ibG9zc29t/cy1jdXJyeS1yZWNp/cGUtbWFpbi1waG90/by5qcGc",
  },
  {
    name: "Roshogolla",
    url: "https://imgs.search.brave.com/0vxne2eDo7KpueatwoWSB7LPghgp3oduRUxHf5mjfMc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wZWVr/bmNvb2tzYS5ibG9i/LmNvcmUud2luZG93/cy5uZXQvaW5kZXgt/cmVjaXBlL3Jvc29n/b2xsYS5qcGc",
  },
  {
    name: "Sondesh",
    url: "https://imgs.search.brave.com/9TOAwyjGeefCZ-lg4KI5cnoD33m3XdyO_ikZB3Lenoo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4z/LmZvb2R2aXZhLmNv/bS9zdGF0aWMtY29u/dGVudC9mb29kLWlt/YWdlcy9iZW5nYWxp/LXJlY2lwZXMvc2Fu/ZGVzaC1zb25kZXNo/L3NhbmRlc2gtc29u/ZGVzaC5qcGc",
  },
  {
    name: "Mishti Doi",
    url: "https://imgs.search.brave.com/lBCVmuOoc2oVtHsQJtkZX_071padTTw7X78msM7LSqg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVncmVjaXBlc29m/aW5kaWEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzAy/L2JlbmdhbGktbWlz/aHRpLWRvaS1yZWNp/cGUuanBn",
  },
  {
    name: "Rasgulla",
    url: "https://imgs.search.brave.com/pghLXkiTQC9kZDO6J4ciDOHySSG4ZIQh-Ut23CU2DYE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9yYWtz/a2l0Y2hlbi5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMTAv/MTAvcmFzZ3VsbGEt/MjYuanBn",
  },
  {
    name: "Payesh",
    url: "https://imgs.search.brave.com/lkcUz9bxp1aHSeldstXSJjr2omb4nybIAo4k2Lr5geU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mYXJt/My5zdGF0aWNmbGlj/a3IuY29tLzI5MDEv/MTQ0NjM3MjU0ODRf/MTUwMTU2NTlmNV96/X2QuanBn",
  },
  {
    name: "Curry Rice",
    url: "https://imgs.search.brave.com/R0SJQDw8QverDGdS0TeRZRjB2VjDtTgODLsRBFwrpHw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9qNmUy/aThjOS5yb2NrZXRj/ZG4ubWUvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDEvUHVu/amFiaS1LYWRoaS1w/YWtvcmEtNS5qcGc",
  },
  {
    name: "Chole Bhature",
    url: "https://imgs.search.brave.com/NDb_Xx-pQy6ZNoADPTev4-q2ZhQE0ivKyMZ_YeisHGc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzg0LzM3Lzky/LzM2MF9GXzU4NDM3/OTI3MV9kcjk4dnhD/UHhsQjhGYjlTZ3lv/UXlicmdpTldGa3FB/Uy5qcGc",
  },
  {
    name: "Noodles",
    url: "https://imgs.search.brave.com/q5stiPURUatEsmPWiqHg2R3AnNNjL8RI6JGTsAmfcS0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTg3/Nzc1OTUyL3Bob3Rv/L2luc3RhbnQtbm9v/ZGxlcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cnRxVi15/OVNJeDB3c0RNUEgw/TzRmZ2J6eFB6Z2dE/eXoxaGg4eXdibDl6/QT0",
  },
  {
    name: "Panner Tikka",
    url: "https://imgs.search.brave.com/Yy1n7hlL4i1jutS5BLs8Y50SrCWOAeLHWQArwGUvSNQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFuaGVhbHRo/eXJlY2lwZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzExL3BhbmVlci10/aWtrYS5qcGcud2Vi/cA",
  },
  {
    name: "Pindi Chole",
    url: "https://imgs.search.brave.com/4qKCIDFOtnRGzuLXN3GR09rz1sH4FYIom3AwaYgZkCs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9qNmUy/aThjOS5yb2NrZXRj/ZG4ubWUvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDUvSW5z/dGFudC1Qb3QtUGlu/ZGktQ2hvbGUtUmVj/aXBlLTMuanBn",
  },
  {
    name: "Malpua",
    url: "https://imgs.search.brave.com/y3LjC8B96jigQBqlfa5gsYUAnCWknZfPIeyFYb04Qbc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3JhcGV0cmVlLmNv/LnVrL21lZGlhL3d5/c2l3eWcvQWRvYmVT/dG9ja18xOTQzMjkx/OTAuanBlZw",
  },
];

export default data;

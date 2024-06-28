import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <>
      {/* <footer className="bg-slate-800 font-sans px-8 sm:px-24">
        <div className="container px-32 py-12">
          <div className="grid grid-cols-1 gap-6 justify-between sm:grid-cols-2 w-100 sm:gap-y-10 lg:grid-cols-12">
            <div className="sm:col-span-4 flex gap-3 items-center">
              <img className="w-[40px] h-[40px] rounded-full" src="https://us.123rf.com/450wm/ylivdesign/ylivdesign1710/ylivdesign171008012/88020486-construction-materials-logo-gray-monochrome-illustration-of-construction-materials-vector-logo-for.jpg" alt="" />
              <p className="text-white">Behruz buildings</p>
            </div>

            <div className="sm:col-span-2">
              <p className="font-semibold text-white">
                Sayt havolalari
              </p>

              <div className="flex flex-col items-start mt-2 space-y-2">
                <Link
                  to={"/"}
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Bosh sahifa
                </Link>
                <Link
                  to={"/furnitures"}
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Mebellar
                </Link>
                <Link
                  to={"/contact"}
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Aloqa
                </Link>
                <Link
                  to={"/contact"}
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Fikr-mulohazalar
                </Link>
              </div>
            </div>

            <div className="sm:col-span-3">
              <div>
                <p className="font-semibold text-white dark:text-white">
                  Ish vaqti / Ish tartibi
                </p>
                <p className="mt-2 text-white transition-colors duration-300 dark:text-gray-300 leading-[1.8rem]">
                  Ish vaqti har kuni soat 08:00 dan 22:00 gacha. Yetkazib berish
                  seshanba, payshanba va shanba kunlari
                </p>
              </div>
            </div>
            <div className="sm:col-span-3">
              <p className="font-semibold text-white dark:text-white">
                Aloqa uchun
              </p>

              <div className="flex flex-col items-start mt-2 space-y-2">
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  +998 (91) 474-78-18
                </p>
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  mebellar@gmail.com
                </p>
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  t.me/mebellar_uz
                </p>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                width="130"
                height="110"
                alt=""
              />
              <img
                src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                width="130"
                height="110"
                alt=""
              />
            </div>

            <div className="flex gap-4 hover:cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="30"
                height="30"
                alt="fb"
              />
              <img
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="30"
                height="30"
                alt="tw"
              />
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="30"
                height="30"
                alt="inst"
              />
              <img
                src="https://www.svgrepo.com/show/94698/github.svg"
                className=""
                width="30"
                height="30"
                alt="gt"
              />
              <img
                src="https://www.svgrepo.com/show/22037/path.svg"
                width="30"
                height="30"
                alt="pn"
              />
              <img
                src="https://www.svgrepo.com/show/28145/linkedin.svg"
                width="30"
                height="30"
                alt="in"
              />
              <img
                src="https://www.svgrepo.com/show/22048/dribbble.svg"
                className=""
                width="30"
                height="30"
                alt="db"
              />
            </div>
          </div>
          <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4 opacity-60 text-white">
            {new Date().getFullYear()}-yil. Sayt mualliflik huquqi bilan
            himoyalangan.
          </p>
        </div>
      </footer> */}
      {/* <footer className="flex items-end justify-center">
  <div className="w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
   
    <div className="container">
      <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-2">
            <div className="flex items-center">
              <img src="https://us.123rf.com/450wm/ylivdesign/ylivdesign1710/ylivdesign171008012/88020486-construction-materials-logo-gray-monochrome-illustration-of-construction-materials-vector-logo-for.jpg" alt="" className="h-10 me-5 rounded" />
              <p>Behruz buildings</p>
            </div>
            <p className="text-white mt-6">Behruz buildings onlayn do'koni qurilish materiallarining barcha turlarini: sement, ohak, gips, devorbop, tom yopgich, suv o'tkazmaydigan va issiqlikni saqlovchi materiallarni - 100 hildan ortiq asosiy qurilish mahsulotlaridan to'liq foydalanishni ta'minlaydi.</p>
          </div>
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100 uppercase">Muhim linklar</h4>
            <div className="mt-6 grid space-y-3">
              <p><Link to={"/"} className="inline-flex gap-x-2 text-white hover:text-gray-200">Asosiy sahifa</Link></p>
              <p><Link to={"/category"} className="inline-flex gap-x-2 text-white hover:text-gray-200">Kategoriyalar</Link></p>
              <p><Link to={"/design"} className="inline-flex gap-x-2 text-white hover:text-gray-200">Namunalar</Link></p>
              
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100 uppercase">Foydalanish uchun</h4>
            <div className="mt-6 grid space-y-3">
              <p><Link to={"register"} className="inline-flex gap-x-2 text-white hover:text-gray-200" href="#">Ro'yxatdan o'tish</Link></p>
              <p><Link to={"/login"} className="inline-flex gap-x-2 text-white hover:text-gray-200" href="#">Kirish</Link></p>
              <p className="text-white hover:text-gray-200">BOG'LANISH UCHUN: +998(91)451-95-73</p>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100 uppercase">Yuklab olish</h4>
            <div className="mt-6 grid space-y-3">
              <img src="https://i.postimg.cc/43nhk9y7/store.png" className="h-12" alt="" />
              <img src="https://i.postimg.cc/VkKbVRfP/google.png" className="h-12" alt="" />
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
            {new Date().getFullYear()}-yil. Sayt mualliflik huquqi bilan
            himoyalangan.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-primary transition-all duration-300" href="#">
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-primary transition-all duration-300" href="#">
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>
            <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-primary transition-all duration-300" href="#">
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
            <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-primary transition-all duration-300" href="#">
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-primary transition-all duration-300" href="#">
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer> */}
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <img
                className="rounded-full"
                src="https://bcassetcdn.com/public/blog/wp-content/uploads/2023/07/28140224/Urban-City-Apartment-by-marcololstudio.png"
                alt=""
              />
              <p>E-ko'chmas mulk</p>
            </div>
            <div className="media-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Sayt linklari</li>
              <li>
                <Link to="/">Bosh sahifa</Link>
              </li>
              <li>
                <Link to="/category">Kategoriya</Link>
              </li>
              <li>
                <Link to="/design">Namunalar</Link>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Foydalanuvchilar uchun</li>
              <li>
                <Link to="/register">Ro'yxatdan o'tish</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Bog'lanish uchun</li>
              <li>
                <a href="#">+998(97) 777-55-76</a>
              </li>
              <li>
                <a href="#">otabekabdurahmonov50@gmail.com</a>
              </li>
            </ul>
            <ul className="box input-box">
              <li className="link_name">Obuna bo'lish</li>
              <li>
                <input type="text" placeholder="Email kiriting" />
              </li>
              <li>
                <input type="button" value="Bizga qo'shiling" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <p className="font-sans p-2 text-start md:text-center md:text-lg md:p-4 opacity-70 text-white">
              {new Date().getFullYear()}-yil. Sayt mualliflik huquqi bilan
              himoyalangan.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import static1 from "../assets/static1.jpg";
import "./components.css";
const Information = () => {
  return (
    <div className="sm:p-24 p-8 pb-8">
      <h1 className="common_subtitle">Bizning uylarning qurilish loyihasi</h1>
      <div className="w-[100%] flex flex-col sm:flex-row gap-10 mt-5">
        <div className="sm:w-1/2 w-[100%] rounded">
          <img className="w-[100%] rounded" src={static1} alt="" />
        </div>
        <div className="sm:w-1/2 w-[100%] home_design">
          <p className="text-lg leading-8 w-[100%]">
            ko’p qavatli uylarni loyihalash va qurish bilan bog’liq qoidalar va
            qoidalar;
          </p>
          <p className="text-lg leading-8 w-[100%]">
            yangi binoning mavjudlarga masofasi;{" "}
          </p>
          <p className="text-lg leading-8 w-[100%]">
            derazalarning asosiy nuqtalarda joylashishi;
          </p>
          <p className="text-lg leading-8 text-justify w-[100%]">
            {" "}
            ko’p qavatli turar-joy binosiga soyaning tushish burchagi;
          </p>
          <p className="text-lg leading-8 w-[100%]">
            har bir alohida xonaning tarkibi.
          </p>
          <p className="text-lg leading-8 w-[100%]">
          Ko’p qavatli turar-joy binosining me’moriy dizayni jarayonida fasad, uchastkalar, hududning infratuzilmasi, qavat rejalari, ichki bezatish variantlari hisobga olinadi. Yukni loyihalash amalga oshiriladi, material iste’moli, energiya samaradorligi aniqlanadi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;

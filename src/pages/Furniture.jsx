import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { axiosT } from "../services/api/axios";
import { ToastContainer, toast } from "react-toastify";
import { Collapse, Divider } from "antd";
import ok1 from "../assets/ok1.svg";
import ok2 from "../assets/ok2.svg";
import ok3 from "../assets/ok3.svg";
import ok4 from "../assets/ok4.svg";
import ok5 from "../assets/ok5.svg";
import ok6 from "../assets/ok6.svg";
import ok7 from "../assets/ok7.svg";
import ok8 from "../assets/ok8.svg";
import ok9 from "../assets/ok9.svg";
import ok10 from "../assets/ok10.svg";
import ch4 from "../assets/ch4.jpg";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/formatPrise";
import "./furniture.css";
import { moneyContext } from "../services/providers/money";
const Furniture = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const {money} = useContext(moneyContext);
  useEffect(() => {
    axiosT
      .get(`/admin/getCategoryBy/${window.location.pathname.split("/")[2]}`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="container mx-auto">
        <div className="min-h-[90dvh] px-6 lg:px-32 mx-auto text-black">
          <h1 className="common_title">{data.categoryName}</h1>
          <div className="furniture_wrap">
            <div className="w-full">
              <img className="w-full rounded-2xl" src={data.categoryImage} alt="" />
            </div>
            <Divider />
            <div className="category_info_wrap">
              <div className="category_info_content">
                <div className="">
                  <p>Obyektni tugatish sanasi</p>
                  <h3>{data.time}</h3>
                </div>
                <img src={ok1} alt="" />
              </div>
              <div className="category_info_content">
                <div className="">
                  <p>Xonadonlar soni</p>
                  <h3>{data.kvartiralar_soni}</h3>
                </div>
                <img src={ok2} alt="" />
              </div>
              <div className="category_info_content">
                <div className="">
                  <p>Qavatlar soni</p>
                  <h3>{data.qavatlar_soni}</h3>
                </div>
                <img src={ok3} alt="" />
              </div>
              <div className="category_info_content">
                <div className="">
                  <p>Uyning balandligi</p>
                  <h3>{data.uyning_balandligi}</h3>
                </div>
                <img src={ok4} alt="" />
              </div>
              <div className="category_info_content">
                <div className="">
                  <p>To'lov muddati</p>
                  <h3>{data.bulib_tolash} oy gacha</h3>
                </div>
                <img src={ok5} alt="" />
              </div>
              <div className="category_info_content">
                <div className="">
                  <p>Uy turi</p>
                  <h3>{data.uy_tipi}</h3>
                </div>
                <img src={ok6} alt="" />
              </div>
              <div className="category_info_content">
                <div className="">
                  <p>Avtoturargoh</p>
                  <h3>{data.parkovka}</h3>
                </div>
                <img src={ok7} alt="" />
              </div>
              <div className="category_info_content">
                <div className="">
                  <p>Turar-joy sinfi</p>
                  <h3>{data.klass}</h3>
                </div>
                <img src={ok8} alt="" />
              </div>
              <div className="category_info_content">
                <div className="">
                  <p>Balkon</p>
                  <h3>{data.balkon}</h3>
                </div>
                <img src={ok1} alt="" />
              </div>
              <div className="category_info_content">
                <div className="">
                  <p>Isitish tizimi</p>
                  <h3>{data.isitish_tizimi}</h3>
                </div>
                <img src={ok9} alt="" />
              </div>
              <div className="category_info_content">
                <div className="">
                  <p>Hudud</p>
                  <h3>{data.territoriya}</h3>
                </div>
                <img src={ok10} alt="" />
              </div>
            </div>
            <Divider />
            <div className="my-[50px]">
              <img className="rounded-2xl" src={ch4} alt="" />
            </div>
            <Divider />
            <div className="category_info_wrap">
              {data?.FlatItems?.map((item) => {
                return (
                  <div
                    onClick={() => {navigate(`/home/${item.id}`)}}
                    key={item.id}
                    className="category_info_content cursor-pointer"
                  >
                    <div className="">
                      <p>{item.xonasi} xonali uylar</p>
                      {
                        JSON.parse(localStorage.getItem("money")) === "UZS" ? <h3>{formatPrice(item.narx)} UZS dan boshlab</h3> : <h3>{formatPrice(Math.ceil(item.narx / 12600))} USD dan boshlab</h3>
                      }
                      
                    </div>
                    <img src={ok8} alt="" />
                  </div>
                );
              })}
            </div>
            <Divider />
            <div
              className="mt-[50px] mb-[100px]"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <a
                href="https://yandex.uz/maps/org/mezhdunarodny_aeroport_tashkenta_imeni_islama_karimova/1112637424/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: 12,
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  height: "450px",
                }}
              >
                Международный аэропорт Ташкента имени Ислама Каримова
              </a>
              <a
                href="https://yandex.uz/maps/10335/tashkent/category/airport/184108111/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: 12,
                  position: "absolute",
                  top: 14,
                }}
              >
                Аэропорт в Ташкенте
              </a>
              <iframe
                src="https://yandex.uz/map-widget/v1/?ll=69.299039%2C41.251737&mode=poi&poi%5Bpoint%5D=69.267198%2C41.261839&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1112637424&z=12.4"
                width="100%"
                height={450}
                frameBorder={1}
                allowFullScreen="true"
                style={{ position: "relative" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Furniture;

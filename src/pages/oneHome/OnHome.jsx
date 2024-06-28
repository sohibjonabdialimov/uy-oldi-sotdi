import React, { useContext, useEffect, useState } from "react";
import "./oneHome.css";
import { axiosT } from "../../services/api/axios";
import { formatPrice } from "../../utils/formatPrise";
import ch3 from "../../assets/ch3.jpg"
import { moneyContext } from "../../services/providers/money";
const OnHome = () => {
  const [data, setData] = useState([]);
  const {money} = useContext(moneyContext);
  useEffect(() => {
    axiosT
      .get(`/admin/getFlatItemBy/${window.location.pathname.split("/")[2]}`)
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
      <div className="container mx-auto mt-[140px]">
        <div className="min-h-[90dvh] px-6 lg:px-32 mx-auto text-black">
          <div className="home_wrap">
            {data?.children?.length ? data?.children?.map((item) => {
              return (
                <div key={item.id} className="home_content">
                  <div className="home_img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="home_desc">
                    <h2>{data.xonasi} xonali uylar</h2>
                    {
                      money === "UZS" ? <h3>{formatPrice(item.narxi)} UZS <span>dan boshlab</span></h3> : <h3>{formatPrice(Math.ceil(item.narxi / 12600))} UZD <span>dan boshlab</span></h3>
                    }
                    
                    <h4>Uyning qavati: <span>{item.qavat}-qavatda</span></h4>
                    <p>Maydoni: <span>{item.size} m<sup>2</sup></span></p>
                  </div>
                </div>
              );
            }) : <h2 className="non_home">Hozircha bu yerda uylar mavjud emas</h2>}
          </div>
          <div className="mb-[80px]">
            <img src={ch3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OnHome;

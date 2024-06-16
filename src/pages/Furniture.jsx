import React from "react";
import { useEffect, useState } from "react";
import { axiosT } from "../services/api/axios";
import "./pages.scss";
import { ToastContainer, toast } from "react-toastify";
import { formatPrice } from "../utils/formatPrise";
const Furniture = () => {
  const [data, setData] = useState([]);
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
      <div className="container">
        <div className="min-h-[90dvh] px-6 lg:px-32 mx-auto text-black">
          <h1 className="common_title">{data.categoryName}</h1>
          <div className="furniture_wrap">
            {data.FlatItems?.length ? (
              data.FlatItems.map((item) => {
                return (
                  <div key={item.id} className="card1">
                    <div className="card-img-container">
                      <div className="card-img">
                        <img src={item.img} alt="" />
                      </div>
                    </div>
                    <div className="card-body border-2 border-b-slate-300">
                      <p>
                        <b className="font-bold text-xl">{item.name}</b>
                        {item.description}
                      </p>
                      <p className="font-bold text_prise">
                        {formatPrice(item.price)} so'm
                      </p>
                      <button
                        onClick={() => orderFunc(item.id)}
                        className="border p-2 text-slate-900 text-center rounded-md mb-2"
                      >
                        Buyurtma berish
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1 className="w-full text-2xl">
                Kategoriyaga mahsulot qo'shilmagan
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Furniture;

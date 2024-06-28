import React, { useEffect, useState } from "react";
import { axiosT } from "../services/api/axios";
import "./main.css";
import { formatPrice } from "../utils/formatPrise";
import { useNavigate } from "react-router-dom";
import metro from "../assets/metro.png";
import { Form, Input, Modal } from "antd";
import { Controller, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import modal from "../assets/modal.svg";
const CategorySlider = () => {
  const navigate = useNavigate();
  const [watch, setWatch] = useState(false);
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    control,
    getValues,
    reset: BranchReset,
    formState: { errors },
  } = useForm();

  const handleOk = () => {
    submitHandler();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  function orderFunc(id) {
    setId(id);
    setIsModalOpen(true);
  }
  const submitHandler = () => {
    const data = getValues().ORDER;
    data.user_id = JSON.parse(localStorage.getItem("user_id")) || "";
    data.flatCategory_id = id;
    console.log(data);
    axiosT
      .post("/user/addMessage", data)
      .then((response) => {
        console.log(response);
        toast.info("Xodimlarimiz siz bilan tez orada bog'lanadi", {
          position: "top-right",
        });
        BranchReset();
        setIsModalOpen(false);
      })
      .catch((err) => {
        if (err.response.status == 400) {
          console.log(err);
          toast.error("Buyurtma berishdan oldin ro'yxatdan o'ting", {
            position: "top-right",
          });
        } else {
          toast.error("Buyurtmada xatolik yuz berdi", {
            position: "top-right",
          });
        }
      });
  };
  function fetchProducts() {
    axiosT.get("/admin/getAllCategory").then((response) => {
      console.log(response.data.data);
      setData(response.data.data);
    });
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="p-8 categorySlider mt-20">
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
      <h1 className="common_subtitle">Ommabop uylar</h1>
      <div className="mainbod">
        {data.map((item, index) => {
          return (
            index < 4 && (
              <div key={item.id} className="box">
                <div className="image">
                  <img src={item.categoryImage} alt="" />
                </div>
                <div className="wrap">
                  <div className="content">
                    <h3>{item.categoryName}</h3>
                    <p className="item_location">{item.location}</p>
                    <div className="metro">
                      <img src={metro} alt="" />
                      <p>
                        {item.metro}, {item.time}
                      </p>
                    </div>
                    <div className="flex gap-4 justify-around">
                      <div className="content_info">
                        <p>
                          Qavatlar soni: <span>{item.qavatlar_soni} ta</span>
                        </p>
                        <p>
                          Bo'lib to'lash: <span>{item.bulib_tolash} oy</span>
                        </p>
                      </div>
                      <div className="content_info">
                        <p>
                          Uyning turi: <span>{item.klass}</span>
                        </p>
                        <p>
                          Uylar soni: <span>{item.qavatlar_soni} ta</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="wrap2container">
                    <div className="wrap2">
                      <div className="ratings">
                        <p className="exist_home">
                          Mavjud uylar soni: {item.flatItemCount}
                        </p>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i> 28 ko'rish
                      </div>
                      <div
                        onClick={() => {
                          navigate(`/category/${item.id}`);
                        }}
                        className="conditions cursor-pointer"
                      >
                        <button>Batafsil</button>
                      </div>
                    </div>
                    <div className="btn_wrap">
                      <button
                        onClick={() => {
                          orderFunc(item.id);
                        }}
                      >
                        Qo'ng'iroq qiling
                      </button>
                      {watch === item.id ? (
                        <button>{item.telefon}</button>
                      ) : (
                        <button
                          onClick={() => {
                            setWatch(item.id);
                          }}
                        >
                          Raqamni ko'rmoq
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      <div className="flex justify-center items-center mx-auto ">
        <button
          onClick={() => {
            navigate("/category");
          }}
          className="relative inline-flex items-center text-lg justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium text-custom_sub_color rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Ko'proq ko'rish
          </span>
        </button>
      </div>
      <Modal
        okText="Yuborish"
        cancelText="Bekor qilish"
        title="Biz sizga qo'ng'iroq qilishimiz uchun quyidagi ma'lumotlarni to'ldiring"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex gap-2 items-center">
          <Form
            layout="vertical"
            className="mb-10 sm:w-[500px] w-[100%] mx-auto"
            onSubmitCapture={(e) => {
              e.preventDefault();
              submitHandler();
            }}
          >
            <div className="grid grid-cols-1">
              <Form.Item className="font-semibold" label="Ism-familiya">
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="ORDER.ism"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          placeholder="Alisher Qodirov"
                          className="w-full p-3 rounded-[10px]"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item className="font-semibold" label="Telefon raqam">
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="ORDER.telefon"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          type="number"
                          placeholder="+998976367574"
                          className="w-full p-3 rounded-[10px]"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
            </div>
          </Form>
          <div>
            <img src={modal} alt="" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CategorySlider;

// <div className="dashboar_categor_wrap">
//   {data.map((item) => {
//     return (
//       <div
//         onClick={() => {
//           navigate(`/furnitures/${item.uuid}`);
//         }}
//         key={item.id}
//       >
//           <div className="autoslider_img">
//             <img
//               className="w-[100%] rounded-2xl"
//               src={item.categoryImage}
//               alt=""
//             />
//             <div></div>
//           </div>
//           <div className="autoslider_content">
//             <h3>{item.name}</h3>
//             <div>
//               <p>{item.categoryName}</p>
//             </div>
//           </div>
//         </div>
//     );
//   })}
// </div>

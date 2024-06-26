import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosT } from "../services/api/axios";
import "./pages.scss";
import "./index.css";
import "./main.css";
import metro from "../assets/metro.png";
import { Form, Input, Modal } from "antd";
import { Controller, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import modal from "../assets/modal.svg";

const MainCategory = () => {
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
        <div className="min-h-[90dvh] px-6 lg:px-0">
          <h1 className="common_title">Qurilish materiallari kategoriyalari</h1>

          <div className="mainbod">
            {data.map((item) => {
              return (
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
              );
            })}
          </div>
        </div>
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
                          placeholder="Abdurahmonov Otabek"
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
                          placeholder="+998977775576"
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
    </>
  );
};

export default MainCategory;

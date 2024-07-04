import  { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { axiosT } from "../services/api/axios";
import { toast, ToastContainer } from "react-toastify";
import { authContext } from "../services/providers/authContext";
import "./login.css";
const LoginPage = ({ type }) => {
  const {
    control,
    getValues,
  } = useForm();
  const { setAuth } = useContext(authContext);
  const navigate = useNavigate();
  const submitHandler = () => {
    const data = getValues().LOGIN;
    console.log(type);
    if (type !== "admin") {
      axiosT
        .post("/user/signin", data)
        .then((response) => {
          localStorage.setItem("user_data", JSON.stringify(response.data.data));
          localStorage.setItem(
            "user_id",
            JSON.stringify(response.data.data.user_id)
          );
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Email yoki parol xato", {
            position: "top-right",
          });
        });
    } else {
      axiosT
        .post("/admin/signin", data)
        .then((response) => {
          console.log(response);
          navigate("/admin");
          localStorage.setItem("admin", JSON.stringify(response.data.data));
          setAuth(JSON.stringify(response.data.data));
        })
        .catch((err) => {
          console.log(err);
          toast.error("Email yoki parol xato", {
            position: "top-right",
          });
        });
    }
  };
  return (
    <div className="login_wrap">
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
      <div className="login_content">
        <div className="image">
          <h1>
            <span>E-ko'chmas mulk</span> ga xush kelibsiz!!!
          </h1>
        </div>
        <div className="content rounded-md px-2 sm-px-a">
          <h1>Kirish</h1>
          <Form
            layout="vertical"
            className="mb-10 sm:w-[350px] w-[100%] mx-auto"
            onSubmitCapture={(e) => {
              e.preventDefault();
              submitHandler();
            }}
          >
            <div className="grid  grid-cols-1 ">
              <Form.Item className="font-semibold" label="Email">
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="LOGIN.email"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          type="email"
                          placeholder="otabek@gmail.com"
                          className="w-full sm:p-5 p-2 rounded-[10px]"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item className="font-semibold" label="Parol">
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="LOGIN.password"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          type="password"
                          placeholder="********"
                          className="w-full sm:p-5 p-2 rounded-[10px]"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <button
                type="submit"
                className="w-full sm:py-[0.4rem] py-[0rem] rounded-lg font-semibold bg-custom_color hover:bg-custom_color_hover text-white cursor-pointer transition-opacity"
              >
                Kirish
              </button>
            </div>
          </Form>
          {type !== "admin" ? (
            <p className="sm:mt-10 mt-0 text-center text-sm text-gray-500">
              <Link
                to={"/register"}
                className="font-semibold leading-6 text-custom_color hover:text-custom_color_hover"
              >
                Akkauntingiz yo'qmi? Ro'yxatdan o'ting
              </Link>
            </p>
          ) : (
            <p className="sm:mt-10 mt-0 text-center text-sm text-gray-500">
              <Link
                to={"/"}
                className="font-semibold leading-6 text-custom_color hover:text-custom_color_hover"
              >
                Bosh sahifaga o'tish
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

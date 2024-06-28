import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { useRef } from "react";
import { axiosT } from "../../services/api/axios";
import { ToastContainer, toast } from "react-toastify";

const New = ({ title }) => {
  const idRef = useRef(null);
  const xonaRef = useRef(null);
  const narxRef = useRef(null);

  const handleAdd = async (e) => {
    e.preventDefault();

    const data = {
      flatCategory_id: idRef.current.value,
      xonasi: xonaRef.current.value,
      narx: narxRef.current.value,
    };
    console.log(
      idRef.current.value,
      xonaRef.current.value,
      narxRef.current.value
    );
    axiosT
      .post("/admin/createFlatItem", data)
      .then((res) => {
        console.log(res.data);
        toast.info("Mahsulot yaratildi", {
          position: "top-right",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Xatolik yuz berdi", {
          position: "top-right",
        });
      });
  };

  return (
    <div className="new1 bg-white">
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
      <Sidebar />
      <div className="newContainer">
        <div className="top">
          <h1 className="pt-5 pl-5">{title}</h1>
        </div>
        <div className="bottom1">
          <div className="right1">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label>Kategoriya ID si</label>
                <input type="text" ref={idRef} placeholder="id" />
              </div>
              <div className="formInput">
                <label>Uyning xonalari soni</label>
                <input type="number" ref={xonaRef} placeholder="2" />
              </div>
              <div className="formInput">
                <label>Uyning narxi: </label>
                <input type="number" ref={narxRef} placeholder="110000000" />
              </div>
              <button type="submit">Qo'shish</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

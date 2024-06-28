import "./child.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useRef, useState } from "react";
import { axiosT } from "../../services/api/axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const NewChild = ({ title }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const imgRef = useRef(null);
  const idRef = useRef(null);
  const qavatRef = useRef(null);
  const narxRef = useRef(null);
  const sizeRef = useRef(null);

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("flatItem_id", idRef.current.value);
    formData.append("img", imgRef.current.files[0]);
    formData.append("qavat", qavatRef.current.value);
    formData.append("size", sizeRef.current.value);
    formData.append("narxi", narxRef.current.value);
    axiosT
      .post("/admin/createFlatChild", formData)
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
                <div className="img">
                  <div className="left1">
                    <img
                      src={
                        file
                          ? URL.createObjectURL(file)
                          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <label htmlFor="file">
                    Rasm: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    ref={imgRef}
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
              </div>

              <div className="formInput">
                <label>Xona bo'yicha ID si:</label>
                <input type="text" ref={idRef} placeholder="id" />
              </div>
              <div className="formInput">
                <label>Uyning narxi: </label>
                <input type="number" ref={narxRef} placeholder="120000000" />
              </div>
              <div className="formInput">
                <label>Uyning o'chami: </label>
                <input type="text" ref={sizeRef} placeholder="62.4" />
              </div>
              <div className="formInput">
                <label>Uyning joylashgan qavati: </label>
                <input type="number" ref={qavatRef} placeholder="5" />
              </div>
              <button type="submit">Qo'shish</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewChild;

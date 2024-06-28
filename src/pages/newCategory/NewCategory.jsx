import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useRef, useState } from "react";
import { axiosT } from "../../services/api/axios";
import { ToastContainer, toast } from "react-toastify";

const NewCategory = ({ title }) => {
  const [file, setFile] = useState("");
  const imgRef = useRef(null);
  const nameRef = useRef(null);
  const locationRef = useRef(null);
  const metroRef = useRef(null);
  const timeRef = useRef(null);
  const kvartiralar_soniRef = useRef(null);
  const qavatlar_soniRef = useRef(null);
  const uyning_balandligiRef = useRef(null);
  const bulib_tolashRef = useRef(null);
  const uy_tipiRef = useRef(null);
  const parkovkaRef = useRef(null);
  const klassRef = useRef(null);
  const balkonRef = useRef(null);
  const isitish_tizimiRef = useRef(null);
  const territoriyaRef = useRef(null);
  const telefonRef = useRef(null);

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("categoryName", "Nodir buildings");
    formData.append("categoryImage", imgRef?.current?.files[0]);
    formData.append("location", locationRef?.current?.value);
    formData.append("metro", metroRef?.current?.value);
    formData.append("time", timeRef?.current?.value);
    formData.append("kvartiralar_soni", kvartiralar_soniRef?.current?.value);
    formData.append("qavatlar_soni", qavatlar_soniRef?.current?.value);
    formData.append("uyning_balandligi", uyning_balandligiRef?.current?.value);
    formData.append("bulib_tolash", bulib_tolashRef?.current?.value);
    formData.append("uy_tipi", uy_tipiRef?.current?.value);
    formData.append("parkovka", parkovkaRef?.current?.value);
    formData.append("klass", klassRef?.current?.value);
    formData.append("balkon", balkonRef?.current?.value);
    formData.append("isitish_tizimi", isitish_tizimiRef?.current?.value);
    formData.append("territoriya", territoriyaRef?.current?.value);
    formData.append("telefon", telefonRef?.current?.value);
    console.log(formData);
    axiosT
      .post("/admin/createCategory", formData)
      .then((res) => {
        console.log(res.data);
        toast.info("Kategoriya yaratildi", {
          position: "top-right",
        });
        setFile("");
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
                    Ko'p qavatli uyning rasmi <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    ref={imgRef}
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
              <div className="formInput">
                <label>Ko'p qavatli uy nomi</label>
                <input
                  type="text"
                  placeholder="Murad buildings"
                  ref={nameRef}
                />
              </div>
              <div className="formInput">
                <label>Manzili</label>
                <input
                  type="text"
                  placeholder="Toshkent shahar, Yunusobod tumani, 19-kvartal"
                  ref={locationRef}
                />
              </div>
              <div className="formInput">
                <label>Yaqin metro</label>
                <input
                  type="text"
                  placeholder="Shahriston metro, 15 min"
                  ref={metroRef}
                />
              </div>
              <div className="formInput">
                <label>Qachon qurilib tugatilishi</label>
                <input
                  type="text"
                  placeholder="2023-yil, mart oyida"
                  ref={timeRef}
                />
              </div>
              <div className="formInput">
                <label>Umumiy xonadonlar soni</label>
                <input
                  type="text"
                  placeholder="Har bir qavatda 4 ta xonadon"
                  ref={kvartiralar_soniRef}
                />
              </div>
              <div className="formInput">
                <label>Qavatlar soni</label>
                <input
                  type="number"
                  placeholder="16"
                  ref={qavatlar_soniRef}
                />
              </div>
              <div className="formInput">
                <label>Har bir uyning balandligi</label>
                <input
                  type="text"
                  placeholder="3.2 metr"
                  ref={uyning_balandligiRef}
                />
              </div>
              <div className="formInput">
                <label>Oyma-oy bo'lib to'lash</label>
                <input
                  type="number"
                  placeholder="oy hisobida kiritiladi"
                  ref={bulib_tolashRef}
                />
              </div>
              <div className="formInput">
                <label>Xonadonlarning darajasi</label>
                <input
                  type="text"
                  placeholder="biznes, premium"
                  ref={klassRef}
                />
              </div>
              <div className="formInput">
                <label>Parkovka</label>
                <input
                  type="text"
                  placeholder="ochiq, yopiq"
                  ref={parkovkaRef}
                />
              </div>
              <div className="formInput">
                <label>Uyning turi</label>
                <input
                  type="text"
                  placeholder="Monolit tarzda"
                  ref={uy_tipiRef}
                />
              </div>
              <div className="formInput">
                <label>Balkon</label>
                <input
                  type="text"
                  placeholder="bor yoki yo'q"
                  ref={balkonRef}
                />
              </div>
              <div className="formInput">
                <label>Isitish tizimi</label>
                <input
                  type="text"
                  placeholder="Markaziy yoki ikki palalli"
                  ref={isitish_tizimiRef}
                />
              </div>
              <div className="formInput">
                <label>Hudud himoyasi</label>
                <input
                  type="text"
                  placeholder="Himoyalangan, himoyalanmagan"
                  ref={territoriyaRef}
                />
              </div>
              <div className="formInput">
                <label>Telefon raqami</label>
                <input
                  type="text"
                  placeholder="+998977606060"
                  ref={telefonRef}
                />
              </div>
              <button type="submit">Yaratish</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCategory;

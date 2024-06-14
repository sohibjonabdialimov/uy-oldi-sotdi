import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { axiosT } from "../services/api/axios";
const Messages = () => {
  const [data, setData] = useState([]);

  function fetchProducts() {
    axiosT.get("/admin/getAllCommet").then((response) => {
      setData(response.data.commets);
      console.log(response.data);
    });
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="listContainer">
          <div className="listTitle">Foydalanuvchilarning fikrlari</div>
          <div className="wrap">
            {data.map((item, index) => {
              return (
                <div key={item.uuid} className="wrap_item">
                  <div className="index"><b>{index + 1}.</b></div>
                  <div className="info">
                    <h2><b>Ism:</b> {item.fullName}</h2>
                    <p><b>Email:</b> {item.email}</p>
                    <p><b>Xabar:</b> {item.commets}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;

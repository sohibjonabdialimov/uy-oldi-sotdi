import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosT } from "../../services/api/axios";
import { toast, ToastContainer } from "react-toastify";

const Datatable = () => {
  const [data, setData] = useState([]);

  function fetchProducts() {
    axiosT
      .get("/getAdmins")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    axiosT.delete(`/adminDelete/${id}`).then((response) => {
      toast.info("Admin o'chirildi", {
        position: "top-right",
      });
      fetchProducts();
    }).catch((err) => {
      toast.error("Admin o'chirishda xatolik yuz berdi", {
        position: "top-right",
      });
    });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
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
      <div className="datatableTitle">
        Adminlar ro'yxati
        <Link to="/admin/users/add" className="link">
          Admin qo'shish
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns?.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datatable;

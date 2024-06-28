export const userColumns = [
  { field: "id", headerName: "ID", width: 380 },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 250,
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },
  {
    field: "phoneNumber",
    headerName: "Phone number",
    width: 220,
  },
];
export const Product = [
  {
    field: "id",
    headerName: "ID",
    width: 340,
  },
  {
    field: "narx",
    headerName: "Narxi",
    width: 100,
  },
  {
    field: "xonasi",
    headerName: "Xonalar",
    width: 110,
  },
  {
    field: "planirovka",
    headerName: "Mavjud uylar",
    width: 130,
  },
  {
    field: "flatCategory_id",
    headerName: "Kategoriya ID si",
    width: 340,
  }];
export const Category = [
  { field: "id", headerName: "ID", width: 325 },
  {
    field: "categoryName",
    headerName: "Kategoriya nomi",
    width: 220,
    renderCell: (params) => {
      return (
        <div key={params.row.id} className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.categoryImage}
            alt="avatar"
          />
          {params.row.categoryName}
        </div>
      );
    },
  },
  {
    field: "flatItemCount",
    headerName: "Uylar soni",
    width: 90,
  },
  {
    field: "qavatlar_soni",
    headerName: "Qavatlar soni",
    width: 120,
  },
  {
    field: "telefon",
    headerName: "Telefon",
    width: 150,
  },
  {
    field: "location",
    headerName: "Manzili",
    width: 300,
  },
];
export const Child = [
  { field: "id", headerName: "ID", width: 325 },
  {
    field: "narxi",
    headerName: "Uyning narxi",
    width: 220,
    renderCell: (params) => {
      return (
        <div key={params.row.id} className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img}
            alt="avatar"
          />
          {params.row.narxi}
        </div>
      );
    },
  },
  {
    field: "qavat",
    headerName: "Uyning qavati",
    width: 120,
  },
  {
    field: "size",
    headerName: "Uyning o'lchami",
    width: 150,
  },
  {
    field: "flatItem_id",
    headerName: "Xona bo'yicha ID",
    width: 340,
  },
];

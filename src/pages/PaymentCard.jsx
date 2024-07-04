import { toast, ToastContainer } from "react-toastify";

const PaymentCard = () => {
  const handlePayment = (e) => {
    e.preventDefault();
    console.dir(e.target[4].value);
    if(e.target[4].value == 0){
      toast.error("To'lov so'mmasi 0 bo'lmasligi kerak", {
        position: "top-right",
      });
      return 0;
    }
    toast.info("To'lov muvaffaqqiyatli amalga oshirildi", {
      position: "top-right",
    });
  }
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
      <div className="max-w-sm mx-auto mt-40 bg-white rounded-md shadow-md overflow-hidden my-24">
        <div className="px-6 py-4 bg-gray-900 text-white">
          <h1 className="text-lg font-bold">To&apos;lov qilish</h1>
        </div>
        <form onSubmit={handlePayment} className="px-6 py-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="card-number"
            >
              Karta raqami
            </label>
            <input
              required
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="card-number"
              type="text"
              placeholder="**** **** **** ****"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="expiration-date"
            >
              Yaroqlilik muddati
            </label>
            <input
              required
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expiration-date"
              type="text"
              placeholder="MM/YY"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cvv">
              CVV
            </label>
            <input
              required
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cvv"
              type="text"
              placeholder="***"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cvv">
              Karta egasining ismi
            </label>
            <input
              required
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Abdurahmanov Otabek"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cvv">
              To'lov summasi (so&apos;mda)
            </label>
            <input
              required
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="so'mda kiriting"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            To'lash
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentCard;

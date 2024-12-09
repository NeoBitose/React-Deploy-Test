import React from "react";
import image from "../../../assets/Images/PaymentSuccess.png";

const EmptyOrder = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <div className="w-full">
        <header className="grid min-h-full place-items-center bg-white px-4 py-16 sm:py-24 md:py-32">
          <div className="text-center w-full max-w-[600px] mx-auto">
            <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] mx-auto pt-4">
              <img
                src={image}
                alt="Banner"
                className="w-full h-full rounded-t-lg"
                style={{ zIndex: 2 }}
              />
            </div>
            <p className="text-base font-semibold text-purple-600 mt-6">
            Oops! Riwayat pesanan kosong!
            </p>
            <p className="font-bold text-pretty text-lg sm:text-xl">
            Anda belum melakukan pemesanan penerbangan
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <button className="w-full max-w-[347px] px-6 py-3 rounded-[12px] bg-[#7126B5] text-sm font-semibold text-white shadow-sm hover:bg-[#D0B7E6] transition focus:outline-none">
                Cari Penerbangan
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default EmptyOrder;

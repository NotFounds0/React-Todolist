import React from "react";
import Buttons from "./Buttons";
import { Trash2 } from "lucide-react";

const Cards = () => {
  return (
    <div className="w-full p-4 bg-white shadow-md rounded-lg relative">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800">Görev Başlığı</h2>
        <button
          onClick={() => setModal(false)}
          className="bg-[#fc0339] absolute top-2 right-2 px-1 py-1 rounded-full hover:bg-[#ce3d44]"
        >
          <Trash2 color="#FFFFFF" />
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        Bu görev ile ilgili kısa bir açıklama veya içerik.
      </p>
      <div className="flex justify-between items-center">
        <Buttons
          className="text-sm text-green-500 border border-green-500 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white transition-colors"
          text={"Tamamla"}
        />

        <span className="text-xs text-gray-500">
          Oluşturulma Tarihi: <b>12.10.2024</b>
        </span>
      </div>
    </div>
  );
};

export default Cards;

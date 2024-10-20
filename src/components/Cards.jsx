import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import { Trash2 } from "lucide-react";
import Swal from "sweetalert2";

const Cards = () => {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    setFormDataList(storedData);
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Silmek İstediğinize Emin'misiniz?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sil",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Başarılı!", "", "success");
        const updatedList = formDataList.filter((item) => item.id !== id);
        localStorage.setItem("formData", JSON.stringify(updatedList));
        setFormDataList(updatedList);
      }
    });
  };

  const toggleCompletion = (id) => {
    const updatedList = formDataList.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    localStorage.setItem("formData", JSON.stringify(updatedList));
    setFormDataList(updatedList);
  };

  return (
    <>
      {formDataList.length > 0 ? (
        <div className="grid grid-cols-4 gap-10 px-10 py-5">
          {formDataList.map((data) => (
            <div
              key={data.id}
              className={`${
                data.completed
                  ? "w-full flex flex-col h-full px-5 py-2 bg-gray-200 shadow-md rounded-lg relative"
                  : "w-full flex flex-col h-full px-5 py-2 bg-white shadow-md rounded-lg relative"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-gray-800">
                  {data.completed ? (
                    <span className="line-through">{data.title}</span>
                  ) : (
                    <span>{data.title}</span>
                  )}
                </h2>
                <button
                  onClick={() => handleDelete(data.id)}
                  className="bg-[#fc0339] absolute top-2 right-2 px-1 py-1 rounded-full hover:bg-[#ce3d44]"
                >
                  <Trash2 color="#FFFFFF" />
                </button>
              </div>
              <p className="text-gray-600 mb-4">
                {data.completed ? (
                  <span className="line-through">{data.desc}</span>
                ) : (
                  <span>{data.desc}</span>
                )}
              </p>
              <div className="flex justify-between items-end grow">
                <Buttons
                  onClick={() => toggleCompletion(data.id)}
                  className="text-sm text-black border border-green-500 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white transition-colors"
                  text={data.completed ? "Tamamlandı" : "Tamamla"}
                />
                <span className="text-xs text-gray-500">
                  Oluşturulma Tarihi: <b>{data.tarih}</b>
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-red-400 text-white py-2 text-center">
          <span>Hiç Todo Girilmemiş!</span>
        </div>
      )}
    </>
  );
};

export default Cards;

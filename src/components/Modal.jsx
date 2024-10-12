import { CircleX } from "lucide-react";
import Buttons from "./Buttons";
import { useFormik } from "formik";
import Input from "./Input";

const Modal = ({ setModal }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.title) {
        errors.title = "Başlık Alanı Zorunludur.";
      }
      if (!values.desc) {
        errors.desc = "Açıklama Alanı Zorunludur.";
      }
      return errors;
    },
    onSubmit: (values) => {
      try {
        const storedData = JSON.parse(localStorage.getItem("formData")) || [];
        const newEntry = {
          id: Date.now(),
          tarih: new Date().toLocaleDateString("tr-TR", {
            // Türkiye tarih formatı
            day: "numeric",
            month: "numeric",
            year: "numeric",
          }),
          ...values,
        };

        storedData.push(newEntry);
        localStorage.setItem("formData", JSON.stringify(storedData));
        alert("Form başarıyla kaydedildi!");
        setModal(false);
        window.location.reload();
        console.log(values);
      } catch (error) {
        console.error("Veri kaydedilemedi:", error);
      }
    },
  });
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-96 relative">
        <h2 className="text-lg font-bold">Yeni Todo</h2>
        <form onSubmit={formik.handleSubmit}>
          <Input
            id={"title"}
            name={"title"}
            onChange={formik.handleChange}
            value={formik.values.title}
            onBlur={formik.handleBlur}
            placeText={"Title"}
            className={` ${
              formik.touched.title && formik.errors.title
                ? "border-red-500"
                : null
            }`}
          />
          <div>
            {formik.touched.title && formik.errors.title ? (
              <span className="text-red-500">{formik.errors.title}</span>
            ) : null}
          </div>
          <Input
            id={"desc"}
            name={"desc"}
            onChange={formik.handleChange}
            value={formik.values.desc}
            onBlur={formik.handleBlur}
            placeText={"desc"}
            className={` ${
              formik.touched.desc && formik.errors.desc
                ? "border-red-500"
                : null
            }`}
          />
          <div>
            {formik.touched.desc && formik.errors.desc ? (
              <span className="text-red-500">{formik.errors.desc}</span>
            ) : null}
          </div>
          <div className="flex justify-end">
            <Buttons
              type={"submit"}
              text={"Kaydet"}
              className={"mt-5 bg-green-400"}
            />
          </div>
        </form>
        <button
          onClick={() => setModal(false)}
          className="bg-[#fc0339] absolute top-2 right-2 px-2 py-2 rounded-full hover:bg-[#ce3d44]"
        >
          <CircleX color="#FFFFFF" />
        </button>
      </div>
    </div>
  );
};

export default Modal;

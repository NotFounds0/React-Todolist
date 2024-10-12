import { CircleX } from "lucide-react";
import Buttons from "./Buttons";

const Modal = ({ setModal }) => {
    
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-96 relative">
        <h2 className="text-lg font-bold">Yeni Todo</h2>
        <form>
          <div className="flex justify-end">
            <Buttons text={"Kaydet"} className={"mt-5 bg-green-400"} />
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

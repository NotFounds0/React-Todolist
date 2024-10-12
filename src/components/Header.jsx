import Buttons from "./Buttons";

const Header = ({ setModal }) => {
  return (
    <>
      {" "}
      <header className="bg-gray-800 w-full h-[80px] px-10 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">TodoLIST</h1>
        <div>
          <Buttons className={"bg-indigo-500"} onClick={() => setModal(true)} text={"Yeni Todo"} />
        </div>
      </header>
    </>
  );
};

export default Header;

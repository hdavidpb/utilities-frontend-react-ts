import { TbReload } from "react-icons/tb";
import { use } from "react";
import { UtilitiesGridContainer } from "./components/UtilitiesGridContainer";
import { UtilitiesContext } from "./context/UtilitiesContextProvider";

const App = () => {

  const {hasData,isPending,handleGetUtilities} = use(UtilitiesContext)

  return (
    <div className="w-full  flex justify-center items-center min-h-screen bg-indigo-950 text-white">
      {!hasData && (
        <button
          disabled={isPending}
          className={`flex flex-col justify-center items-center gap-1 cursor-pointer`}
          onClick={handleGetUtilities}
        >
          <TbReload size={60}  className={` ${isPending && "animate-spin"}`}/>
          <span className="text-xl">Cargar Facturas</span>
        </button>
      )}
      {hasData && <UtilitiesGridContainer />}
    </div>
  );
};

export default App;

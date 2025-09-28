import { use } from "react";
import { UtilitiesContext } from "../context/UtilitiesContextProvider";
import { UtilitiesCard } from "./UtilitiesCard";

export const UtilitiesGridContainer = () => {
 const {paidTripleA,pendingTripleA,airePaid,airePending,gasesPaid,gasesPending} = use(UtilitiesContext)


  return (
    <div className="grid grid-cols-1 w-full md:w-[1200px] gap-6">
      <UtilitiesCard label="Facturas AIR-E 💡" paidUtilities={airePaid} pendingUtilities={airePending}/>
      {/* AIR-E */}
      <UtilitiesCard label="Facturas AAA 💧" paidUtilities={paidTripleA} pendingUtilities={pendingTripleA}/>
      {/* GASES */}
       <UtilitiesCard label="GASES DEL CARIBE 🪄" paidUtilities={gasesPaid} pendingUtilities={gasesPending}/>
    </div>
  );
};

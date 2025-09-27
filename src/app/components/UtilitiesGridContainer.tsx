import { use } from "react";
import { UtilitiesContext } from "../context/UtilitiesContextProvider";
import { UtilitiesCard } from "./UtilitiesCard";

export const UtilitiesGridContainer = () => {
 const {utilities} = use(UtilitiesContext)

 const paidAire = utilities.aire?.filter((item)=>item.status ==="paid")
 const pendingAire = utilities.aire?.filter((item)=>item.status ==="pending")

 const paidTripleA = utilities.tripleA?.filter((item)=>item.status ==="paid")
 const pendingTripleA = utilities.tripleA?.filter((item)=>item.status ==="pending")
console.log(utilities.tripleA)
  return (
    <div className="grid grid-cols-1 w-full md:w-[1200px] gap-6">
      <UtilitiesCard label="Facturas AIR-E 💡" paidUtilities={paidAire} pendingUtilities={pendingAire}/>
      {/* AIR-E */}
      <UtilitiesCard label="Facturas AAA 💧" paidUtilities={paidTripleA} pendingUtilities={pendingTripleA}/>
    </div>
  );
};

import type { IFormattedUtility } from "../interfaces/utilities.interface"
import { UtilitiesCardSection } from "./UtilitiesCardSection"

interface Props {
    label:string,
    pendingUtilities:IFormattedUtility[],
    paidUtilities:IFormattedUtility[],
}

export const UtilitiesCard = ({label,paidUtilities,pendingUtilities}:Props) => {
  return (
      <div className="w-full flex flex-col justify-start items-center p-4 rounded-md border-b border-white gap-5 ">
          <h2 className="text-2xl">{label}</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 pb-7">
          <UtilitiesCardSection typeLabel="Pendientes" utilityFormatted={pendingUtilities}/>
          <UtilitiesCardSection typeLabel="Pagadas" utilityFormatted={paidUtilities}/>
          </div>
        </div>
  )
}

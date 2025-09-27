import type { IFormattedUtility } from "../interfaces/utilities.interface";
import { FaCheckDouble } from 'react-icons/fa';
interface Props {
    typeLabel: string;
    utilityFormatted:IFormattedUtility[];
}

export const UtilitiesCardSection = ({typeLabel,utilityFormatted}:Props) => {
  return (
      <div className="w-full flex flex-col justify-start items-center">
              <h4>{typeLabel}</h4>
              <ul className="w-full flex flex-col justify-start items-center">
                {utilityFormatted.length === 0 && (
                  <li className="w-full flex flex-col justify-center items-center p-2 mt-8">
                    <FaCheckDouble size={30}/>
                    <span>
                    No hay servicios {typeLabel.toLowerCase()}
                    </span>
                  </li>
                )
                }
                {utilityFormatted?.map((utility)=> (
                <li key={`${utility.date}-${utility.amount}`} className="w-full flex justify-between items-center border-b border-gray-200 p-3">
                  <span className={utility.status === "paid" ? "paid-utility" : "pending-utility"}>
                    {utility.date}
                  </span>
                   <span>{utility.contract}</span>
                  <span>{utility.amount}</span>
                </li>
                ))}
              </ul>
            </div>
  )
}

import { createContext, type PropsWithChildren } from "react"
import { useGetUtilities } from "../hooks/useGetUtilities";
import type { IFormattedUtility } from "../interfaces/utilities.interface";


export interface IUtilitiesContext {
  isPending: boolean;
  airePaid:IFormattedUtility[];
  airePending:IFormattedUtility[];
  gasesPaid:IFormattedUtility[];
  gasesPending:IFormattedUtility[];
  paidTripleA:IFormattedUtility[];
  pendingTripleA:IFormattedUtility[];
  hasData: boolean;
  handleGetUtilities: () => void;
  }


// eslint-disable-next-line react-refresh/only-export-components
export const UtilitiesContext = createContext({} as IUtilitiesContext);

const UtilitiesContextProvider = ({children}:PropsWithChildren) => {

  const {isPending,handleGetUtilities,hasData,airePaid,airePending,gasesPaid,gasesPending,paidTripleA,pendingTripleA} = useGetUtilities()

  return (
    <UtilitiesContext value={{isPending,hasData,airePaid,airePending,gasesPaid,gasesPending,paidTripleA,pendingTripleA,handleGetUtilities}}>
        {children}
    </UtilitiesContext>
  )
}

export default UtilitiesContextProvider
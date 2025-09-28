import { useState, useTransition } from "react";
import type { CommonResponseUtilities } from "../interfaces/utilities.common.response";
import type { IFormattedUtility } from "../interfaces/utilities.interface";
import {
  aireUtilityAdapter,
  gasesDelCaribeAdapter,
  tripleAUtilityAdapter,
} from "../adapters/utilitiesAdaptar";

const API_URL = import.meta.env.VITE_APP_API_URL;

interface Utilities {
  aire: IFormattedUtility[];
  tripleA: IFormattedUtility[];
  gasesUtilities:IFormattedUtility[];
}

export const useGetUtilities = () => {
  const [utilities, setUtilities] = useState<Utilities>({
    tripleA: [],
    aire: [],
    gasesUtilities:[]
  });
  const [isPending, startTransition] = useTransition();

  const handleGetUtilities = () => {
    startTransition(async () => {
      const response = await fetch(`${API_URL}/api/utilities`);
      const data = (await response.json()) as CommonResponseUtilities;

      const formattedAire = aireUtilityAdapter(data.aire);
      const formattedTripleA = tripleAUtilityAdapter(data.tripleA); 
      const gasesUtilities = gasesDelCaribeAdapter(data.gasesDelCaribe)

      setUtilities({ aire: formattedAire, tripleA: formattedTripleA,gasesUtilities });
    });
  };

  return {
    isPending,
    hasData: utilities.tripleA?.length > 0 || utilities.aire?.length > 0,

    pendingTripleA : utilities.tripleA?.filter((item)=>item.status ==="pending"),
    paidTripleA : utilities.tripleA?.filter((item)=>item.status ==="paid"),

    airePending : utilities.aire?.filter((item)=>item.status ==="pending"),
    airePaid : utilities.aire?.filter((item)=>item.status ==="paid"),

    gasesPending : utilities.gasesUtilities?.filter((item)=>item.status ==="pending"),
    gasesPaid : utilities.gasesUtilities?.filter((item)=>item.status ==="paid"),

    handleGetUtilities,
  };
};



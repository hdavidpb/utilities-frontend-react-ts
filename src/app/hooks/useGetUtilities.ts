import { useState, useTransition } from "react";
import type { CommonResponseUtilities } from "../interfaces/utilities.common.response";
import type { IFormattedUtility } from "../interfaces/utilities.interface";
import {
  aireUtilityAdapter,
  tripleAUtilityAdapter,
} from "../adapters/utilitiesAdaptar";

const API_URL = import.meta.env.VITE_APP_API_URL;

interface Utilities {
  aire: IFormattedUtility[];
  tripleA: IFormattedUtility[];
}

export const useGetUtilities = () => {
  const [utilities, setUtilities] = useState<Utilities>({
    tripleA: [],
    aire: [],
  });
  const [isPending, startTransition] = useTransition();

  const handleGetUtilities = () => {
    startTransition(async () => {
      const response = await fetch(`${API_URL}/api/utilities`);
      const data = (await response.json()) as CommonResponseUtilities;

      const formattedAire = aireUtilityAdapter(data.aire);
      const formattedTripleA = tripleAUtilityAdapter(data.tripleA); // Implement tripleA adapter when needed

      setUtilities({ aire: formattedAire, tripleA: formattedTripleA });
    });
  };

  return {
    isPending,
    utilities,
    hasData: utilities.tripleA?.length > 0 || utilities.aire?.length > 0,

    handleGetUtilities,
  };
};


// const simulationFetch = new Promise<unknown>((resolve) => {
//   setTimeout(() => {
//     resolve(mokData)
//   }, 5000);
// });
import type { IFormattedUtility, IGasesUtility } from "../interfaces/utilities.interface"

export const aireUtilityAdapter = (data: string[][]):IFormattedUtility[] => {

    const formattedData:IFormattedUtility[] = data.map((item)=> (
        {
            date: item[4],
            amount:item[5],
            status: aireStatusType(item[0]),
            contract: contractAireType(item[2])
        }
    ))

  return formattedData
}

export const tripleAUtilityAdapter = (data: string[][]):IFormattedUtility[] => {

    const formattedData:IFormattedUtility[] = data.map((item)=> ({
        date: item[3],
        amount:item[5],
        status: tripleAStatusType(item[4]) ,
        contract: contractTripleAtType(item[1])
      
    }))

    return formattedData

}

export const gasesDelCaribeAdapter = (data: IGasesUtility):IFormattedUtility[] => {

    const formattedData:IFormattedUtility[] = [
        {
            amount: data.total,
            contract: data.contract,
            date: data.date,
            status: data.status.toLowerCase() === "pagado" ? "paid" : "pending"
        }] 
    
    
    return formattedData


}




const aireStatusType  = (status:string) => status.toLowerCase() === "documento pagado" ? "paid" : "pending";
const tripleAStatusType  = (status:string) => status.toLowerCase() === "por pagar" ?  "pending" : "paid";

const contractAireType = (contract:string) => contract.toLowerCase() === "1343983" ? "Apartamento" : "Casa";
const contractTripleAtType = (contract:string) => contract.toLowerCase() === "1076129" ? "Apartamento" : "Casa";

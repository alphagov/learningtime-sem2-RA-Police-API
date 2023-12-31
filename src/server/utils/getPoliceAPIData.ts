import { groupBy } from './groupByObjectKey'
import { PoliceAPIResponse } from './types/policeAPI'

export const getPoliceAPIData = async (
    [lat, long]: number[],
    month: string
): Promise<Record<string, PoliceAPIResponse[]> | string> => {
    const url = `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${long}&date=${month}`
    const data = await fetch(url, {
        method: 'GET'
    })

    const parsedData: PoliceAPIResponse[] = await data.json()
    if (parsedData.length === 0) {
        // The api does not validate long/lat input and instead returns an empty [] when given invalid long/lat
        return 'No Data returned for specified area'
    }
    const groupedDataByCrimeType = groupBy(parsedData, (e) => e.category)
    return groupedDataByCrimeType
}

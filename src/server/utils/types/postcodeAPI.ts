export interface PostcodeAPIResponse {
    status: number
    result: {
        postcode: string
        quality: number
        eastings: number
        northings: number
        country: string
        nhs_ha: string
        longitude: number
        latitude: number
        european_electoral_region: string
        primary_care_trust: string
        region: string
        lsoa: string
        msoa: string
        incode: string
        outcode: string
        parliamentary_constituency: string
        admin_district: string
        parish: string
        admin_county: string | null
        date_of_introduction: string
        admin_ward: string
        ced: string | null
        ccg: string
        nuts: string
        pfa: string
        codes: {
            admin_district: string
            admin_county: string
            admin_ward: string
            parish: string
            parliamentary_constituency: string
            ccg: string
            ccg_id: string
            ced: string
            nuts: string
            lsoa: string
            msoa: string
            lau2: string
            pfa: string
        }
    }
}

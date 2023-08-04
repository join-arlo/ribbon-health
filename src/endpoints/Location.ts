import { RibbonEndpoint } from 'src/ribbon'
import { Insurance } from 'src/endpoints/Insurance'
import { RibbonSearchResponseParameterized, RibbonSearchRequest } from 'src/ribbon'
import { AddressDetails } from 'src/types/AddressDetails'

export type Location = {
    name: string | null
    uuid: string
    address: string
    latitude: number
    longitude: number
    confidence: number
    insurances: Insurance[]
    phone_numbers: {
        phone: string
        detail?: string
        details?: string
    }[]
    cms_data?: {
        cms_certification_number?: string
        cms_hospital_overall_rating?: number | null
        cms_hcahps_overall_hospital_star_rating?: number | null
    }[]
    npis: string[]
    distance?: number
    location_types: string[]
    address_details: AddressDetails
    google_maps_link: string | null
}

export type SearchLocationsParameters = {
    //SearchLocationsParameters
    name?: string
    address?: string
    location_ids?: string[]
    _excl_location_ids?: string[]
    distance?: number
    location_types?: string[]
    _excl_location_types?: string[]
    location?: [number, number]
    min_confidence?: number

    // Organization
    organization_ids?: string[]
    _excl_organization_ids?: string[]
}

export type SearchLocationsRequest = RibbonSearchRequest<SearchLocationsParameters>
export type SearchLocationsResponse = RibbonSearchResponseParameterized<Location, SearchLocationsParameters>
export class Locations extends RibbonEndpoint<SearchLocationsRequest, SearchLocationsResponse> {}

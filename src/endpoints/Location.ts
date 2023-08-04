import { RibbonEndpoint, RibbonSearchRequestPaginated } from 'src/types/Ribbon'
import { Insurance } from 'src/endpoints/Insurance'
import { RibbonSearchResponseParameterized, RibbonSearchRequest } from 'src/types/Ribbon'
import { AddressDetails } from 'src/types/AddressDetails'

export type Location = {
    uuid: string
    name: string | null
    address: string
    address_details: AddressDetails
    latitude: number
    google_maps_link: string | null
    phone_numbers: {
        phone: string
        detail?: string
        details?: string
    }[]
    longitude: number
    confidence: number
}

export type SearchLocationsParameters = {
    // Location Search Options
    address?: string
    name?: string
    distance?: number
    location_types?: string[]
    _excl_location_types?: string[]
    location?: [number, number]
    location_ids?: string[]
    _excl_location_ids?: string[]
    insurance_carrier_name?: string
    min_confidence?: number
    national_bluecard?: boolean

    // Organization Search Criteria
    organization_ids?: string[]
    _excl_organization_ids?: string[]

    // Focus Area Search Criteria
    clinical_area?: string
    clinical_area_ids?: string[]
    treatment?: string
    treatment_ids?: string[]
}

export type SearchLocationsRequest = RibbonSearchRequestPaginated<SearchLocationsParameters>
export type SearchLocationsResponse = RibbonSearchResponseParameterized<Location, SearchLocationsParameters>
export class Locations extends RibbonEndpoint<SearchLocationsRequest, SearchLocationsResponse> {}

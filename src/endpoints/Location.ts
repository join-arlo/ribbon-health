import { RibbonEndpoint } from 'src/endpoints/Common'
import { Insurance, InsuranceSearchCriteria } from 'src/endpoints/Insurance'
import { ResponseWithSearchOptions, AddressDetails, SearchRequest } from 'src/endpoints/Common'
import { FocusAreaSearchCriteria } from 'src/endpoints/Provider'

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
    npis?: string[]
    distance?: number
    location_types: string[]
    address_details: AddressDetails
    google_maps_link: string | null
    aha_id?: string
    version_id?: string
    parent_aha_id?: string | null
}

export type LocationSearchCriteria = {
    address?: string
    location_ids?: string[]
    _excl_location_ids?: string[]
    distance?: number
    location_types?: string[]
    _excl_location_types?: string[]
    location?: [number, number]
    min_confidence?: number
}

export type LocationOrganizationSearchCriteria = {
    organization_ids?: string[]
    _excl_organization_ids?: string[]
}

export type LocationSearchAllCriteria = LocationSearchCriteria &
    InsuranceSearchCriteria &
    FocusAreaSearchCriteria &
    LocationOrganizationSearchCriteria

export type LocationsRequest = SearchRequest<LocationSearchAllCriteria>

export type LocationsResponse = ResponseWithSearchOptions<Location, LocationSearchAllCriteria>

export class Locations extends RibbonEndpoint<LocationsRequest, LocationsResponse> {}

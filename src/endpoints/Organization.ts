import {
    RibbonSearchResponseParameterized,
    RibbonSearchRequest,
} from 'src/ribbon'
import { AddressDetails } from 'src/types/AddressDetails'

export type Organization = {
    uuid: string
    name: string
    organization_types: string[]
    websites: {
        url: string
    }[]
    ids: {
        id: string
        id_type: string
    }[]
    address: string
    address_details: AddressDetails
    latitude: number
    longitude: number
    phone_numbers: {
        phone: string
        detail: string
    }[]
}

export type SearchOrganizationsParameters = {
    address?: string
    name?: string
    distance?: number
    location?: [number, number]
}

export type SearchOrganizationsRequest = RibbonSearchRequest<SearchOrganizationsParameters>
export type SearchOrganizationsResponse = RibbonSearchResponseParameterized<Organization, SearchOrganizationsParameters>

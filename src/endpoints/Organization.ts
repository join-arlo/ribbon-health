import {
    AddressDetails,
    ResponseWithSearchOptions,
    PaginationAndSearchConfigurationOptions,
    SearchRequest,
} from 'src/endpoints/Common'

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

export type OrganizationSearchOptions = {
    address?: string
    name?: string
    distance?: number
    location?: [number, number]
}

export type OrganizationsRequest = SearchRequest<OrganizationSearchOptions>

export type OrganizationsResponse = ResponseWithSearchOptions<Organization, OrganizationSearchOptions>

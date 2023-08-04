import { SearchRequest, ResponsePaginatedWithSearchOptions } from 'src/endpoints/Common'

export type Insurance = {
    uuid: string
    carrier_association: string
    carrier_brand: string
    carrier_name: string
    state: string | null
    plan_name: string | null
    plan_type: string | null
    metal_level: string | null
    display_name: string | null
    network: string | null
    confidence: number
    category?: string
    codes?: string[]
}

export type InsuranceSearchOptions = {
    search?: string
    uuid?: string
    carrier_association?: string
    carrier_brand?: string
    carrier_name?: string
    state?: string
    plan_name?: string
    plan_type?: string
    display_name?: string
    category?: string
    codes?: string
    partial_codes?: string
}

export type InsuranceSearchCriteria = {
    insurance_ids?: string[]
    _excl_insurance_ids?: string[]
    insurance_carrier_name?: string
}

export type InsurancesRequest = SearchRequest<InsuranceSearchOptions>

export type InsurancesResponse = ResponsePaginatedWithSearchOptions<Insurance, InsuranceSearchOptions>

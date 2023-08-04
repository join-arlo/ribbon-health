import { RibbonSearchRequest, RibbonSearchResponsePaginated, RibbonEndpoint } from 'src/types/Ribbon'

export type Insurance = {
    uuid: string
    carrier_association: string | null
    carrier_brand: string | null
    carrier_name: string | null
    state: string | null
    plan_name: string | null
    plan_type: string | null
    metal_level: string | null
    display_name: string | null
    network: string | null
    confidence: number | null
}

export type SearchInsurancesParameters = {
    // Insurance Search Parameters
    search?: string
    carrier_association?: string[]
    carrier_brand?: string[]
    carrier_name?: string[]
    state?: string
    plan_name?: string
    plan_type?: string
    display_name?: string
    category?: string[]
    _excl_category?: string[]
    codes?: string
    partial_codes?: string
}

export type SearchInsurancesRequest = RibbonSearchRequest<SearchInsurancesParameters>
export type SearchInsurancesResponse = RibbonSearchResponsePaginated<Insurance, SearchInsurancesParameters>
export class Insurances extends RibbonEndpoint<SearchInsurancesRequest, SearchInsurancesResponse> {}

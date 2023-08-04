import { RibbonSearchRequest, RibbonSearchResponse } from 'src/ribbon'

export type ProcedureCostEstimate = {
    minimum: number
    median: number
    maximum: number
}

export type SearchProcedureCostEstimateParameters = {
    procedure_ids: string[]
    member_zip: string
}

export type SearchProcedureCostEstimateRequest = RibbonSearchRequest<SearchProcedureCostEstimateParameters>
export type SearchProcedureCostEstimateResponse = RibbonSearchResponse<SearchProcedureCostEstimateParameters>

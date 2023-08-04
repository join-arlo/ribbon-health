import { SearchRequest, Response } from 'src/endpoints/Common'

export type ProcedureCostEstimate = {
    minimum: number
    median: number
    maximum: number
}

export type ProcedureCostEstimateSearchOptions = {
    procedure_ids: string[]
    member_zip: string
}

export type ProcedureCostEstimateRequest = SearchRequest<ProcedureCostEstimateSearchOptions>

export type ProcedureCostEstimateResponse = Response<ProcedureCostEstimateSearchOptions>

import { Gender } from 'src/types/Gender'
import { SearchRequest, ResponseWithSearchOptions } from 'src/endpoints/Common'

export type ConditionCostEstimate = {
    one_year: number
    five_year: number
    ten_year: number
    lifetime: number
}

export type ConditionCostEstimateSearchOptions = {
    condition_ids: string[]
    member_age: number
    member_zip: string
    member_gender: Gender
}

export type ConditionCostEstimateRequest = SearchRequest<ConditionCostEstimateSearchOptions>

export type ConditionCostEstimateResponse = ResponseWithSearchOptions<
    ConditionCostEstimateSearchOptions,
    ConditionCostEstimate
>

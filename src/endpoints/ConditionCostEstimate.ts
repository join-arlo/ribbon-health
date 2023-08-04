import { Gender } from 'src/types/Gender'
import { RibbonSearchRequest, RibbonSearchResponseParameterized } from 'src/types/Ribbon'

export type ConditionCostEstimate = {
    one_year: number
    five_year: number
    ten_year: number
    lifetime: number
}

export type SearchConditionCostEstimateParamters = {
    condition_ids: string[]
    member_age: number
    member_zip: string
    member_gender: Gender
}

export type SearchConditionCostEstimateRequest = RibbonSearchRequest<SearchConditionCostEstimateParamters>

export type SearchConditionCostEstimateResponse = RibbonSearchResponseParameterized<
    SearchConditionCostEstimateParamters,
    ConditionCostEstimate
>

import { RibbonSearchResponsePaginated, RibbonSearchRequest } from 'src/ribbon'
import { Value } from 'src/types/Value'

export type ConditionModule = 'focus_areas' | 'condition_cost_estimate'

export type Condition = {
    uuid: string
    display: string
    modules: ConditionModule[]
    specialties: Value[] | null
}

export type SearchConditionParameters = {
    search?: string
    specialty_ids?: string[]
    module?: ConditionModule
}

export type ConditionsRequest = RibbonSearchRequest<SearchConditionParameters>
export type ConditionsResponse = RibbonSearchResponsePaginated<Condition, SearchConditionParameters>

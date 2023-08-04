import { ResponsePaginatedWithSearchOptions, SearchRequest } from 'src/endpoints/Common'
import { Value } from 'src/types/Value'

export type ConditionModule = 'focus_areas' | 'condition_cost_estimate'

export type Condition = {
    uuid: string
    display: string
    modules: ConditionModule[]
    specialties: Value[] | null
}

export type ConditionSearchOptions = {
    search?: string
    specialty_ids?: string[]
    module?: ConditionModule
}

export type ConditionsRequest = SearchRequest<ConditionSearchOptions>

export type ConditionsResponse = ResponsePaginatedWithSearchOptions<Condition, ConditionSearchOptions>

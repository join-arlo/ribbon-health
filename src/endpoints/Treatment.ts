import {
    PaginationAndSearchConfigurationOptions,
    SearchRequest,
    ResponsePaginatedWithSearchOptions,
} from 'src/endpoints/Common'
import { Value } from 'src/types/Value'

export type TreatmentType = 'providers' | 'locations'

export type Treatment = {
    uuid: string
    display: string
    type?: TreatmentType[]
    specialties: Value[]
}

export type TreatmentSearchOptions = PaginationAndSearchConfigurationOptions<Treatment> & {
    search?: string
    specialty_ids?: string[]
    type?: TreatmentType
}

export type TreatmentsRequest = SearchRequest<TreatmentSearchOptions>

export type TreatmentsResponse = ResponsePaginatedWithSearchOptions<Treatment, TreatmentSearchOptions>

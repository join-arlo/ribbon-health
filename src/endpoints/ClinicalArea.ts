import {
    PaginationAndSearchConfigurationOptions,
    SearchRequest,
    ResponsePaginatedWithSearchOptions,
} from 'src/endpoints/Common'
import { Value } from 'src/types/Value'

export type ClinicalAreaType = 'providers' | 'locations'

export type ClinicalArea = {
    uuid: string
    display: string
    types?: ClinicalAreaType[]
    conditions?: Value[]
    treatments?: Value[]
    specialties?: Value[]
}

export type ClinicalAreaSearchOptions = PaginationAndSearchConfigurationOptions<ClinicalArea> & {
    search?: string
    clinical_area?: string
    specialty_ids?: string[]
    condition?: string
    condition_ids?: string[]
    treatment?: string
    treatment_ids?: string[]
    type?: ClinicalAreaType
}

export type ClinicalAreasRequest = SearchRequest<ClinicalAreaSearchOptions>

export type ClinicalAreasResponse = ResponsePaginatedWithSearchOptions<ClinicalArea, ClinicalAreaSearchOptions>

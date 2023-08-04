import {
    RibbonSearchRequestPaginated,
    RibbonSearchResponsePaginated,
} from 'src/ribbon'
import { Value } from 'src/types/Value'

export type TreatmentType = 'providers' | 'locations'

export type Treatment = {
    uuid: string
    display: string
    type?: TreatmentType[]
    specialties: Value[]
}

export type SearchTreatmentsParameters = {
    search?: string
    specialty_ids?: string[]
    type?: TreatmentType
}

export type SearchTreatmentsRequest = RibbonSearchRequestPaginated<SearchTreatmentsParameters>
export type SearchTreatmentsResponse = RibbonSearchResponsePaginated<Treatment, SearchTreatmentsParameters>

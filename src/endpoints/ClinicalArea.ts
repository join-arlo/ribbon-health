import { RibbonSearchResponsePaginated, RibbonSearchRequestPaginated } from 'src/ribbon'
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

export type SearchClinicalAreasParameters = {
    search?: string
    clinical_area?: string
    specialty_ids?: string[]
    condition?: string
    condition_ids?: string[]
    treatment?: string
    treatment_ids?: string[]
    type?: ClinicalAreaType
}

export type SearchClinicalAreasRequest = RibbonSearchRequestPaginated<SearchClinicalAreasParameters>
export type SearchClinicalAreasResponse = RibbonSearchResponsePaginated<ClinicalArea, SearchClinicalAreasParameters>

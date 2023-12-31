import { RibbonSearchRequest, RibbonSearchResponsePaginated } from 'src/types/Ribbon'

export type Specialty = {
    uuid: string
    taxonomy_code: string
    provider_name: string
    colloquial: string | null
    board_specialty: string | null
    board_sub_specialty: string | null
    non_md_specialty: string | null
    non_md_sub_specialty: string | null
    taxonomy_1: string | null
    taxonomy_2: string | null
    taxonomy_3: string | null
    display: string
    provider_type: string
}

export type SearchSpecialtiesParameters = {
    search?: string
    provider_type?: string
}

export type SearchSpecialtiesRequest = RibbonSearchRequest<SearchSpecialtiesParameters>
export type SearchSpecialtiesResponse = RibbonSearchResponsePaginated<Specialty, SearchSpecialtiesParameters>

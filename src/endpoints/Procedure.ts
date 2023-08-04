import { RibbonSearchRequest, RibbonSearchResponsePaginated } from 'src/types/Ribbon'

export type Procedure = {
    uuid: string
    display_name: string
}

export type SearchProceduresParameters = {
    search?: string
}

export type SearchProceduresRequest = RibbonSearchRequest<SearchProceduresParameters>
export type SearchProceduresResponse = RibbonSearchResponsePaginated<Procedure, SearchProceduresParameters>

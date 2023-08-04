import { SearchRequest, ResponsePaginatedWithSearchOptions } from 'src/endpoints/Common'

export type Procedure = {
    uuid: string
    display_name: string
}

export type ProcedureSearchOptions = {
    search?: string
}

export type ProceduresRequest = SearchRequest<ProcedureSearchOptions>

export type ProceduresResponse = ResponsePaginatedWithSearchOptions<Procedure, ProcedureSearchOptions>

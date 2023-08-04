import { Value } from 'src/types/Value'
import { RibbonSearchRequest, RibbonSearchResponse } from 'src/ribbon'

export type Language = Value

export type SearchLanguagesParameters = {
    search?: string
}

export type SearchLanguagesRequest = RibbonSearchRequest<SearchLanguagesParameters>
export type SearchLanguagesResponse = RibbonSearchResponse<Language>

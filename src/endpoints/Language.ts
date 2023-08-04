import { Value } from 'src/types/Value'
import { SearchRequest, Response } from 'src/endpoints/Common'

export type Language = Value

export type LanguageSearchOptions = {
    search?: string
}

export type LanguagesRequest = SearchRequest<LanguageSearchOptions>

export type LanguagesResponse = Response<Language>

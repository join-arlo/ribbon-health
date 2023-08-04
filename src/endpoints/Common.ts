import { ClinicalAreaSearchOptions } from 'src/endpoints/ClinicalArea'
import { ConditionSearchOptions } from 'src/endpoints/Condition'
import { ConditionCostEstimateSearchOptions } from 'src/endpoints/ConditionCostEstimate'
import { InsuranceSearchOptions } from 'src/endpoints/Insurance'
import { LanguageSearchOptions } from 'src/endpoints/Language'
import { LocationSearchCriteria } from 'src/endpoints/Location'
import { OrganizationSearchOptions } from 'src/endpoints/Organization'
import { ProcedureSearchOptions } from 'src/endpoints/Procedure'
import { ProcedureCostEstimateSearchOptions } from 'src/endpoints/ProcedureCostEstimate'
import { ProviderSearchCriteria } from 'src/endpoints/Provider'
import { SpecialtieSearchOptions } from 'src/endpoints/Specialty'
import { TreatmentSearchOptions } from 'src/endpoints/Treatment'
import { RibbonOptions } from 'src/ribbon'

export type RequestSearchOptions =
    | ClinicalAreaSearchOptions
    | ConditionCostEstimateSearchOptions
    | ConditionSearchOptions
    | InsuranceSearchOptions
    | LanguageSearchOptions
    | LocationSearchCriteria
    | OrganizationSearchOptions
    | ProcedureCostEstimateSearchOptions
    | ProcedureSearchOptions
    | ProviderSearchCriteria
    | SpecialtieSearchOptions
    | TreatmentSearchOptions

export type AddressDetails = {
    zip: string
    city: string
    state: string
    street: string | null
    address_line_1: string | null
    address_line_2: string | null
}

export type PaginationAndSearchConfigurationOptions<T> = {
    page?: number
    page_size?: number
    max_locations?: number
    fields?: keyof T[]
    _excl_fields?: keyof T[]
}

export type SearchRequest<T> = T
export type PaginatedSearchRequest<T> = PaginationAndSearchConfigurationOptions<T> & T

export type ResponseCount = {
    count: number
}

export type ResponsePaginated = {
    next: string | null
    previous: string | null
}

type ResponseSearchOptions<T> = PaginationAndSearchConfigurationOptions<T> &
    T & {
        total_count?: number
        sort_by?: string
        geo?: {
            latitude: number
            longitude: number
        }
        address?: string
        fields?: string[]
        APIGatewayToken?: string
    }

export type Response<T> = ResponseCount & {
    data: T[]
}

export type ResponseWithSearchOptions<T, P> = {
    parameters: ResponseSearchOptions<P>
    data: T[]
}

export type ResponsePaginatedWithSearchOptions<T, P> = ResponseCount &
    ResponsePaginated & {
        parameters?: ResponseSearchOptions<P>
        results: T[]
    }

export function serializeRequestSearchOptions(params: RequestSearchOptions, prefix?: string) {
    const querySearchOptions: string[] = []
    for (const param in params) {
        const val = params[param as keyof RequestSearchOptions] as
            | undefined
            | string
            | string[]
            | number
            | number[]
            | boolean

        if (!val) continue

        const key = prefix ? prefix + param : param

        // cast strings & numbers
        if (typeof val === 'string' || typeof val === 'number') {
            querySearchOptions.push(`${key}=${val}`)
        }
        // cast booleans
        else if (typeof val === 'boolean') {
            querySearchOptions.push(`${key}=${val ? 'true' : 'false'}`)
        }
        // cast arrays
        else if (Array.isArray(val) && val.length > 0) {
            querySearchOptions.push(`${key}=${val.join(',')}`)
        }
        // cast objects
        else if (param === 'exclude' && typeof val === 'object') {
            querySearchOptions.push(serializeRequestSearchOptions(val as RequestSearchOptions, '_excl_'))
        }
    }
    return querySearchOptions.join('&')
}

export class RibbonEndpoint<TRequest extends RequestSearchOptions, TResponse> {
    options: RibbonOptions
    endpoint: string

    constructor(options: RibbonOptions, endpoint: string) {
        this.options = options
        this.endpoint = endpoint
    }

    async search(params: TRequest): Promise<TResponse> {
        const url = `${this.options.url}${this.endpoint}${serializeRequestSearchOptions(params)}`

        const response = await fetch(url, {
            headers: {
                accept: `application/json`,
                authorization: `Bearer ${this.options.apiKey}`,
            },
        })

        const data: TResponse = await response.json()

        return data
    }
}

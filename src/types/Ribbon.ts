import { searchRequestParameters } from 'src/utils'

export type RibbonSearchRequest<T> = T

export type RibbonSearchRequestPaginated<T> = T & {
    page?: number
    page_size?: number
    max_locations?: number
}

type RibbonSearchResponseParameters<T> = T & {
    page?: number
    page_size?: number
    max_locations?: number
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

export type RibbonSearchResponse<T> = {
    count: number
    data: T[]
}

export type RibbonSearchResponseParameterized<T, P> = {
    parameters: RibbonSearchResponseParameters<P>
    data: T[]
}

export type RibbonSearchResponsePaginated<T, P> = {
    count: number
    next: string | null
    previous: string | null
    parameters?: RibbonSearchResponseParameters<P>
    results: T[]
}

export type RibbonOptions = {
    url: 'https://api.ribbonhealth.com/v1'
    apiKey: string
}

export class RibbonEndpoint<TRequest, TResponse> {
    options: RibbonOptions
    endpoint: string

    constructor(options: RibbonOptions, endpoint: string) {
        this.options = options
        this.endpoint = endpoint
    }

    async search(params: TRequest): Promise<TResponse> {
        let url = `${this.options.url}${this.endpoint}`

        const urlParams = searchRequestParameters<TRequest>(params)
        url = urlParams ? `${url}?${urlParams}` : url

        const response = await fetch(url, {
            headers: { accept: `application/json`, authorization: `Bearer ${this.options.apiKey}` },
        })

        const data: TResponse = await response.json()

        return data
    }
}

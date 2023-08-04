export const searchRequestParameters = <T>(params: T, prefix?: string) => {
    const querySearchOptions: string[] = []
    for (const param in params) {
        const val = params[param as keyof T] as undefined | string | string[] | number | number[] | boolean

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
            querySearchOptions.push(searchRequestParameters(val as T, '_excl_'))
        }
    }
    return querySearchOptions.join('&')
}

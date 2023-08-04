import { SearchProvidersResponse } from 'src/index'
import { Ribbon } from 'src/ribbon'
import typia from 'typia'

test('Test SearchProvidersResponse', async () => {
    const ribbon = new Ribbon({
        url: 'https://api.ribbonhealth.com/v1',
        apiKey: process.env.RIBBON_API_KEY as string,
    })

    const response = await ribbon.providers.search({ name: 'childrens hospital' })

    typia.assert<SearchProvidersResponse>(response)
})

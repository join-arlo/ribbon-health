import { SearchProvidersResponse } from 'src/endpoints/Provider'
import { RibbonClient } from 'src/client'
import typia from 'typia'

test('Test SearchProvidersResponse', async () => {
    const ribbon = new RibbonClient({
        url: 'https://api.ribbonhealth.com/v1',
        apiKey: process.env.RIBBON_API_KEY as string,
    })

    const response = await ribbon.providers.search({ name: 'childrens hospital' })

    typia.assert<SearchProvidersResponse>(response)
})

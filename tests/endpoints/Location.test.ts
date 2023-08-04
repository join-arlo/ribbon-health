import { SearchLocationsResponse } from 'src/endpoints/Location'
import { RibbonClient } from 'src/client'
import typia from 'typia'

test('Test SearchLocationsResponse', async () => {
    const ribbon = new RibbonClient({
        url: 'https://api.ribbonhealth.com/v1',
        apiKey: process.env.RIBBON_API_KEY as string,
    })

    const response = await ribbon.locations.search({ name: 'childrens hospital' })

    typia.assert<SearchLocationsResponse>(response)
})

import { LocationsResponse } from 'src/index'
import { Ribbon } from 'src/ribbon'
import typia from 'typia'

test('Test LocationsResponse', async () => {
    const ribbon = new Ribbon({
        url: 'https://api.ribbonhealth.com/v1',
        apiKey: process.env.RIBBON_API_KEY as string,
    })

    const response = await ribbon.locations.search({ name: 'childrens hospital' })

    typia.assert<LocationsResponse>(response)
})

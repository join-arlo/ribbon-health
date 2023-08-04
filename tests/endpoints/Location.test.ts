import { LocationsResponse } from 'src/index'
import { Ribbon } from 'src/ribbon'
import typia from 'typia'

test('Test LocationsResponse', async () => {
    const ribbon = new Ribbon({
        url: 'https://api.ribbonhealth.com/v1',
        apiKey: '5b8da1b7eac46318035576dda4340b200bbbd4e7',
    })

    const response = await ribbon.locations.search({name: 'childrens hospital'})

    typia.assert<LocationsResponse>(response)
})

import { SearchInsurancesResponse } from 'src/index'
import { RibbonClient } from 'src/client'
import typia from 'typia'

test('Test SearchInsurancesResponse', async () => {
    const ribbon = new RibbonClient({
        url: 'https://api.ribbonhealth.com/v1',
        apiKey: process.env.RIBBON_API_KEY as string,
    })

    const response = await ribbon.insurances.search({ search: 'Aetna' })

    typia.assert<SearchInsurancesResponse>(response)
})

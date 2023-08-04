import * as dotenv from 'dotenv'
import { Locations } from 'src/endpoints/Location'
import { Providers } from 'src/endpoints/Provider'
import { Insurances } from 'src/endpoints/Insurance'
import { RibbonOptions } from 'src/types/Ribbon'

dotenv.config()

export class RibbonClient {
    options: RibbonOptions

    providers: Providers
    locations: Locations
    insurances: Insurances

    constructor(options: RibbonOptions) {
        this.options = options
        this.providers = new Providers(options, '/custom/providers')
        this.locations = new Locations(options, '/custom/locations')
        this.insurances = new Insurances(options, '/custom/insurances')
    }
}

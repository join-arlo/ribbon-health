import { Locations } from 'src/endpoints/Location'
import { Providers } from 'src/endpoints/Provider'

export type RibbonOptions = {
    url: 'https://api.ribbonhealth.com/v1'
    apiKey: string
}

export const endpoints = {
    clinicalAreas: '/custom/clinical_areas',
    customConditions: '/custom/conditions',
    conditions: '/conditions',
    conditionCostEstimate: '/condition_cost_estimate',
    insurances: '/insurances',
    customInsurances: '/custom/insurances',
    languages: '/languages',
    locations: '/custom/locations',
    customLocations: '/locations',
    locationTypes: '/location_types',
    customLocationTypes: '/custom/location_types',
    organizations: '/custom/organizations',
    procedures: '/procedures',
    customProcedures: '/custom/procedures',
    procedureCostEstimates: '/procedure_cost_estimate',
    providers: '/custom/providers',
    providerTypes: '/provider_types',
    customProviderTypes: '/custom/provider_types',
    specialties: '/specialties',
    customSpecialties: '/custom/specialties',
    treatments: '/custom/treatments',
}

export class Ribbon {
    options: RibbonOptions

    providers: Providers
    locations: Locations

    constructor(options: RibbonOptions) {
        this.options = options
        this.providers = new Providers(options, endpoints.providers)
        this.locations = new Locations(options, endpoints.locations)
    }
}

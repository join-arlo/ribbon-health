import { Insurance, InsuranceSearchCriteria } from 'src/endpoints/Insurance'
import { Organization } from 'src/endpoints/Organization'
import { Specialty } from 'src/endpoints/Specialty'
import { Gender } from 'src/types/Gender'
import { Value } from 'src/types/Value'
import {
    PaginationAndSearchConfigurationOptions,
    ResponseWithSearchOptions,
    RibbonEndpoint,
    SearchRequest,
} from 'src/endpoints/Common'
import { LocationSearchCriteria } from 'src/endpoints/Location'

type ProviderLocation = Location & {
    faxes?: {
        fax: string
        details: string
    }[]
}

type ProviderSpecialty = Specialty & {
    is_primary?: boolean
}

export type Provider = {
    uuid: string
    version_id: string | null
    npi: string
    first_name?: string
    middle_name?: string | null
    last_name?: string
    age?: number
    gender?: Gender
    ratings_count?: number
    ratings_avg?: number
    degrees?: string[]
    educations?: {
        type: string
        education: {
            name: string
            uuid: string
        }
    }[]
    is_pcp?: boolean
    specialties?: ProviderSpecialty[]
    provider_types?: string[]
    languages?: string[]
    organizations?: Organization[]
    insurances?: Insurance[]
    locations?: ProviderLocation[]
    online_profiles?: {
        url: string
    }[]
    panel_demographics?: {
        ages: string[]
        sexes: string
    }
    // clinical_areas?: {} // TODO
    conditions?: Value[]
    treatments?: Value[]
    procedures?: {
        cost: {
            cost_index: number | null
        }
        uuid: string
        display: string
        quality: {
            experience_index: number | null
        }
    }[]
    performance?: {
        aggregate?: {
            cost: {
                efficiency_index: number
            }
            quality?: {
                outcomes_index: number
            }
        }
    }
}

export type ProviderSearchCriteria = {
    npis?: string[] | number[]
    name?: string
    provider_types?: string[]
    _excl_provider_types?: string[]
    gender?: Gender
    max_age?: number
    min_age?: number
    language?: string
    _excl_language?: string
    min_rating?: number
}

export type ProviderLocationSearchCriteria = Omit<LocationSearchCriteria, 'location_ids' | '_excl_location_ids'> & {
    location_within_distance?: boolean
    virtual_search?: boolean
    min_location_confidence?: number
}

export type ProviderInsurancesSearchCriteria = InsuranceSearchCriteria & {
    location_insurance_ids?: string[]
    _excl_location_insurance_ids?: string[]
    national_bluecard?: boolean
}

export type SpecialtySearchCriteria = {
    specialty_ids?: string[]
    _excl_specialty_ids?: string[]
    specialty?: string
    _excl_specialty?: string
    specialty_ids_primary?: string[]
    _excl_specialty_ids_primary?: string[]
    specialty_primary?: string
    _excl_specialty_primary?: string
}

export type ProcedureSearchCriteria = {
    procedure_ids?: string[]
    _excl_procedure_ids?: string[]
    procedure?: string
    _excl_procedure?: string
}

export type PanelAges =
    | 'Pediatric (0-12)'
    | 'Adolescent (13-21)'
    | 'Adult (22-44)'
    | 'Adult (45-64)'
    | 'Senior (65 and over)'

export type PanelSexes = 'Both female and male' | 'Primarily female' | 'Primarily male'

export type FocusAreaSearchCriteria = {
    clinical_area?: string
    clinical_area_ids?: string[]
    condition?: string
    condition_ids?: string[]
    treatment?: string

    treatment_ids?: string[]
    panel_ages?: PanelAges[]
    panel_sexes?: PanelSexes
}

export type CostAndQualitySearchCriteria = {
    min_outcomes_index?: number
    min_efficiency_index?: number
}

export type ProviderOrganizationSearchCriteria = {
    location_organization_ids?: string[]
    _excl_location_organization_ids?: string[]
}

export type ProviderSearchAllCriteria = ProviderSearchCriteria &
    ProviderLocationSearchCriteria &
    InsuranceSearchCriteria &
    SpecialtySearchCriteria &
    ProcedureSearchCriteria &
    FocusAreaSearchCriteria &
    CostAndQualitySearchCriteria &
    ProviderOrganizationSearchCriteria &
    PaginationAndSearchConfigurationOptions<Provider>

export type ProvidersRequest = SearchRequest<ProviderSearchAllCriteria>

export type ProvidersResponse = ResponseWithSearchOptions<Provider, ProviderSearchAllCriteria>

export class Providers extends RibbonEndpoint<ProvidersRequest, ProvidersResponse> {}

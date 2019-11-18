export interface User {
    user_id: number,
    username: string,
    password: string,
    email: string
}

export interface Animal {
    animal_id: number,
    birthday: string,
    age: number,
    spezies: string,
    name: string,
    weight: number,
    target_weight: number,
    aktivity: 'low' | 'normal' | 'high',
    user_id: number,
    setting_id: number
}

export interface Component {
    component_id: number,
    categorie: string,
    animal_sort: string,
    name: string,
    info: string,
    user_id: number,
    wiki_id: number
}

export interface FeedList {
    feed_part_id: number,
    feed_part: string,
    schedult_id: number,
    amount: number
}

export interface Nutrition {
    nutrition_id: number,
    nutrition: string,
    component_id: number,
    value: number
}

export type OuchieType = 'poo' |'rash'| 'heartburn'| 'itch'| 'puke'| 'others'

export interface Ouchie {
    ouchie_id: number,
    types: OuchieType[]
    day_date: string,
    animal_id: number,
}

export interface PlanSetting {
    setting_id: number,
    animal_amount: number,
    fat_per_day: number,
    protein_per_day: number,
    plant_amount: number,
    factor: number,
    fullfil_demand: 1 | 2 | 3 | 4,
    intervall: 1 | 2 | 3 | 4,
    own_component: boolean,
    plan_view: 'basic' | 'detail',
}

export type Weekday = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'

export interface ScheduleDay {
    schedult_id: number,
    weekday: Weekday,
    week: number,
    ouchie_id: number,
    setting_id: number

}

export interface WikiEntry {
    wiki_id: number,
    title: string,
    content: any
}
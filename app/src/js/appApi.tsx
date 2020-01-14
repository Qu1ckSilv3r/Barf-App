import 'whatwg-fetch'
import {Animal, Component, FeedList, Nutrition, PlanSetting, ScheduleDay, User} from "../../datamodels";
import * as moment from "moment";

interface RequestBuildObj {
    url: string,
    body?: any,
    method?: string,
    headers?: {
        [key: string]: string
    },
    isAuth?: boolean,
}

//Julia backend
const backendURL = 'http://127.0.0.1:8081';

//Marina backend
//const backendURL = 'http://192.168.99.100:8081';


export class AppApi {

    private buildRequest = async (buildObject: RequestBuildObj) => {
        /*
        replace (Access)'TOKEN' if existing
        const authHeader = buildObject.isAuth ? {
            "Authorization": `Bearer ${'TOKEN'}`
        } : null

         */
        const isJSON = typeof buildObject.body === "object" && !(buildObject.body instanceof FormData)

        let result = await fetch(`${backendURL}/${buildObject.url}`, {
            method: buildObject.method || 'GET',
            headers: {
                "Content-Type": "application/json",
                ...buildObject.headers
            },
            body: isJSON ? JSON.stringify(buildObject.body) : buildObject.body
        })

        const json = await result.json()

        if (json.errorCode) {
            throw (new Error(json.errorCode))
        }

        return json
    };


    // -------------- BARFUSER

    login = (username: string, password: string) => {
        return this.buildRequest({
            url: 'barfuser/login',
            method: 'POST',
            body: {
                username: username,
                password: password
            }
        })
    }

    getUserById = (userId: number) => {
        console.log('getUserById - userId', userId)
        return this.buildRequest({
            url: 'barfuser/findById/{userId}',
            method: 'GET'
        })
    }

    createUser = (username: string, password: string, email: string) => {
        console.log('createUser - username', username, 'password', password, 'email', email)
        return this.buildRequest({
            url: 'barfuser/create',
            method: 'POST',
            body: {
                username: username,
                password: password,
                email: email
            }

        })
    }

    updateUser = (user: User) => {
        console.log('updateUser - user', user)

    }

    deleteUser = (userId: number) => {
        console.log('deleteUser - userId', userId)
        return this.buildRequest({
            url: 'barfuser/delete/{userId}',
            method: 'DELETE',
        })
    }


    // -------------- ANIMALS

    getAllAnimals = () => {
        console.log('getAllAnimals()')
    }

    getAnimalsByUser = (userId: number) => {
        console.log('getAnimalsByUser - userId', userId)
        return this.buildRequest({
            url: 'animal/animalOf/' + userId,
            method: 'GET'
        })
    }

    getAnimalById = (animalId: number) => {
        console.log('getAnimalById - animalId', animalId)
        return this.buildRequest({
            url: 'animal/' + animalId,
            method: 'GET'
        })
    }

    createAnimal = (animal: Animal) => {
        console.log('createAnimal - animal', animal)

        return this.buildRequest({
            url: 'animal/create',
            method: 'POST',
            body: {
                ...animal
            }

        })
    }

    updateAnimal = (animal: Animal) => {
        console.log('updateAnimal - animal', animal)

        const birthdayDate = moment(animal.birthday).toDate()

        this.buildRequest({
            url: 'animal/changeBirthday/' + animal.animal_id,
            method: 'PUT',
            body: birthdayDate

        })
        this.buildRequest({
            url: 'animal/changeAge/' + animal.animal_id,
            method: 'PUT',
            body: animal.age

        })
        this.buildRequest({
            url: 'animal/changeSpezies/' + animal.animal_id,
            method: 'PUT',
            body: animal.spezies
        })
        this.buildRequest({
            url: 'animal/changeName/' + animal.animal_id,
            method: 'PUT',
            body: animal.name

        })
        this.buildRequest({
            url: 'animal/changeWeight/' + animal.animal_id,
            method: 'PUT',
            body: animal.weight

        })

        console.log('target_weight', animal.target_weight, ' - target_weight type', typeof animal.target_weight)
        this.buildRequest({
            url: 'animal/changeTargetWeight/' + animal.animal_id,
            method: 'PUT',
            body: animal.target_weight

        })
        this.buildRequest({
            url: 'animal/changeAktivity/' + animal.animal_id,
            method: 'PUT',
            body: animal.aktivity

        })

    }

    deleteAnimal = (animalId: number) => {
        console.log('deleteAnimal - animalId', animalId)
        return this.buildRequest({
            url: 'animal/delete/' + animalId,
            method: 'DELETE'
        })
    }

    updateAnimalSetting = (animalId: number, settingId: number) => {
        console.log('updateAnimalSetting - animalId', animalId, ' | settingId', settingId)

        return this.buildRequest({
            url: 'animal/setSettingIDof/' + animalId,
            method: 'PUT',
            body: settingId.toString()

        })
    }

    getSettingsOfAnimal = (animalId: number) => {

        return this.buildRequest({
            url: 'animal/getSettingsOf/' + animalId,
            method: 'GET'
        })
    }


    // -------------- COMPONENTS

    getAllComponents = () => {
        '/components'
        console.log('getAllComponents()')
    }

    getComponentById = (componentId: number) => {
        console.log('getComponentById - componentId', componentId)
    }

    getComponentsByUser = (userId: number) => {
        console.log('getComponentsByUser - userId', userId)

        return this.buildRequest({
            url: 'component/ofUser/' + userId,

        })
    }

    // nur die nutzerbezogenen Komponenten pro Kategorie?
    // findByCategorieAndUser_id = () => {}

    // nur die nutzerbezogenen Komponenten pro Sorte?
    //findBySortAndUser_id = () => {}

    // nur die nutzerbezogenen Komponenten nach Name?
    //findByNameAndUser_id = () => {}

    createComponent = (component: Component) => {
        console.log('createComponent - component', component)

        return this.buildRequest({
            url: 'component/create',
            method: 'POST',
            body: {
                ...component
            }

        })

    }

    updateComponent = (component: Component) => {
        console.log('updateComponent - component', component)
    }

    deleteComponent = (componentId: number) => {
        console.log('deleteComponent - componentId', componentId)
    }


    // -------------- FEEDLIST

    getAllFeedLists = () => {
        console.log('getAllFeedLists()')
    }

    getFilteredFeedListByAnimal = (animalId: number) => {
        console.log('getFilteresFeedListByAnimal - animalId', animalId)


        return this.buildRequest({
            url: 'filteredList/forAnimal/' + animalId,
            method: 'GET'

        })
    }

    getFeedListBySchedule = (schedule: number) => {
        console.log('getFeedListBySchedule - schedule', schedule)
    }

    createFeedList = (setting: PlanSetting, components: any) => {
       // console.log('createFeedList - feedList', feedList)

        const body = {
            settingsOfAnimal: setting,
            components: components
        }

        console.log(JSON.stringify(body))

        return this.buildRequest({
            url: 'Feedlist/create',
            method: 'POST',
            body: {
                settingsOfAnimal: setting,
                components: components
            }

        })
    }

    updateFeedList = (feedList: FeedList) => {
        console.log('updateFeedList - feedList', feedList)
    }

    deleteFeedList = (feedListId: number) => {
        console.log('deleteFeedList - feedListId', feedListId)
        '/Feedlist/delete/{feedlist_id}'
    }


    // -------------- NUTRITIONS

    getAllNutritions = () => {
        console.log('getAllNutritions()')
    }

    getNutritionById = (nutritionId: number) => {
        console.log('getNutritionById - nutritionId', nutritionId)
    }

    getNutritionsByComponent = (componentId: number) => {
        console.log('getNutritionsByComponent - componentId', componentId)
    }

    createNutrition = (nutrition: Nutrition) => {
        console.log('createNutrition - nutrition', nutrition)
    }

    updateNutrition = (nutrition: Nutrition) => {
        console.log('updateNutrition - nutrition', nutrition)
    }

    deleteNutrition = (nutritionId: number) => {
        console.log('deleteNutrition - nutritionId', nutritionId)
    }


    // -------------- PLANSETTINGS

    getAllPlanSettings = () => {
        console.log('getAllPlanSettings()')
    }

    getPlanSettingById = (planSettingId: number) => {
        console.log('getPlanSettingById - planSettingId', planSettingId)

        return this.buildRequest({
            url: 'planSettings/' + planSettingId,
            method: 'GET'
        })
    }

    createPlanSetting = (planSetting: PlanSetting) => {
        console.log('createPlanSetting - planSetting', planSetting)
        return this.buildRequest({
            url: 'planSettings/create',
            method: 'POST',
            body: {
                ...planSetting
            }

        })
    }

    deletePlanSetting = (planSettingId: number) => {
        console.log('deletePlanSetting - planSettingId', planSettingId)
    }


    // -------------- SCHEDULEDAY

    getAllScheduleDays = () => {
        console.log('getAllScheduleDays()')
    }

    getScheduleDayById = (scheduleDayId: number) => {
        console.log('getScheduleDayById - scheduleDayId', scheduleDayId)
    }

    createScheduleDay = (scheduleDay: ScheduleDay) => {
        console.log('createScheduleDay - scheduleDay', scheduleDay)
    }

    updateScheduleDay = (scheduleDay: ScheduleDay) => {
        console.log('updateScheduleDay - scheduleDay', scheduleDay)
    }

    deleteScheduleDay = (scheduleDayId: number) => {
        console.log('deleteScheduleDay - scheduleDayId', scheduleDayId)
    }

    // -------------- WIKI


}

export const appApi = new AppApi();
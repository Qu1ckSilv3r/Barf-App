import 'whatwg-fetch'
import {Animal, Component, FeedList, Nutrition, PlanSetting, ScheduleDay, User} from "../../datamodels";

interface RequestBuildObj {
    url: string,
    body?: any,
    method?: string,
    headers?: {
        [key: string]: string
    },
    isAuth?: boolean,
}

const backendURL = 'http://192.168.99.100:8081';

export class AppApi {

    private buildRequest = async (buildObject: RequestBuildObj): Promise<any> => {
        /*
        replace (Access)'TOKEN' if existing
        const authHeader = buildObject.isAuth ? {
            "Authorization": `Bearer ${'TOKEN'}`
        } : null

         */
        const isJSON = typeof buildObject.body === "object" && !(buildObject.body instanceof FormData)


        //replace URL
        let result = await fetch(`${backendURL}/${buildObject.url}`, {
            method: buildObject.method || 'GET',
            headers: {
                ...(isJSON ? {"Content-Type": "application/json"} : {}),
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
        console.log('login - user', username, 'password', password)
        const result = this.buildRequest({
            url: 'barfuser/login',
            method: 'POST',
            body: {
                username: username,
                password: password
            }

        })
        console.log('builRequest return', result)
    }

    getUserById = (userId: number) => {
        console.log('getUserById - userId', userId)
        const result = this.buildRequest({
            url: '/barfuser/findById/{userId}',
            method: 'GET'
        })
    }

    createUser = (username: string, password: string, email: string) => {
        console.log('createUser - username', username, 'password', password, 'email', email)
        const result = this.buildRequest({
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
        const result = this.buildRequest({
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
    }

    getAnimalById = (animalId: number) => {
        console.log('getAnimalById - animalId', animalId)
    }

    createAnimal = (animal: Animal) => {
        console.log('createAnimal - animal', animal)
    }

    updateAnimal = (animal: Animal) => {
        console.log('updateAnimal - animal', animal)
    }

    deleteAnimal = (animalId: number) => {
        console.log('deleteAnimal - animalId', animalId)
    }

    updateAnimalSetting = (animalId: number,) => {
        console.log('updateAnimalSetting - animalId', animalId)
    }

    //Unterschied zu updatePlanSetting() ?


    // -------------- COMPONENTS

    getAllComponents = () => {
        console.log('getAllComponents()')
    }

    getComponentById = (componentId: number) => {
        console.log('getComponentById - componentId', componentId)
    }

    getComponentsByUser = (userId: number) => {
        console.log('getComponentsByUser - userId', userId)
    }

    // nur die nutzerbezogenen Komponenten pro Kategorie?
    // findByCategorieAndUser_id = () => {}

    // nur die nutzerbezogenen Komponenten pro Sorte?
    //findBySortAndUser_id = () => {}

    // nur die nutzerbezogenen Komponenten nach Name?
    //findByNameAndUser_id = () => {}

    createComponent = (component: Component) => {
        console.log('createComponent - component', component)
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

    getFeedListById = (feedListId: number) => {
        console.log('getFeedListById - feedListId', feedListId)
    }

    getFeedListBySchedule = (schedule: number) => {
        console.log('getFeedListBySchedule - schedule', schedule)
    }

    createFeedList = (feedList: FeedList) => {
        console.log('createFeedList - feedList', feedList)
    }

    updateFeedList = (feedList: FeedList) => {
        console.log('updateFeedList - feedList', feedList)
    }

    deleteFeedList = (feedListId: number) => {
        console.log('deleteFeedList - feedListId', feedListId)
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
    }

    //getPlanSettingByAnimal ?

    createPlanSetting = (planSetting: PlanSetting) => {
        console.log('createPlanSetting - planSetting', planSetting)
    }

    updatePlanSetting = (planSetting: PlanSetting) => {
        console.log('updatePlanSetting - planSetting', planSetting)
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
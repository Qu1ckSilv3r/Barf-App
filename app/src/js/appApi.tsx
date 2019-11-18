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

export class AppApi {

    private buildRequest = async (buildObject: RequestBuildObj): Promise<any> => {
        //replace (Access)TOKEN if existing
        const authHeader = buildObject.isAuth ? {
            "Authorization": `Bearer ${'TOKEN'}`
        } : null
        const isJSON = typeof buildObject.body === "object" && !(buildObject.body instanceof FormData)
        console.log("isJSON", isJSON, typeof buildObject.body, buildObject.body)

        //replace URL
        let result = await fetch(`${'URL'}/${buildObject.url}`, {
            method: buildObject.method || 'GET',
            headers: {
                ...(isJSON ? {"Content-Type": "application/json"} : {}),
                ...authHeader,
                ...buildObject.headers
            },
            body: isJSON ? JSON.stringify(buildObject.body) : buildObject.body
        })


        const json = await result.json()

        if (json.errorCode) {
            throw (new Error(json.errorCode))
        }

    };


    // -------------- BARFUSER

    login = (user: User) => {
        this.buildRequest({
            url: ''
        })

    }

    getUserById = (userId: number) => {
    }

    createUser = (username: string, password: string, email: string) => {
    }

    updateUser = (user: User) => {

    }

    deleteUser = (userId: number) => {
    }


    // -------------- ANIMALS

    getAllAnimals = () => {
    }

    getAnimalsByUser = (userId: number) => {
    }

    getAnimalById = (animalId: number) => {
    }

    createAnimal = (animal: Animal) => {
    }

    updateAnimal = (animal: Animal) => {

    }

    deleteAnimal = (animalId: number) => {
    }

    updateAnimalSetting = (animalId: number,) => {
    }


    // -------------- COMPONENTS

    getAllComponents = () => {
    }

    getComponentById = (componentId: number) => {
    }

    getComponentsByUser = (userId: number) => {
    }

    // nur die nutzerbezogenen Komponenten pro Kategorie?
    // findByCategorieAndUser_id = () => {}

    // nur die nutzerbezogenen Komponenten pro Sorte?
    //findBySortAndUser_id = () => {}

    // nur die nutzerbezogenen Komponenten nach Name?
    //findByNameAndUser_id = () => {}

    createComponent = (component: Component) => {
    }

    updateComponent = (component: Component) => {}

    deleteComponent = (componentId: number) => {
    }


    // -------------- FEEDLIST

    getAllFeedLists = () => {
    }

    getFeedListById = (feedListId: number) => {
    }

    getFeedListBySchedule = (schedule: number) => {
    }

    createFeedList = (feedList: FeedList) => {
    }

    updateFeedList = (feedList: FeedList) => {}

    deleteFeedList = (feedListId: number) => {
    }


    // -------------- NUTRITIONS

    getAllNutritions = () => {
    }

    getNutritionById = (nutritionId: number) => {
    }

    getNutritionsByComponent = (componentId: number) => {
    }

    createNutrition = (nutrition: Nutrition) => {
    }

    updateNutrition = (nutrition: Nutrition) => {}

    deleteNutrition = (nutritionId: number) => {
    }


    // -------------- PLANSETTINGS

    getAllPlanSettings = () => {
    }

    getPlanSettingById = (planSettingId: number) => {
    }

    //getPlanSettingByAnimal ?

    createPlanSetting = (planSetting: PlanSetting) => {
    }

    updatePlanSetting = (planSetting: PlanSetting) => {}

    deletePlanSetting = (planSettingId: number) => {
    }


    // -------------- SCHEDULEDAY

    getAllScheduleDays = () => {
    }

    getScheduleDayById = (scheduleDayId: number) => {
    }

    createScheduleDay = (scheduleDay: ScheduleDay) => {
    }

    updateScheduleDay = (scheduleDay: ScheduleDay) => {}

    deleteScheduleDay = (scheduleDayId: number) => {
    }

    // -------------- WIKI


}

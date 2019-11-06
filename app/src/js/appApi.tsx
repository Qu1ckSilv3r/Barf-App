import 'whatwg-fetch'

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


    // -------------- LOGIN

    login = (username: string, password: string) => {
        this.buildRequest({
            url: '/login'
        })

    }

    // -------------- ANIMALS

    // -------------- BARFUSER

    // -------------- COMPONENTS

    // -------------- FEEDLIST

    // -------------- NUTRITIONS

    // -------------- PLANSETTINGS

    // -------------- SCHEDULEDAY

    // -------------- WIKI


}

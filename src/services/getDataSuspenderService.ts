import { User } from "../interfaces/userInterfaces"
import { getSuspenders } from "./utils/getSuspenders";


export const fetchData = (url: string) => {

    const responsePromise  = fetch( url )
    .then(( response: Response ) => response.json())
    .then(( data: User[] ) => data)

    return getSuspenders(responsePromise);
}

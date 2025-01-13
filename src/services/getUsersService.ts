import { User } from '../interfaces/userInterfaces';

export const getUsersService = (url: string, abortController: AbortController) => {

	return fetch( url, abortController )
    .then(( response: Response ) => response.json())
    .then(( data: User[] ) => data)
};

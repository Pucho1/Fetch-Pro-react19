import { useEffect, useState } from 'react'
import { User } from '../interfaces/userInterfaces';
import { getUsersService } from '../services/getUsersService';

export const useGetData = (url: string) => {

	const [data, setData] = useState<User[]>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null >(null);
	const [abortFetch, setAbortFetch] = useState<AbortController | null>(null);


	useEffect(( ) => {
		const abortController = new AbortController();
		setLoading(true);

		setAbortFetch(abortController);

    getUsersService(url, abortController)
      .then((data) => setData(data))
		  .finally(() => setLoading(false))

    return () => abortController.abort();
	}, [])

	const handlerCancelRequest = (): void => {
		if( abortFetch && loading){
			setError('Request cancelled')
			console.log('Request cancelled', abortFetch)

			abortFetch.abort() 
		};
	};

	return { data, loading, error, handlerCancelRequest}
};


export const getSuspenders = (responsePromise: Promise<any>) => {
	let status: string = 'pending';
	let result: any;

	const suspender = responsePromise.then(
		(res) => { 
			status = 'success';
			result = res;
		},
		(error) => {
			status = 'error';
			result = error;
		}
	);

	const read = () => {
		switch (status) {
			case 'pending':
				throw suspender; // Suspende hasta que el fetch termine
			case 'error':
			throw result; // Lanza el error
				case 'success':
			return result; // Devuelve los datos
				default:
			throw new Error('Unexpected state');
		}
	};

  return { read };
};

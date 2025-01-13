import { Suspense } from 'react'

import './App.css'
import { fetchData } from './services/getDataSuspenderService'
import UserList from './components/UserList'
import { User } from './interfaces/userInterfaces'
// import { useGetData } from './hooks/useGetData';
// import { User } from './interfaces/userInterfaces'

const appData = fetchData('https://jsonplaceholder.typicode.com/users')

function App() {

  const data: User[] = appData.read();

// Pro Version - Render as you fetch
  return (
    <>
      <div className='card'>
        <h1>Fetch like a pro</h1>
        <Suspense fallback="Is loading ...">
          <UserList data={ data } />
        </Suspense>
      </div>
    </>
  )

// useFetch hook version
  // const { data, loading, error, handlerCancelRequest } = useGetData('https://jsonplaceholder.typicode.com/users');

  // if(loading) { return <> <h1>Is loading</h1></>}

  //   <button onClick={handlerCancelRequest}> Cancel Request </button>

  //   <div className='card'>
  //     <h1>Fetch like a pro</h1>
  //     {error && <h1>has a error {error}</h1>}
  //     {loading && <h1>Is loading</h1>}
  //     <ul>
  //       { data?.map(( user: User ) => <li key={user.id}> {user.name}</li>  )}
  //     </ul>
  //   </div>
}

export default App

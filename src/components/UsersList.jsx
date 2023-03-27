import React, { useEffect, useState } from 'react';

let url = 'https://dummyjson.com/users';
// url = 'json.com/users';

function SingleUser(props) {
  return (
    <li>
      {props.firstName} {props.lastName}
    </li>
  );
}

function UsersList() {
  const [usersArr, setUsersArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gotError, setGotError] = useState('');
  // keletas komponento stadiju
  // 1. Loading - siunciames - vyksta loading
  // 2. Sekmingai parsiusta - nevyksta loading, nera klaidu
  // 3. Nepavyko parsisiusti - nevyksta loading, yra klaidu

  // mes neturim vartotoju jei?
  const neturimVartotju = !usersArr.length;

  useEffect(() => {
    async function getUsers() {
      // fetch
      setIsLoading(true);
      try {
        const resp = await fetch(url);
        const dataInJs = await resp.json();
        console.log('dataInJs ===', dataInJs.users);
        setUsersArr(dataInJs.users);
        setIsLoading(false);
      } catch (error) {
        console.warn('error', error);
        setIsLoading(false);
        setGotError('kazkas nutiko oj oj oj');
      }
    }
    getUsers();
  }, []);

  const showNoUsers = neturimVartotju && !isLoading && !gotError;
  return (
    <div>
      <h2>UsersList {isLoading.toString()}</h2>
      {isLoading && <h3>Loading...</h3>}
      {showNoUsers && <h3>Siuo metu vartotoju nera</h3>}
      {gotError && !isLoading && <h3>Ivyko klaida: {gotError}</h3>}
      <ul>
        {usersArr.map((uObj) => (
          <SingleUser key={uObj.id} lastName={uObj.lastName} firstName={uObj.firstName} />
        ))}
      </ul>
    </div>
  );
}

export default UsersList;

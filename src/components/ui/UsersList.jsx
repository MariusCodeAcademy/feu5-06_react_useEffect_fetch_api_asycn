import React, { useEffect, useState } from 'react';

const url = 'https://dummyjson.com/users';

function UsersList() {
  const [usersArr, setUsersArr] = useState([]);
  // mes neturim vartotoju jei?
  const neturimVartotju = !usersArr.length;

  useEffect(() => {
    async function getUsers() {
      // fetch
    }
    getUsers();
  }, []);

  return (
    <div>
      <h2>UsersList</h2>
      {neturimVartotju && <h3>Siuo metu vartotoju nera</h3>}
      <ul>
        {usersArr.map((uObj) => (
          <li>users</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;

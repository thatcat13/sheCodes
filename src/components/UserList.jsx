import React from 'react';
import User from './User';

const masterUserList = [
  {
    firstname: 'cat',
    lastname: 'janowitz',
    email: 'cat@cat.com'
  },
  {
    firstname: 'izzy',
    lastname: 'janowitz',
    email: 'izzy@izzy.com'
  },
  {
    firstname: 'hans',
    lastname: 'janowitz',
    email: 'hans@hans.com'
  }
];

function UserList(){
  return (
    <div>
      <hr/>
      {masterUserList.map((user, index) =>
        <User firstname={user.firstname}
          lastname={user.lastname}
          email={user.email}
          key={index}/>
      )}
    </div>
  );
}

export default UserList;

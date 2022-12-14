import * as React from "react";
// import "./styles.css";

export default function User ()
{
  const [ users, setUsers ] = React.useState( [] );
  const f = async () =>
  {
    const res = await fetch( "https://reqres.in/api/users/" );
    const json = await res.json();
    setUsers( json.data );
    console.log( json.data );
  };
  React.useEffect( () =>
  {
    f();
  }, [] );
  return (
    <div className="App">
      <h1>Hello ReqRes users!</h1>
      <div className="d-flex flex-wrap justify-content-around m-4 text-center">
        {users.length &&
          users.map( ( user ) =>
          {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} alt='img' />
              </div>
            );
          } )}
      </div>
    </div>
  );
}

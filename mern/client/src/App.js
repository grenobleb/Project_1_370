import React, { useState, useEffect } from 'react';
function App() {
const [users, setUsers] = useState([]);
useEffect( () => {
fetch('http://localhost:3000/users') // Fetch from backend
.then( (response) => response.json() )
.then( (data) => setUsers(data));
},
[]
);
return (
<div>
<h1>User List</h1>
<ul>
{ users.map( (user) => (
<li key={user._id}>{user.name} - {user.occupation}</li>
)
)
}
</ul>
</div>
);
} // end function App()
export default App;


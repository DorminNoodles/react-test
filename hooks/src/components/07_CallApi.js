import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CallApi() {

	const [users, setUsers] = useState(0);


	useEffect(() => {

		console.log("UseEffect Ping");

		axios.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => {
					console.log(res);
					setUsers(res.data);
				})
	},[setUsers])

	console.log(users);
	return (
		<div>
			<h2>07 CallApi</h2>
			{
				users &&
				users.map((elem) => {
					console.log("USER !");
					return (
						<div key={elem.id}>
							<p>{elem.name}</p>
						</div>
					)
				})
			}
		</div>
	)

}

export default CallApi;

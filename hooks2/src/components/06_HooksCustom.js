import React, { useState, useEffect } from 'react';



function SubscribeApi(friendID, handleStatusChange) {
	handleStatusChange({isOnline: true});
}

function UnsubscribeApi(friendID, handleStatusChange) {
	// handleStatusChange({isOnline: false});
}


function HooksCustom(friendID = 1){

	const [isOnline, setIsOnline] = useState(null);

	useEffect(() => {
		console.log("06 HooksCustom : UseEffect !");

		function handleStatusChange(status) {
			setIsOnline(status.isOnline);
		}

		SubscribeApi(friendID, handleStatusChange);
		return UnsubscribeApi(friendID, handleStatusChange);
	})

	return (
		<div>
			{console.log("fuccccck")}
			<h1>06 HooksCustom</h1>
			<p>{isOnline}</p>
		</div>
	);

}

export default HooksCustom;

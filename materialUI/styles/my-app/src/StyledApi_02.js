import React from 'react';
import { styled } from '@material-ui/styles';
// import Button from '@material-ui/core/Button';
import Button from './Button';

/*
/!\ FOR HAND MADE COMPONENT NEED TO GET CLASSNAME BY PROPS /!\
*/

const MyButton = styled(Button)({
	background: '#3399EE',
	color: 'white',
	'&:hover': {
	 background: 'red',
	 color: '#FFDD22'
   }
})

const StyledApi_02 = () => {
	return(
		<div>
			<MyButton>My Button</MyButton>
		</div>
	)
}

export default StyledApi_02;

import React from 'react';
import Main from './main';
import './style.scss';
export default function Layout() {
	return (
		<div className='body-wraper'>
			<header className='d-block d-md-none bg-primary p-3'>
				SURAFE KAS | intro
			</header>
			<Main />
			<footer
				className='d-block d-md-none text-center mt-5 py-3 bg-primary'
				style={{ opacity: '0.5' }}
			>
				{new Date().getFullYear()}
			</footer>
		</div>
	);
}

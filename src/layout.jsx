import React from 'react';
import Main from './main';
import './style.scss';
export default function Layout() {
	return (
		<div className='body-wraper'>
			<header className='d-block d-md-none bg-primary p-3 fixed-top'>
				SURAFE KAS | surafekas@gmail.com
			</header>
			<Main />
			<hr />
			<footer className='text-center mt-5 py-3 bg-sm-primary bg-md-inherit'>
				<div className='container'>
					<div className='row  '>
						<div className='col d-flex flex-column justify-content-center align-items-center'>
							<p className='mb-1'>
								Full Stack Developer | Typescript | Java | C# |
								JavaScript | Node.js | SQL | React | Angular |
								SpringMVC | CI/CD ...
							</p>

							<p className='mb-2 medium-text'>
								Contact: surafekas@gmail.com
							</p>
							<p className='mb-0 medium-text'>
								Grateful for the valuable resources..
							</p>
						</div>
						<div className='col-12'></div>
						<div className='col-12'></div>
					</div>
				</div>
			</footer>
		</div>
	);
}

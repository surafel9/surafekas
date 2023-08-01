import React from 'react';
import GitHub from './icons/githubSvg';

import WorkHistory from './workHistory';

import { WORK_HISTORY_DATA } from './WORK_HISTORY_DATA';
import { PROJECTS_DATA } from './PROJECTS_DATA';
import Projects from './projects';
import Linkedin from './icons/linkedIn';

export default function Main() {
	return (
		<div className='container my-5 '>
			<div className='row p-2 '>
				<div className='col-12 col-md-5 mb-5'>
					<ShortSummary />
				</div>
				<div className='col col-md-7'>
					<DetailDescription />
				</div>
			</div>
		</div>
	);
}

function ShortSummary() {
	return (
		<div className='side-bar-relative'>
			<div className='side-bar-fix'>
				<div className='row flex-column md-px-5 '>
					<div className='col-xs-12 main-header-content'>
						<h1 className='high-text'>Surafe Kas</h1>
						<h2 className='medium-text'>Full-Stack Developer</h2>
						<p className='header text'>
							Experienced Full Stack Developer with a passion for
							crafting accessible and high-performance web
							experiences. I thrive on delivering multiple
							projects using Agile methodologies and CI/CD
							practices. Continuous learning drives my journey as
							a developer, ensuring that I stay at the forefront
							of the industry.
						</p>
					</div>
					<div className='col-xs-12 social'>
						<div className='row social-icons'>
							<div className='col-auto'>
								<a
									href='https://github.com/surafel9'
									target='_blank'
									rel='noopener noreferrer'
								>
									<GitHub />
								</a>
							</div>
							<div className='col-auto'>
								<a
									href='https://www.linkedin.com/in/surafe-kas-09b450286/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Linkedin />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function DetailDescription() {
	return (
		<div className='row flex-column'>
			<div className='col about mb-5'>
				<h3 className='d-block d-md-none high-text'>About me</h3>
				<p className='text'>
					My coding journey began in 2013 during my pursuit of a
					master's in disease prevention . Initially drawn to medical
					science, my perspective shifted dramatically when I delved
					into R and Python for data analysis. Block by block, I found
					myself captivated by the world of computer science,
					ultimately leading me to switch career paths.
				</p>
				<p className='text'>
					What I love about computer science is the vibrant community
					and the spirit of resource-sharing. Unlike life science,
					where experimentation and research can be costly, computer
					science offers a wealth of freely accessible tools and
					knowledge. While there are still expenses involved in
					learning and practicing computer science, the abundance of
					resources has contributed to its rapid growth.
				</p>{' '}
				<p className='text'>
					I am driven by the endless possibilities that computer
					science presents and the ability to create, innovate, and
					problem-solve. Through continuous learning and staying at
					the forefront of technology, I strive to make a meaningful
					impact in the digital landscape.
				</p>
				<p className='text'>
					I have experience working on various projects, including
					government applications, startups, small business standalone
					applications, freelancing, full-time jobs, and pro bono
					services.
				</p>
			</div>
			<WorkHistory data={WORK_HISTORY_DATA} />
			<Projects data={PROJECTS_DATA} />
			<div className='row my-5'>
				<div className='col'>
					<a
						href='/kas_resume.pdf'
						target='_blank'
						rel='noopener noreferrer'
						style={{ textDecoration: 'underline' }}
					>
						View My Resume (PDF) - Opens in new page
					</a>
				</div>
			</div>
		</div>
	);
}

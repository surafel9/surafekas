import React from 'react';
import GitHub from './icons/githubSvg';
import Instagram from './icons/instagramSvg';
import Twitter from './icons/twitterSvg';
import WorkHistory from './workHistory';

import { WORK_HISTORY_DATA } from './WORK_HISTORY_DATA';
import { PROJECTS_DATA } from './PROJECTS_DATA';
import Projects from './projects';

export default function Main() {
	return (
		<div className='container my-5 '>
			<div className='row py-5 '>
				<div className='col col-md-5 position-relative'>
					<div className='left-barr sticky-top '>
						<div className='row flex-column px-5'>
							<div className='col main-header-content'>
								<h1 className='high-text'>Surafe Kas</h1>
								<h2 className='medium-text'>
									Fullstack developer
								</h2>
								<p className='header text'>
									Independent Contractor Engineer crafting
									accessible, high-performance, inclusive web
									experiences. Passionate about
									problem-solving, continuous learning, and
									positive impact on the digital landscape.
								</p>
							</div>
							<div className='col social'>
								<div className='row social-icons'>
									<div className='col-1'>
										<a href='#'>
											<GitHub />
										</a>
									</div>
									<div className='col-1'>
										<a href='#'>
											<Instagram />
										</a>
									</div>
									<div className='col-1'>
										<a href='#'>
											<Twitter />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col col-md-7'>
					<div className='row flex-column'>
						<div className='col about mb-5'>
							<p className='text'>
								My coding journey began in 2013 during my
								pursuit of a master's in disease prevention .
								Initially drawn to medical science, my
								perspective shifted dramatically when I delved
								into R and Python for data analysis. Block by
								block, I found myself captivated by the world of
								computer science, ultimately leading me to
								switch career paths.
							</p>
							<p className='text'>
								What I love about computer science is the
								vibrant community and the spirit of
								resource-sharing. Unlike life science, where
								experimentation and research can be costly,
								computer science offers a wealth of freely
								accessible tools and knowledge. While there are
								still expenses involved in learning and
								practicing computer science, the abundance of
								resources has contributed to its rapid growth.
							</p>{' '}
							<p className='text'>
								I am driven by the endless possibilities that
								computer science presents and the ability to
								create, innovate, and problem-solve. Through
								continuous learning and staying at the forefront
								of technology, I strive to make a meaningful
								impact in the digital landscape.
							</p>
							<p className='text'>
								I have experience working on various projects,
								including government applications, startups,
								small business standalone applications,
								freelancing, full-time jobs, and pro bono
								services.
							</p>
						</div>
						<WorkHistory data={WORK_HISTORY_DATA} />
						<Projects data={PROJECTS_DATA} />
					</div>
				</div>
			</div>
		</div>
	);
}

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import { PROJECTS_DATA } from '../data/PROJECTS_DATA';
import { WORK_HISTORY_DATA } from '../data/WORK_HISTORY_DATA';
import About from './about';
import Projects from './projects';
import WorkHistory from './workHistory';

export default function DetailDescription({ handleVisibleComponent }) {
	const sectionRefs = {
		about: useRef(null),
		workHistory: useRef(null),
		projects: useRef(null),
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const windowHeight = window.innerHeight;

			for (const section in sectionRefs) {
				const sectionTop = sectionRefs[section].current.offsetTop;
				const sectionBottom =
					sectionTop + sectionRefs[section].current.clientHeight;

				if (
					sectionTop <= scrollTop + windowHeight * 0.5 &&
					sectionBottom >= scrollTop + windowHeight * 0.5
				) {
					handleVisibleComponent(section);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [sectionRefs]);
	return (
		<div className='row flex-column'>
			<div ref={sectionRefs.about}>
				<About />
			</div>
			<div ref={sectionRefs.workHistory}>
				<WorkHistory data={WORK_HISTORY_DATA} />
			</div>
			<div ref={sectionRefs.projects}>
				<Projects data={PROJECTS_DATA} />
			</div>
			<div className='row my-5'>
				<div className='col medium-text'>
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

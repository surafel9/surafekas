import React from 'react';

export default function Projects({ data }) {
	return (
		<div className='col work-history my-5'>
			{data.map((project) => (
				<div className='row gap-3 work-history-wraper' key={project.id}>
					<div className='col-4'>
						<h3>{project.title}</h3>
						<p className='text'>{project.description}</p>
						<div className='row'>
							{project.technologies.map((tech, index) => (
								<div className='col skill-btn' key={index}>
									{tech}
								</div>
							))}
						</div>
					</div>
					<div className='col-7'>
						<img
							src={project.img}
							alt={project.title}
							className='responsive'
							width='100%'
							d='block'
						/>
					</div>
				</div>
			))}
		</div>
	);
}

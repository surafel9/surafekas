import React from 'react';

export default function Projects({ data }) {
	return (
		<div className='col work-history my-5'>
			<h3 className='d-block d-md-none high-text'>Projects</h3>
			{data.map((project) => (
				<a
					href={project.url}
					target='_blank'
					rel='noopener noreferrer'
					key={project.id}
				>
					<div
						className='row flex-column flex-md-row gap-3 work-history-wraper '
						style={{ minHeight: '300px' }}
					>
						<div className='col-12 col-md-4 position-relative '>
							<img
								src={project.img}
								alt={project.title}
								className='img-fluid'
								style={{
									width: '100%',
									flexShrink: 0,
									objectFit: 'cover',
								}}
							/>
						</div>
						<div className='col-12 col-md-7 '>
							<h3>{project.title}</h3>
							<p className='text'>{project.description}</p>
							<div className='row'>
								{project.technologies.map((tech, index) => (
									<div
										className='col-auto skill-btn'
										key={index}
									>
										{tech}
									</div>
								))}
							</div>
						</div>
					</div>
				</a>
			))}
		</div>
	);
}

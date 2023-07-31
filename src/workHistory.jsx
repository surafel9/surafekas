import React from 'react';

export default function WorkHistory({ data }) {
	return (
		<div className='col work-history my-5'>
			{data.map((work) => (
				<div className='row gap-3 work-history-wraper' key={work.id}>
					<div className='col-4'>
						<p>{`${work.startDate} — ${work.endDate}`}</p>
					</div>
					<div className='col-7'>
						<h3 className='high-text'>{`${work.title} — ${work.employer}`}</h3>
						<p className='text'>{work.roleDescription}</p>
						<div className='row'>
							{work.mainTechnologies.map((tech, index) => (
								<div className='col skill-btn' key={index}>
									{tech}
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

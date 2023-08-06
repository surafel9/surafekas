import GitHub from '../icons/githubSvg';
import Linkedin from '../icons/linkedIn';

export default function ShortSummary() {
	return (
		<div className='row flex-column md-px-5 '>
			<div className='col-xs-12 '>
				<h1 className='high-text'>Surafe Kas</h1>
				<h2 className='medium-text'>Full-Stack Developer</h2>
				<p className='header text'>
					Experienced Full Stack Developer with a passion for crafting
					accessible and high-performance web experiences. I thrive on
					delivering multiple projects using Agile methodologies and
					CI/CD practices. Continuous learning drives my journey as a
					developer, ensuring that I stay at the forefront of the
					industry.
				</p>
			</div>
			<div className='col-xs-12 social'>
				<div className='row social-icons'>
					<div className='col-auto'>
						<a
							href='https://github.com/surkas/surafekas'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Visit my GitHub Profile'
						>
							<GitHub />
						</a>
					</div>
					<div className='col-auto'>
						<a
							href='https://www.linkedin.com/in/surafe-kas-09b450286/'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Visit my LinkedIn Profile'
						>
							<Linkedin />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

import React, { useState, useEffect, useRef } from 'react';
import ShortSummary from './shortSummary';
import DetailDescription from './detailDescription';

export default function Main() {
	const [viewPortWidth, setViewPortWidth] = useState(window.innerWidth);
	const [isSticky, setIsSticky] = useState(false);
	const [width, setWidth] = useState('auto');
	const [containerWidth, setContainerWidth] = useState('auto');
	const sideBarRef = useRef(null);
	const containerRef = useRef(null);
	const [activeComponent, setActiveComponent] = useState('about');

	const handleVisibleComponent = (component) => {
		setActiveComponent(component);
	};

	useEffect(() => {
		const handleResize = () => {
			setViewPortWidth(window.innerWidth);

			if (viewPortWidth >= 768) {
				const element = sideBarRef.current;
				const containerElement = containerRef.current;

				if (element && containerElement) {
					const rect = element.getBoundingClientRect();
					setContainerWidth(containerElement.offsetWidth);

					if (viewPortWidth >= 768) {
						setIsSticky(true);
						setWidth(`${rect.width}px`);
					} else {
						setIsSticky(false);
						setWidth('auto');
					}
				}
			} else {
				setIsSticky(false);
				setWidth('auto');
			}
		};
		handleResize();

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [viewPortWidth]);
	return (
		<div className='container my-5' ref={containerRef}>
			<div className='row p-2'>
				<div className='col-12 col-md-5 mb-5'>
					<div
						style={{
							width,
							top: 'auto',
							left: `${
								(parseInt(viewPortWidth) -
									parseInt(containerWidth)) /
								2
							}px`,
						}}
						ref={sideBarRef}
						className={isSticky ? ' fixed-top ' : ''}
					>
						<ShortSummary />
						<h3
							style={{
								marginTop: '100px',
								fontVariant: 'small-caps',
							}}
							className='d-none d-md-block'
						>
							{activeComponent}
						</h3>
					</div>
				</div>

				<div className='col col-md-7'>
					<DetailDescription
						handleVisibleComponent={handleVisibleComponent}
					/>
				</div>
			</div>
		</div>
	);
}

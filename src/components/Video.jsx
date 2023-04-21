import React, { useState, useRef, useEffect } from 'react';

import styles from '@/src/styles/Video.module.css';

const Video = ({ videoHiding }) => {
	const [ isPlaying, setIsPlaying ] = useState(true);
	const [ isHiding, setIsHiding ] = useState(false);
	const videoRef = useRef(null);

	const handleEnd = () => {
		setIsPlaying(false); 
	};

	const handleTimeUpdate = (evt) => {
		if (Math.round(evt.target.currentTime) === 28) {
			setIsHiding(true);
		};
	};

	useEffect(() => {
		videoHiding(isHiding);
	}, [ videoHiding, isHiding ]);

	return (
		<>
			{ isPlaying && (
				<div className={styles.video_container}>
      	<video
      		className={isHiding ? styles.onHiding : styles.video}
      		width='600'
      		height='800'
      		autoPlay
      		controls
      		muted={true}
      		playsInline={true}
      		poster='/assets/video/promo_mural snapshot.png'
      		ref={videoRef}
      		onEnded={handleEnd}
				  onTimeUpdate={handleTimeUpdate}
      	>
      		<source 
      			src='/assets/video/promo_mural mobile.webm'
      			type='video/webm'
      		/>
      		<source 
      			src='/assets/video/promo_mural mobile.mp4'
      			type='video/mp4'
      		/>
      	</video>
				</div>
			)}
		</>
	);
};

export default Video;

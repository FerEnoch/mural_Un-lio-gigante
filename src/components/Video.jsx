import React, { useState, useRef, useEffect } from 'react';

import styles from '@/src/styles/Video.module.css';

const VIDEO_FINISH_SEC = 32;

const Video = ({ videoHiding }) => {
	const [ isPlaying, setIsPlaying ] = useState(true);
	const [ isHiding, setIsHiding ] = useState(false);
	const videoRef = useRef(null);

	const handleEnd = () => {
		setIsPlaying(false); 
	};

	const handleTimeUpdate = (evt) => {
		if (Math.round(evt.target.currentTime) === VIDEO_FINISH_SEC) {
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
      		className={`${styles.video} ${isHiding && styles.onHiding}`}
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
      			src='/assets/video/promo_mural.webm'
      			type='video/webm'
      		/>
      		<source 
      			src='/assets/video/promo_mural.mp4'
      			type='video/mp4'
      		/>
      	</video>
				</div>
			)}
		</>
	);
};

export default Video;

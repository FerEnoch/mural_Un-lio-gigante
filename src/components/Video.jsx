import React from 'react';
import styles from '@/src/styles/Video.module.css';

const Video = () => {
	return (
		<div className={styles.video_container}>
			<video
				className={styles.video}
				width='600'
				height='800'
				autoplay='true'
				controls
				muted='true'
				playsInline='true'
				poster='/assets/video/promo_mural snapshot.png'
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
	);
};

export default Video;

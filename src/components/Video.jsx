import React, { useState, useRef, useEffect } from 'react';
import styles from '@/src/styles/Video.module.css';


const VIDEO_FINISH_SEC = 32;

const Video = ({ videoHiding }) => {
	const [ isPlaying, setIsPlaying ] = useState(true);
	const [ isHiding, setIsHiding ] = useState(false);
	const [ videoSetting, setVideoSetting ] = useState(null);
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
		if (window.innerWidth / window.innerHeight > 1) {
			setVideoSetting({
				'aspect-ratio': 'widescreen',
				width: 1920,
				height: 1080,
				sources: [
					{
						src: '/assets/video/promo_mural widescreen.webm',
						type: 'video/webm'
					},
					{
						src: '/assets/video/promo_mural widescreen.mp4',
						type: 'video/mp4'
					}
				],
				poster: '/assets/video/promo_mural snapshot widescreen.png'
			});
		} else {
			setVideoSetting({
				'aspect-ratio': 'portrait',
				width: 1080,
				height: 1920,
				sources: [
					{
						src: '/assets/video/promo_mural.webm',
						type: 'video/webm'
					},
					{
						src: '/assets/video/promo_mural.mp4',
						type: 'video/mp4'
					}
				],
				poster: '/assets/video/promo_mural snapshot.png'
			});
		}
	}, []);
	
	useEffect(() => {
		videoHiding(isHiding);
	}, [ videoHiding, isHiding ]);

	return (
		<>
			{ isPlaying && videoSetting && (
				<div className={styles.video_container}>
      	<video
      		className={`${styles.video} ${isHiding && styles.onHiding}`}
      		width={videoSetting.width}
      		height={videoSetting.height}
      		autoPlay
      		controls={true}
      		muted={true}
      		playsInline={true}
      		poster={videoSetting.poster}
      		ref={videoRef}
      		onEnded={handleEnd}
				  onTimeUpdate={handleTimeUpdate}
      	>
						{
							videoSetting.sources.map((video, i) => {
								return (
									<source
										key={i} 
										src={video.src}
										type={video.type}
									/>
								);
							})
						}
      	</video>
				</div>
			)}
		</>
	);
};

export default Video;

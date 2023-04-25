import React, { useState, useRef, useEffect } from 'react';
import Volume_up_button from '@/src/components/UI/svg/Volume_up_button';
import Volume_off_button from '@/src/components/UI/svg/Volume_off_button';
import styles from '@/src/styles/Video.module.css';


const VIDEO_FINISH_SEC = 32;
const TITLE_APPEAR = 15;


const Video = ({ videoHiding, titleApparition }) => {
	const [ isPlaying, setIsPlaying ] = useState(true);
	const [ isHiding, setIsHiding ] = useState(false);
	const [ titleAppear, setTitleAppear ] = useState(false);
	const [ videoSetting, setVideoSetting ] = useState(null);
	const [ volume, setVolume ] = useState({ muted: true });

	const handleEnd = () => {
		setIsPlaying(false); 
	};

	const handleTimeUpdate = (evt) => {
		if (Math.round(evt.target.currentTime) === TITLE_APPEAR) {
			setTitleAppear(true);
		}
		if (Math.round(evt.target.currentTime) === VIDEO_FINISH_SEC) {
			setIsHiding(true);
		};
	};

	const handleVolume = () => {
		if (volume.muted) {
			setVolume({ muted: false });
		} else {
			setVolume({	muted: true });
		}
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
	
	useEffect(() => {
		titleApparition(titleAppear);
	}, [ titleApparition, titleAppear ]);

	return (
		<>
			{ isPlaying && videoSetting && (
				<div className={styles.video_container}>
      	<video
      		className={`${styles.video} ${isHiding && styles.onHiding}`}
      		width={videoSetting.width}
      		height={videoSetting.height}
      		autoPlay
      		muted={volume.muted}
      		playsInline={true}
      		poster={videoSetting.poster}
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
					<div 
						className={styles.volume_buttons}
						onClick={handleVolume}
					>
						{
							volume.muted ? 
								<Volume_off_button /> :
								<Volume_up_button /> 
						}
					</div>
				</div>
			)}
		</>
	);
};

export default Video;

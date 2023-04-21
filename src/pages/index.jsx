import Head from 'next/head';
import Image from 'next/image';
import Video from './../components/Video';

import styles from '@/src/styles/Home.module.css';

import building from '@/public/assets/El sueño del pibe - mural - Andres Iglesias - niño de cobre.webp';
import { useState } from 'react';

export default function Home() {
	const [ appearImage, setAppearImage ] = useState(false);

	const handleVideoHiding = (videoIsHiding) => {
		setAppearImage(videoIsHiding);
	}; 

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<title>Un Lio gigante</title>
				<meta name='description' content='El mural "El sueño del pibe" es el más grande del mundo jamás pintado en honor a un deportista, y se encuentra en la ciudad de Santa Fe, Argentina. Fue realizado en reconocimiento al astro del fútbol Lionel Messi, por el muralista mundialmente reconocido Andrés Petroselli (a.k.a "Niño de Cobre"), sobre una pared de edificio de 75 mtrs. de altura.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<div className={styles.container}>
					<Video videoHiding={handleVideoHiding} />
					{ appearImage && 
					<Image
						className={styles.building}
						src={building}
						width={2659}
						height={4097}
						alt='Pared blanca, parte trasera de un edificio de aproximadamente 75 metros de altura, donde se pintará el mural más grande del mundo dedicado al astro del fútbol mundial: Lionel Messi'
						priority
					/>}
				</div>
				{ appearImage && (
					<>
						<h1 className={styles.title}>&nbsp; &nbsp; &nbsp; muy pron10...</h1>
						<h1 className={styles.subtitle}>...y será gigante</h1>
					</>
				)}
			</main>
		</>
	);
}

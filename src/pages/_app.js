import localFont from 'next/font/local';
import '@/src/styles/globals.css';

const mecha_bold = localFont({ 
	src: '../../public/font/mecha_bold-webfont.woff2',
	style: 'bold',
	display: 'block',
	adjustFontFallback: false
});

const mecha_mechanic = localFont({
	src: '../../public/font/mecha_mechanic-webfont.woff2',
	style: 'bold' 
});


export default function App({ Component, pageProps }) {
	return (
		<>
			<style jsx global>{`
				:root {
					--font-title: ${mecha_bold.style.fontFamily}, ${mecha_mechanic.style.fontFamily}, sans serif;
				}
			`}
			</style>	
			<Component {...pageProps} />
		</>
	);
}

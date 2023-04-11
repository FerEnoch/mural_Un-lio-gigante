import '@/src/styles/globals.css';
import localFont from 'next/font/local';


const mecha_bold = localFont({ src: '../assets/font/mecha_bold copy.ttf' });


export default function App({ Component, pageProps }) {
	return <Component className={mecha_bold.className} {...pageProps} />;
}

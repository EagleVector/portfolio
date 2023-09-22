import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Subham Kumar',
	description: 'Software Developer with 1 year of experience',
	icons: {
		icon: ['/favicon.ico?v=4'],
		apple: ['/apple-touch-icon.png?v=4'],
		shortcut: ['/apple-touch-icon.png']
	}
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className='!scroll-smooth'>
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
			>
				<div className="bg-[#f4d1d2] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>

				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
				<ActiveSectionContextProvider>
					<Header />
					{children}
					<Footer />
					<Toaster position='top-right' />
				</ActiveSectionContextProvider>
			</body>
		</html>
	);
}

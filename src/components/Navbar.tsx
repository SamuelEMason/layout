import Link from 'next/link';
import { FC } from 'react';
import { HomepageTranslations } from '../lib/HomepageTranslations';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<header className='w-full flex flex-row justify-between items-center h-12'>
			<Link
				href='/'
				className='flex items-center justify-center w-12 h-8 bg-amber-800 animate-bounce'
			>
				{HomepageTranslations.logo}
			</Link>
			<nav>
				<ul className='flex'>
					{HomepageTranslations.navLinks.map((link) => (
						<Link
							key={link}
							href={`/${link}`}
							className='mr-8 hover:bg-slate-700 font'
						>
							{link}
						</Link>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;

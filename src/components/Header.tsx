import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { HiBars3, HiXMark } from 'react-icons/hi2'

import ScrollTo from '../hooks/ScrollTo'
import useScrollPosition from '../hooks/useScrollPosition'

import Trex from './../assets/trex.svg'
import '../styles/Header.css'

function Header() {
	const [isNavbarOpen, setIsNavbarOpen] = useState(true)
	const ref = useRef<HTMLInputElement>(null)
	const scrollPosition = useScrollPosition()

	useEffect(() => {
		function handleClickOutside(event: any) {
			if (ref.current && !ref.current?.contains(event.target)) {
				setIsNavbarOpen(true)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref])

	const Items = [
		{ key: 1, label: 'Projects', link: '/#projects' },
		{ key: 2, label: 'About', link: '/#about' },
		{ key: 3, label: 'Contact', link: '/#contact' },
	]

	return (
		<header className={`header ${scrollPosition >= 100 ? 'shadow-lg' : ''}`}>
			<ScrollTo />
			<div className='header_wrapper'>
				<div className='logo_menu'>
					<div className='logo'>
						<NavLink to='/'>
							<img
								src={Trex}
								alt='Trex Emoji'
								aspect-ratio='1:1'
								width='32'
								height='32'
							/>{' '}
							<span className='logo__name'>benilio.</span>
						</NavLink>
					</div>
					<div
						className='menu'
						onClick={() => setIsNavbarOpen(!isNavbarOpen)}
					>
						{isNavbarOpen ? (
							<HiBars3
								title='menu'
								className='menu__icon'
							/>
						) : (
							<HiXMark
								title='menu'
								className='menu__icon'
							/>
						)}
					</div>
				</div>
				<nav
					ref={ref}
					className={`navigation ${isNavbarOpen ? 'hidden' : 'flex'} }
          md:flex`}
				>
					<ul>
						{Items.map((Item) => (
							<li key={Item.key}>
								<NavLink
									onClick={() => setIsNavbarOpen(true)}
									className='navigaton__link'
									to={Item.link}
								>
									{Item.label}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header

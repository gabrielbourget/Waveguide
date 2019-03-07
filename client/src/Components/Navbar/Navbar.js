import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';

import styles from './Navbar.module.scss';
import { prepareComponent } from './helpers';

import CircleButton from '../Buttons/CircleButton/CircleButton';
import OutlineButton from '../Buttons/OutlineButton/OutlineButton';
import SearchBar from '../SearchBar/SearchBar';

import { ReactComponent as HamburgerMenuDarkTheme } from './SVG/HamburgerMenu/HamburgerIconDarkTheme.svg';
import { ReactComponent as HamburgerMenuLightTheme } from './SVG/HamburgerMenu/HamburgerIconLightTheme.svg';
import { ReactComponent as HamburgerMenuHighlighted } from './SVG/HamburgerMenu/HamburgerIconHighlighted.svg';

import { ReactComponent as XIconDarkTheme } from './SVG/XIcon/XIconDarkTheme.svg';
import { ReactComponent as XIconLightTheme } from './SVG/XIcon/XIconLightTheme.svg';
import { ReactComponent as XIconHighlighted } from './SVG/XIcon/XIconHighlighted.svg';

class Navbar extends React.Component {

	state = {
		menuActive: false
	};

	static propTypes = {
		onSideMenuButtonClick: PropTypes.func.isRequired
	};

	// - Expect onClick function for side menu which will dispatch
	// 	 an action to the store to change the side menu's state from 
	// 	 closed to open. That function passed in from somewhere else
	// 	 will handle all responsibilities associated with the side menu.
	// 	 All the navbar cares about it what icon to show. 
	handleSideMenuButtonClick = () => {
		this.props.onSideMenuButtonClick(this.state.menuActive);
		// - For now, simulate click by toggling menuActive manually.
		const prevState = this.state;
		this.setState((prevState) => (
			{ menuActive: !prevState.menuActive }
		));
	};

	render() {

		const initObject = prepareComponent(this.context, this.props, styles, this.state);

		return (
			<div className={ initObject.navbarClasses }>
				<div className={ initObject.sideMenuButtonClasses }>
					{
						this.state.menuActive ?
						<CircleButton 
							size='20px'
							darkTheme={ <XIconDarkTheme/> }
							lightTheme={ <XIconLightTheme/> }
							highlighted={ <XIconHighlighted/> }
							onClick={ this.handleSideMenuButtonClick }
						/> :
						<CircleButton 
							size='20px'
							darkTheme={ <HamburgerMenuDarkTheme/> }
							lightTheme={ <HamburgerMenuLightTheme/> }
							highlighted={ <HamburgerMenuHighlighted/> }
							onClick={ this.handleSideMenuButtonClick }
						/>						
					}

				</div>
				<SearchBar defaultText='Search by artist name.'/>
				<div className={ initObject.rightNavClasses }>
					{/* Once routing is set up, put link to documentation here. */}
					<OutlineButton 
						text='Documentation'
						onClick={ () => {} }
					/>

				  {/* Once routing is set up, put link to about section here. */}
					<OutlineButton 
						text='About'
						onClick={ () => {} }
					/>

					{/* Link to personal website */}
{/*					<a 
						href='https://www.gabrielbourget.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<OutlineButton text='Personal Website'/>
					</a>*/}
				</div>
			</div>
		);
	}
}

Navbar.contextType = ThemeContext;

export default Navbar;
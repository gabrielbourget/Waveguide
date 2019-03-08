import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../ThemeContext';

import styles from './TopBar.module.scss';
import { prepareComponent } from './helpers';
import CircleButton from '../../../Buttons/CircleButton/CircleButton';

// - Sort Icon
import { ReactComponent as SortIconDarkTheme } from './SVG/SortIcon/SortIconDarkTheme.svg';
import { ReactComponent as SortIconLightTheme } from './SVG/SortIcon/SortIconLightTheme.svg';
import { ReactComponent as SortIconHighlighted } from './SVG/SortIcon/SortIconHighlighted.svg';
// - List View 
import { ReactComponent as ListViewIconDarkTheme } from './SVG/ListViewIcon/ListViewIconDarkTheme.svg';
import { ReactComponent as ListViewIconLightTheme } from './SVG/ListViewIcon/ListViewIconLightTheme.svg';
import { ReactComponent as ListViewIconHighlighted } from './SVG/ListViewIcon/ListViewIconHighlighted.svg';
// - Grid View
import { ReactComponent as GalleryViewIconDarkTheme } from './SVG/GalleryViewIcon/GalleryViewIconDarkTheme.svg';
import { ReactComponent as GalleryViewIconLightTheme } from './SVG/GalleryViewIcon/GalleryViewIconLightTheme.svg';
import { ReactComponent as GalleryViewIconHighlighted } from './SVG/GalleryViewIcon/GalleryViewIconHighlighted.svg';

class TopBar extends React.Component {

	state = {
		// - This will be mapped into props from state, so as to respect the redux pattern.
		//   For now, just pass it in manually until it can be threaded in dynamically from
		//   the user settings.
		//   
		//   Also, potential landmine, since I'm not completely confident on managing components
		//   who's state depends on props values that are dynamic. Not sure if redux handles this, 
		//   since the props passed in are just mapped state from the ArtistProfileDisplay container
		//   component generated through the redux connect() method. 
		displayMode: this.props.displayMode,
		sortMenuOpen: false
	};

	handleSortButtonClick = () => {
		// - Call some sort of toggleMenu function. Span out sort options into 
		//   the horizontal space to the left or into a vertical dropdown menu.
		this.toggleMenu();
	};

	toggleMenu = () => {
		const prevState = this.state;
		this.setState((prevState) => (
			{ sortMenuOpen: !prevState.sortMenuOpen }
		));
	};

	handleListDisplayButton = () => {
		console.log('List Display button');
	};

	handleGalleryDisplayButton = () => {
		console.log('Gallery Display button');
	};

	render() {

		const initObject = prepareComponent(this.context, this.props, styles, this.state);

		return (
			<div className={ initObject.topBarClasses }>
				<div className={ styles.left }>
					<h3>Artists</h3>
				</div>
				<div className={ styles.right }>
					{/* Sort Menu conditionally reveals itself */}
					{
						this.state.sortMenuOpen ?
						<React.Fragment>
							<p>Z > A</p>
							<p>A > Z</p> 
						</React.Fragment>	:
						null
					}				
					{/* Sort Menu Button */}
					<CircleButton
						size='25px'
						darkTheme={ <SortIconDarkTheme/> }
						lightTheme={ <SortIconLightTheme/> }
						highLighted={ <SortIconHighlighted/> }
						onClick={ this.handleSortButtonClick }
					/>
					{/* List Display Button */}
					<CircleButton
						size='25px'
						darkTheme={ <ListViewIconDarkTheme/> }
						lightTheme={ <ListViewIconLightTheme/> }
						highlighted={ <ListViewIconHighlighted/> }
						onClick={ this.handleListDisplayButton }
					/>
					{/* Gallery Display Button */}
					<CircleButton 
						size='25px'
						darkTheme={ <GalleryViewIconDarkTheme/> }
						lightTheme={ <GalleryViewIconLightTheme/> }
						highlighted={ <GalleryViewIconHighlighted/> }
						onClick={ this.handleGalleryDisplayButton }
					/>
				</div>
			</div>
		);
	}
}

TopBar.contextType = ThemeContext;

export default TopBar;
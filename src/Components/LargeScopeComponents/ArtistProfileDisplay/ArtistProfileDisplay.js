import React from 'react';
import { ThemeContext } from '../../../ThemeContext';

import TopBar from './TopBar/TopBar';
import ArtistGallery from '../../Galleries/ArtistGallery/ArtistGallery';
import ArtistTable from '../../Tables/ArtistTable/ArtistTable';
import FromTheTopCradle from '../../Cradles/FromTheTopCradle/FromTheTopCradle';

import styles from './ArtistProfileDisplay.module.scss';
import { prepareComponent } from './helpers';

class ArtistProfileDisplay extends React.Component {
		
	state = {
		displayMode: this.props.displayMode
	};

	switchViewMode = (displayMode) => {
		this.setState({displayMode});
	}

	resolveDisplayMode = (initObject) => {
		if (this.props.artists.length === 0) {
			return (
        <div className={ initObject.noResultsClasses }>
          <h4>Search for an artist up top in the navigation bar.</h4>
          <br/>
          <h4>
            Enter 'everyone' as the search term to return all <br/>
            artists contained in the community directory.
          </h4>
        </div>
			);
		}
		if (this.state.displayMode === 'gallery') {
			return (
				<ArtistGallery 
					// - This itself will eventually be props mapped in from the connect redux function. 
					artists={ this.props.artists }
				/>
			);
		}
		else if (this.state.displayMode === 'list') {
			return (
				<ArtistTable
					// - This itself will eventually be props mapped in from the connect redux function. 
					artists={ this.props.artists }
				/>
			);
		}
	};

	render() {
		const initObject = prepareComponent(this.context, this.props, styles, this.state);

		return (
			<FromTheTopCradle>
				<div className={ initObject.artistProfileDisplayClasses }>
					<TopBar 
						// - OLD -> onSortClick={ this.props.onSortClick }
						onSortAlphabeticalClick={ this.props.onSortAlphabeticalClick }
						onSortRevAlphabeticalClick={ this.props.onSortRevAlphabeticalClick }	
						onSwitchViewModeClick={ this.switchViewMode }
					/>
					{/* Method below renders out gallery or list, based on mapped state props */}
					{ this.resolveDisplayMode(initObject) }
				</div>				
			</FromTheTopCradle>
		);
	}
}

ArtistProfileDisplay.contextType = ThemeContext;

export default ArtistProfileDisplay;

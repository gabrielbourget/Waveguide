import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';

import IconDisplay from '../Icons/IconDisplay/IconDisplay';
import Paragraph from '../TextLayout/Paragraph/Paragraph';
import OutlineButton from '../Buttons/OutlineButton/OutlineButton';

import styles from './Footer.module.scss';
// import WaveIconDarkTheme from './SVG/WaveIcon/WaveIconDarkTheme';
import { ReactComponent as WaveIconDarkTheme } from './SVG/WaveIcon/WaveIconDarkTheme.svg';
import { ReactComponent as  WaveIconLightTheme } from './SVG/WaveIcon/WaveIconLightTheme.svg';

// import waveImageDarkTheme from './SVG/WaveIcon/WaveIconImageDarkTheme.png';
// import waveImageLightTheme from './SVG/WaveIcon/WaveIconImageLightTheme.png';

class Footer extends React.Component {
	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const footerClasses = ClassNames(styles.footer, themeClass); 

		return (
			<div className={ footerClasses }>
				<div className={ styles.logoAndDescription }>
					<div className={ styles.logo }>
						<IconDisplay
							size='75px'
							darkTheme={ <WaveIconDarkTheme/> }
							lightTheme={ <WaveIconLightTheme/> }
						/>


					</div>
					<div className={ styles.description }>
						<Paragraph fontSize='1.5rem'>
							Waveguide is developed and maintained by Gabriel Bourget. 
							While this application serves primarily as a web development
							portfolio project at the moment, I'm hoping to add increasing
							functionality to it as time goes on.
						</Paragraph>
					</div>					
				</div>

				<div className={ styles.links }>
					<a
						href='https://www.github.com/gabrielbourget/WaveMusicCommunity'
						target='_blank'
						rel='noopener noreferrer'
					>
						<OutlineButton
							text='Github Repository'
							shape='rounded'
							onClick={ () => {} }
						/>
					</a>
					<Link to='/'>
						<OutlineButton
							text='Home'
							shape='rounded'
							onClick={ () => {} }
						/>							
					</Link>
					<Link to='/documentation'>
						<OutlineButton
							text='Documentation'
							shape='rounded'
							onClick={ () => {} }
						/>							
					</Link>
				</div>
			</div>
		);
	}
}

Footer.contextType = ThemeContext;

export default Footer;

					 // {
					 // 	(this.context === 'dark') ?
					 // 	<img src={ waveImageDarkTheme } alt="Wave Icon Dark Theme"/> :
					 // 	<img src={ waveImageLightTheme } alt="WaveIconLightTheme"/>
					 // }

import React from 'react';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../ThemeContext';

import styles from './DocumentationTree.module.scss';
import { prepareComponent } from './helpers';
import documentationTree from '../documentationTree'

import TreeView from '../../../TreeView/TreeView';

class DocumentationTree extends React.Component {

	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<div className={ initObject.documentationTreeClasses }>
				<TreeView 
					data={ documentationTree }
					nodeClick={ this.props.nodeClick }
				/>
			</div>
		);
	}
}

DocumentationTree.contextType = ThemeContext;

export default DocumentationTree;

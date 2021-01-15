// imports
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';

// translation
import { __ } from '@wordpress/i18n';

// css
import './style.scss';
import './editor.scss';


registerBlockType( 'us/info-block', {
	apiVersion: 2,
	title: __( 'US Info Quote', 'info-block' ),
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'starter-block'
	),
	category: 'common',
	icon: 'info-outline',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
    },
 
	edit: ( { attributes, setAttributes } ) => {	
		const blockProps = useBlockProps();
				     
		return (
			<RichText	
				{ ...blockProps }				
				tagName="p"
				value={ attributes.content }
				formattingControls={ [ 'bold', 'italic' ] }
				onChange={ ( content ) => setAttributes( { content } ) }
				placeholder={ __( 'Heading...' ) }
			/>		
		);
    },
 
    save: ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		return (	
			<RichText.Content { ...blockProps }	 tagName="p" value={ attributes.content } />						
		);
    },

});

registerBlockType( 'us/alert-block', {
	apiVersion: 2,
	title: __( 'US Achtung Quote', 'alert-block' ),
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'starter-block'
	),
	category: 'common',
	icon: 'info-outline',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
    },
 
	edit: ( { attributes, setAttributes } ) => {	
		const blockProps = useBlockProps();
				     
		return (
			
			<RichText	
				{ ...blockProps }			
				tagName="p"
				value={ attributes.content }
				formattingControls={ [ 'bold', 'italic' ] }
				onChange={ ( content ) => setAttributes( { content } ) }
				placeholder={ __( 'Heading...' ) }
			/>	
			
		);
    },
 
    save: ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		return (	
			
			<RichText.Content { ...blockProps } tagName="p" value={ attributes.content } />						
			
		);
    },

});

registerBlockType( 'us/notiz-block', {
	apiVersion: 2,
	title: __( 'US Notiz Quote', 'notiz-block' ),
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'starter-block'
	),
	category: 'common',
	icon: 'info-outline',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
    },
 
	edit: ( { attributes, setAttributes } ) => {	
		const blockProps = useBlockProps();
				     
		return (
			
			<RichText	
				{ ...blockProps }			
				tagName="p"
				value={ attributes.content }
				formattingControls={ [ 'bold', 'italic' ] }
				onChange={ ( content ) => setAttributes( { content } ) }
				placeholder={ __( 'Heading...' ) }
			/>	
			
		);
    },
 
    save: ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		return (	
			
			<RichText.Content { ...blockProps } tagName="p" value={ attributes.content } />						
			
		);
    },

});

registerBlockType( 'us/tipp-block', {
	apiVersion: 2,
	title: __( 'US Tipp Quote', 'tipp-block' ),
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'starter-block'
	),
	category: 'common',
	icon: 'info-outline',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
    },
 
	edit: ( { attributes, setAttributes } ) => {	
		const blockProps = useBlockProps();
				     
		return (
			
			<RichText	
				{ ...blockProps }			
				tagName="p"
				value={ attributes.content }
				formattingControls={ [ 'bold', 'italic' ] }
				onChange={ ( content ) => setAttributes( { content } ) }
				placeholder={ __( 'Heading...' ) }
			/>	
			
		);
    },
 
    save: ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		return (	
			
			<RichText.Content { ...blockProps } tagName="p" value={ attributes.content } />						
			
		);
    },

});

// Aufgaben Icon
registerBlockType( 'us/aufgaben-block', {
	apiVersion: 2,
	title: __( 'US Aufgabe', 'aufgaben-block' ),
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'starter-block'
	),
	category: 'common',
	icon: 'menu-alt',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'h2',
        },
		
    },
 
	edit: ( { attributes, setAttributes } ) => {	
		const blockProps = useBlockProps();
				     
		return (
			
			<RichText	
				{ ...blockProps }			
				tagName="h2"
				value={ attributes.content }
				formattingControls={ [ 'bold', 'italic' ] }
				onChange={ ( content ) => setAttributes( { content } ) }
				placeholder={ __( 'Heading...' ) }
				
			/>	
			
		);
    },
 
    save: ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		return (	
			<RichText.Content { ...blockProps } tagName="h2" value={ attributes.content } />						
		);
    },

});

// Video Icon
registerBlockType( 'us/video-block', {
	apiVersion: 2,
	title: __( 'US Video', 'video-block' ),
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'starter-block'
	),
	category: 'common',
	icon: 'controls-play',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'h2',			
        },
		
    },
 
	edit: ( { attributes, setAttributes } ) => {	
		const blockProps = useBlockProps();
				     
		return (
			
			<RichText	
				{ ...blockProps }			
				tagName="h2"
				value={ attributes.content }
				formattingControls={ [ 'bold', 'italic' ] }
				onChange={ ( content ) => setAttributes( { content } ) }
				placeholder={ __( 'Heading...' ) }
				
			/>	
			
		);
    },
 
    save: ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		return (	
			<RichText.Content { ...blockProps } tagName="h2" value={ attributes.content } />						
		);
    },

});

// Lösung Icon
registerBlockType( 'us/loesung-block', {
	apiVersion: 2,
	title: __( 'US Lösung', 'loesung-block' ),
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'starter-block'
	),
	category: 'common',
	icon: 'yes',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'h2',			
        },
		
    },
 
	edit: ( { attributes, setAttributes } ) => {	
		const blockProps = useBlockProps();
				     
		return (
			
			<RichText	
				{ ...blockProps }			
				tagName="h2"
				value={ attributes.content }
				formattingControls={ [ 'bold', 'italic' ] }
				onChange={ ( content ) => setAttributes( { content } ) }
				placeholder={ __( 'Heading...' ) }
				
			/>	
			
		);
    },
 
    save: ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		return (	
			<RichText.Content { ...blockProps } tagName="h2" value={ attributes.content } />						
		);
    },

});
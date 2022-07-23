/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';




/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
 import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
	AlignmentToolbar,
	PanelColorSettings,
	ContrastChecker,
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
// export default function Edit() {
// 	return (
// 		<p { ...useBlockProps() }>
// 			{ __( 'Xenome – hello from the editor!', 'xenome' ) }
// 		</p>
// 	);
// }




import {
	// eslint-disable-next-line
	__experimentalBoxControl as BoxControl,
	PanelBody,
	TextControl,
	RangeControl,
} from '@wordpress/components';
import classnames from 'classnames';


const { __Visualizer: BoxControlVisualizer } = BoxControl;

export default function Edit( props ) {

	const { attributes, setAttributes } = props;
	const { text, alignment, style, shadow, shadowOpacity } = attributes;

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};
	const onChangeShadowOpacity = ( newShadowOpacity ) => {
		setAttributes( { shadowOpacity: newShadowOpacity } );
	};
	const toggleShadow = () => {
		setAttributes( { shadow: ! shadow } );
	};

	const classes = classnames( `xenome-align-${ alignment }`, {
		'has-shadow': shadow,
		[ `shadow-opacity-${ shadowOpacity }` ]: shadow && shadowOpacity,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'xenome' ) } >
					<p>Create your campaign at <a href="https://xenome.app/">https://xenome.app</a> and paste your share&nbsp;link&nbsp;below.</p>

                   <TextControl

                        value={ attributes.text }
                        onChange={ ( value ) => { setAttributes( {text: value } ) } }
						placeholder={ __( 'https://xenome.app/s/2df46475-588f-404f-a50c-ec1b1293dd51/start', 'xenome' ) }
                    />

                </PanelBody>
				{ shadow && (
					<PanelBody title={ __( 'Shadow Setting', 'xenome' ) }>
						<RangeControl
							label={ __( 'Shadow Opacity', 'xenome' ) }
							value={ shadowOpacity }
							min={ 10 }
							max={ 40 }
							step={ 10 }
							onChange={ onChangeShadowOpacity }
						/>
					</PanelBody>
				) }
			</InspectorControls>
			<BlockControls
				controls={ [
					{
						icon: 'admin-page',
						title: __( 'Shadow', 'xenome' ),
						onClick: toggleShadow,
						isActive: shadow,
					},
				] }
			>

			</BlockControls>
			<div
				{ ...useBlockProps( {
					className: classes,
				} ) }
			>
				<div class="over-controls">
				<p>
				<svg width="20" height="20" class="custom-icon custom-icon-github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" aria-hidden="true" focusable="false"><g id="Group_8654" data-name="Group 8654" transform="translate(3.999 -10.085)"><path id="Rectangle_4113" data-name="Rectangle 4113" d="M0,0H36a0,0,0,0,1,0,0V36a0,0,0,0,1,0,0H15A15,15,0,0,1,0,21V0A0,0,0,0,1,0,0Z" transform="translate(-3.999 10.085)" fill="#fff"></path><path id="Path_66" data-name="Path 66" d="M14.7-2.663H10.863L.378-18.009H4.216ZM7.414-12.119l3.655-5.89h3.495L9.1-9.749Zm.64,2.853L3.9-2.663H.469l5.8-8.7Z" transform="translate(12.109 42.543)" fill="#010911"></path></g></svg>
				Create your campaign at <a href="https://xenome.app/">https://xenome.app</a> and paste your share&nbsp;link&nbsp;below.</p>
				<TextControl
					value={ attributes.text }
					onChange={ onChangeText }
					placeholder={ __( 'https://xenome.app/s/2df46475-588f-404f-a50c-ec1b1293dd51/start', 'xenome' ) }
				/>
				</div>
				<BoxControlVisualizer
					values={ style && style.spacing && style.spacing.padding }
					showValues={
						style && style.visualizers && style.visualizers.padding
					}
				/>

				<iframe src="{ text }"></iframe>
				
				

			</div>

		</>
	);
}

























import React, { SVGProps } from 'react';

export const UnlockIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		style={{
			display: 'inline-block',
			stroke: 'currentcolor',
			fill: 'currentcolor',
			width: '1em',
			height: 'auto',
			position: 'relative',
			top: '-0.15em',
		}}
		viewBox="0 0 18 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M8.99582 0.879974C7.56124 0.879974 6.36418 1.35736 5.58771 2.35877C4.9673 3.1589 4.6775 4.19959 4.6775 5.35988H6.1175C6.1175 4.43101 6.34892 3.72706 6.72569 3.24114C7.16349 2.67653 7.88642 2.31997 8.99582 2.31997C10 2.31997 10.6934 2.62925 11.1401 3.10555C11.5932 3.58856 11.8775 4.33399 11.8775 5.36319V8.07997H3.72125C2.92596 8.07997 2.28125 8.72469 2.28125 9.51998V16.48C2.28125 17.2753 2.92596 17.92 3.72125 17.92H14.2812C15.0765 17.92 15.7213 17.2753 15.7213 16.48V9.51998C15.7213 8.72469 15.0765 8.07997 14.2812 8.07997H13.3175V5.36319C13.3175 4.0761 12.9591 2.93993 12.1904 2.1204C11.4154 1.29416 10.3079 0.879974 8.99582 0.879974ZM3.72125 16.48V9.51998H14.2812V16.48L3.72125 16.48Z" />
	</svg>
);
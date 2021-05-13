import { interpolate, spring, useCurrentFrame, useVideoConfig, Img } from 'remotion';

import logo from '../Images/placeholder.png';

export const Sponsors: React.FC<{
	transitionStart: number;
}> = ({ transitionStart }) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const bottom = frame > 20 ? 50 : 30 + frame;
	const opacity = frame >= 20 ? 1 : (frame / 20);
	return (
		<div
			style={{
				width: videoConfig.width,
				height: videoConfig.height,
				flex: 1, justifyContent: "center", alignItems: "center",
				opacity: opacity,
				fontFamily: 'Ubuntu',
				paddingLeft: 30
			}}>
			
			<div style={{
				marginLeft: 20,
				marginRight: 20,
				display: 'flex',
				flexDirection: 'row',
				position: 'absolute',
				bottom: bottom,
				flexFlow: 'wrap'
			}}>
				<Img src={logo} style={{ height: 100 }} />
				<Img src={logo} style={{ height: 100 }} />
				<Img src={logo} style={{ height: 100 }} />
				<Img src={logo} style={{ height: 100 }} />
				<Img src={logo} style={{ height: 100 }} />
				<Img src={logo} style={{ height: 100 }} />
				<Img src={logo} style={{ height: 100 }} />
				<Img src={logo} style={{ height: 100 }} />
				<Img src={logo} style={{ height: 100 }} />
				<Img src={logo} style={{ height: 100 }} />
			</div>

		</div>
	);
};

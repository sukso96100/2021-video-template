import { useCurrentFrame, useVideoConfig, Img } from 'remotion';

import logo from '../Images/placeholder.png';

export const Sponsors: React.FC<{
	sponsorLogos: Array<string>;
}> = ({ sponsorLogos }) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const bottom = frame > 20 ? 50 : 30 + frame;
	const opacity = frame >= 20 ? 1 : (frame / 20);
	return (
		<div
			style={{
				width: videoConfig.width,
				height: videoConfig.height,
				flex: 1, justifyContent: "center",
				alignItems: "center",
				opacity: opacity,
				fontFamily: 'Ubuntu',
				paddingLeft: 30,
				color: 'white'
			}}>
			<div style={{
				marginLeft: 20,
				marginRight: 20,
				display: 'flex',
				flexDirection: 'column',
				position: 'absolute',
				bottom: bottom,
			}}>
				<span style={{
					fontSize: 40,
					margin: 10
				}}>
					Sponsored by
				</span>
				<div style={{
					display: 'flex',
					flexDirection: 'row',
					flexFlow: 'wrap'
				}}>
					{sponsorLogos.map((item, index) => (
						<Img key={index} src={item} style={{ height: 100, margin: 10 }} />
					))}
				</div>
			</div>



		</div>
	);
};

import { interpolate, spring, useCurrentFrame, useVideoConfig, Img } from 'remotion';
import logo from '../Images/ubuCon_logo_or.svg';

export const SessionInfo: React.FC<{
	transitionStart: number;
}> = ({ transitionStart }) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const marginTop = frame > 20 ? 40 : 60 - frame;
	const opacity = frame >= 20 ? 1 : (frame / 20);
	return (
		<div
			style={{
				width: videoConfig.width,
				height: videoConfig.height,
				flex: 1, justifyContent: "center", alignItems: "center",
				marginTop: marginTop,
				opacity: opacity,
				fontFamily: 'Ubuntu',
				paddingLeft: 30
			}}>
			<Img src={logo} style={{ width: 500 }} />
			<div style={{
				marginLeft: 30,
				display: 'flex',
				flexDirection: 'column'
			}}>
				<span style={{
					fontSize: 80,
					margin: 0
				}}>
					Example session title
				</span>
				<span style={{
					fontSize: 40,
					marginTop: 20,
					marginLeft: 10
				}}>
					Speaker name here
					</span>
			</div>

		</div>
	);
};

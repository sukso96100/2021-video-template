import {interpolate, Sequence, useCurrentFrame, useVideoConfig, interpolateColors} from 'remotion';
import {SessionInfo} from './HelloWorld/SessionInfo';
import {Sponsors} from './HelloWorld/Sponsors';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();
	const bgColorA = interpolateColors(frame,
		[0, 40],
		['#E95420', '#5E2750']
	);
	const bgColorB = interpolateColors(frame,
		[0, 40],
		['#5E2750', '#E95420']
	);
	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 25;

	return (
		<div style={{
			flex: 1, 
			background: `linear-gradient(-45deg, ${bgColorA}, ${bgColorB})`,
			animation: 'gradient 15s ease infinite',
			
			}}>
			<div style={{opacity}}>
				<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
					<SessionInfo transitionStart={transitionStart} />
				</Sequence>
				<Sequence from={20} durationInFrames={videoConfig.durationInFrames}>
					<Sponsors transitionStart={transitionStart} />
				</Sequence>
				{/* <Sequence from={transitionStart + 10} durationInFrames={Infinity}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
				<Sequence from={transitionStart + 50} durationInFrames={Infinity}>
					<Subtitle />
				</Sequence> */}
			</div>
		</div>
	);
};

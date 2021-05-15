import {interpolate, Sequence, useCurrentFrame, useVideoConfig, interpolateColors} from 'remotion';
import {SessionInfo} from './HelloWorld/SessionInfo';
import {Sponsors} from './HelloWorld/Sponsors';

export const HelloWorld: React.FC<{
	sessionTitle: string,
	speakerName: string,
	speakerBio: string,
	speakerProfilePath: string
}> = ({
	sessionTitle,
	speakerName,
	speakerBio,
	speakerProfilePath
}) => {
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
			background: `linear-gradient(-45deg, ${bgColorA}, ${bgColorB})`			
			}}>
			<div style={{opacity}}>
				<Sequence 
					from={0} 
					durationInFrames={videoConfig.durationInFrames}>
						<SessionInfo
							sessionTitle={sessionTitle}
							speakerName={speakerName}
							speakerBio={speakerBio}
							speakerProfilePath={speakerProfilePath}/>
					</Sequence>
				<Sequence from={20} durationInFrames={videoConfig.durationInFrames}>
					<Sponsors transitionStart={transitionStart} />
				</Sequence>
			</div>
		</div>
	);
};

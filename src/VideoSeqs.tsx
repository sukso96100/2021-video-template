import { interpolate, Sequence, useCurrentFrame, useVideoConfig, interpolateColors, getInputProps } from 'remotion';
import { SessionInfo } from './Layers/SessionInfo';
import { SpeakerData, Speakers } from './Layers/Speakers';
import { Sponsors, SponsorsData } from './Layers/Sponsors';

export const VideoSeqs: React.FC<{
	speakers: Array<SpeakerData>;
	sessionTitle: string;
	sponsorsData: Array<SponsorsData>
}> = ({
	speakers,
	sessionTitle,
	sponsorsData
}) => {
		const frame = useCurrentFrame();
		const videoConfig = useVideoConfig();
		const inputProps = getInputProps()

		const bgColorA = interpolateColors(frame,
			[0, 100, 110, 200],
			['#E95420', '#5E2750', '#F6BBA6', '#F6BBA6']
		);
		const bgColorB = interpolateColors(frame,
			[0, 100, 110, 200],
			['#5E2750', '#E95420', '#BEA8B9', '#BEA8B9']
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
				<div style={{ opacity }}>
					<Sequence from={0}
						durationInFrames={100}>
						<SessionInfo
							sessionTitle={sessionTitle}
						/>
					</Sequence>
					<Sequence from={20} durationInFrames={80}>
						<Speakers
							speakers={speakers} />
					</Sequence>
					<Sequence from={100} durationInFrames={50}>
						<Sponsors sponsorsData={[sponsorsData[0], sponsorsData[1]]}/>
					</Sequence>
					<Sequence from={150} durationInFrames={50}>
						<Sponsors sponsorsData={[sponsorsData[2], sponsorsData[3]]}/>
					</Sequence>
				</div>
			</div>
		);
	};

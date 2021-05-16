import { interpolate, Sequence, useCurrentFrame, useVideoConfig, interpolateColors, getInputProps } from 'remotion';
import { SessionInfo, SpeakerData } from './Layers/SessionInfo';
import { Sponsors } from './Layers/Sponsors';
import { VideoLayer } from './Layers/VideoLayer';

export const VideoSeqs: React.FC<{
	speakers: Array<SpeakerData>;
	sessionTitle: string;
	videoPath: string,
	sponsorLogos: Array<string>
}> = ({
	speakers,
	sessionTitle,
	videoPath,
	sponsorLogos
}) => {
		const frame = useCurrentFrame();
		const videoConfig = useVideoConfig();
		const inputProps = getInputProps()

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
				<div style={{ opacity }}>
					<Sequence from={0}
						durationInFrames={videoConfig.durationInFrames}>
						<SessionInfo
							sessionTitle={sessionTitle}
							speakers={speakers} />
					</Sequence>
					<Sequence from={20} durationInFrames={videoConfig.durationInFrames}>
						<Sponsors
							// transitionStart={transitionStart}
							sponsorLogos={sponsorLogos} />
					</Sequence>
					<Sequence
						from={200}
						durationInFrames={(inputProps?.duration ?? 20) * 30}>
							<VideoLayer
								transitionStart={200}
								videoPath={videoPath}
							/>
						</Sequence>
				</div>
			</div>
		);
	};

import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {SessionInfo} from './HelloWorld/SessionInfo';
import {Sponsors} from './HelloWorld/Sponsors';
import profile from './Images/profile_placeholder.png';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					sessionTitle: "[Session title here]",
					speakerName: "[Speaker name here]",
					speakerBio: "[Speaker bio here]",
					speakerProfilePath: profile,
				}}
			/>
			<Composition
				id="SessionInfo"
				component={SessionInfo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					sessionTitle: "[Session title here]",
					speakerName: "[Speaker name here]",
					speakerBio: "[Speaker bio here]",
					speakerProfilePath: profile,
				}}
			/>
			<Composition
				id="Sponsors"
				component={Sponsors}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
				/>
		</>
	);
};

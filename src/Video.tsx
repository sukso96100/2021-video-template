import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {SessionInfo} from './HelloWorld/SessionInfo';
import {Sponsors} from './HelloWorld/Sponsors';

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
					titleText: 'Ubucon Asia 2021',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="SessionInfo"
				component={SessionInfo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
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

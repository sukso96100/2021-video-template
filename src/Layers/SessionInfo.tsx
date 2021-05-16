import { useCurrentFrame, useVideoConfig, Img } from 'remotion';
import logo from '../Images/ubuCon_logo_or.svg';
import startup from '../Sounds/startup.mp3';
import { Audio } from 'remotion';
import '../Fonts/font.css'

export type SpeakerData = {
	"name": string;
	"bio": string;
	"photoPath": string;
}

export const SessionInfo: React.FC<{
	sessionTitle: string;
	speakers: Array<SpeakerData>;
}> = ({
	sessionTitle,
	speakers
}) => {
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
					color: 'white',
					paddingLeft: 30
				}}>
				<Audio src={startup} />
				<div style={{
					display: 'flex',
					flexDirection: 'row',
					height: 200,
					alignItems: 'center',
					marginLeft: 20,
					marginRight: 20
				}}>
					<span style={{
						fontSize: 80,
						margin: 0,
						flex: 1
					}}>
						{sessionTitle}
					</span>
					<Img src={logo} style={{ width: 500 }} />
				</div>
				<div style={{
					marginLeft: 30,
					display: 'flex',
					flexDirection: 'column'
				}}>

					<div style={{
						display: 'flex',
						flexDirection: 'row',
						flexFlow: 'wrap',
						marginTop: 10
					}}>
						{speakers.map((item, index) => (
							<div style={{
								border: 'solid white',
								display: 'flex',
								flexDirection: 'row',
								borderRadius: 75,
								height: 150,
								marginRight: 10
							}}
								key={index}>
								<div style={{
									background: `url(${item.photoPath}) no-repeat center`,
									backgroundSize: "cover",
									width: 150,
									height: 150,
									borderRadius: "100%",
									marginTop: -3,
									marginLeft: -3
								}} />
								<div style={{
									display: 'flex',
									flexDirection: 'column',
									marginRight: 60,
									marginLeft: 10
								}}>
									<span style={{
										fontSize: 40,
										marginTop: 20,
										marginLeft: 10,
										fontWeight: 'bold'
									}}>
										{item.name}
									</span>
									<span style={{
										fontSize: 30,
										marginLeft: 10,
										marginTop: 10
									}}>
										{item.bio}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>

			</div>
		);
	};

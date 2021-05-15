import { interpolate, spring, useCurrentFrame, useVideoConfig, Img } from 'remotion';
import logo from '../Images/ubuCon_logo_or.svg';
import profile from '../Images/profile_placeholder.png';
import startup from '../Sounds/startup.mp3';
import {Audio} from 'remotion';
import '../Fonts/font.css'



export const SessionInfo: React.FC<{
	sessionTitle: string;
	speakerName: string;
	speakerBio: string;
	speakerProfilePath: string;
}> = ({ 
	sessionTitle,
	speakerName,
	speakerBio,
	speakerProfilePath
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
				height: 200
			}}>
				<Img src={logo} style={{ width: 500 }}/>
				<span style={{flex: 1}}></span>
				<Img src={profile} style={{ 
					width: 200, height: 200,
					borderRadius: 200 / 2,
    			overflow: "hidden",
					marginRight: 40
					}} />
			</div>
			<div style={{
				marginLeft: 30,
				display: 'flex',
				flexDirection: 'column'
			}}>
				<span style={{
					fontSize: 80,
					margin: 0
				}}>
					{sessionTitle}
				</span>
				<span style={{
					fontSize: 40,
					marginTop: 20,
					marginLeft: 10,
					fontWeight: 'bold'
				}}>
					{speakerName}
					</span>
					<span style={{
					fontSize: 40,
					marginLeft: 10,
				}}>
					{speakerBio}
					</span>
			</div>

		</div>
	);
};

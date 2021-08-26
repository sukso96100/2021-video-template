import { Composition, getInputProps } from 'remotion';
import { VideoSeqs } from './VideoSeqs';
import { SessionInfo } from './Layers/SessionInfo';
import { Speakers } from './Layers/Speakers';
import { Sponsors } from './Layers/Sponsors';

const defaultSessionTitle = "Big Buck Bunny";
// const defaultVideoPath = "https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"
const defaultProfilePath = "https://upload.wikimedia.org/wikipedia/commons/c/c5/Big_buck_bunny_poster_big.jpg"
const defualtSpeakersData = [
	{
		"name": "Bunny",
		"bio": "Big Buck Bunny",
		"photoPath": defaultProfilePath
	},
	{
		"name": "Rodents",
		"bio": "Three Villains",
		"photoPath": defaultProfilePath
	}
];
const defaultSponsorData = [
	{"class": "Diamond", "logos":[
		"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
	]},
	{"class": "Gold", "logos":[
		"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
		"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
		"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
	]},
	{"class": "Silver", "logos":[
		"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
		"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
		"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
		"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
		"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
		"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
	]},
	{"class": "Video Recording/Internalization support", "logos":[
		"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
		"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
	]}
]

export const RemotionVideo: React.FC = () => {
	const inputProps = getInputProps()

	return (
		<>
			<Composition
				id="VideoSeqs"
				component={VideoSeqs}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					sessionTitle: defaultSessionTitle,
					speakers: defualtSpeakersData,
					sponsorsData: defaultSponsorData
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
					sessionTitle: defaultSessionTitle
				}}
			/>
			<Composition
				id="Speakers"
				component={Speakers}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					speakers: defualtSpeakersData
				}}
			/>
			<Composition
				id="SponsorsDiaAndGold"
				component={Sponsors}
				durationInFrames={50}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					sponsorsData: [
						defaultSponsorData[0],
						defaultSponsorData[1]
					]
				}}
			/>
			<Composition
				id="SponsorsSilverAndOthers"
				component={Sponsors}
				durationInFrames={50}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					sponsorsData: [
						defaultSponsorData[2],
						defaultSponsorData[3]
					]
				}}
			/>
		</>
	);
};

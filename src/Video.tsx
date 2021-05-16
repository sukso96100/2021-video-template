import { Composition, delayRender, getInputProps, continueRender } from 'remotion';
import { useState, useEffect } from 'react';
import { VideoSeqs } from './VideoSeqs';
import { SessionInfo } from './Layers/SessionInfo';
import { Sponsors } from './Layers/Sponsors';
import { VideoLayer } from './Layers/VideoLayer';

const defaultVideoPath = "https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"
const defaultProfilePath = "https://upload.wikimedia.org/wikipedia/commons/c/c5/Big_buck_bunny_poster_big.jpg"
const defaultSponsorLogos = [
	"https://github.com/ubucon-asia/2021/raw/main/content/hosts/ubuntu-kr/logo.png",
	"https://github.com/ubucon-asia/2021/raw/main/content/hosts/ubuntu-kr/logo.png"
]

export const RemotionVideo: React.FC = () => {
	const inputProps = getInputProps()

	return (
		<>
			<Composition
				id="VideoSeqs"
				component={VideoSeqs}
				durationInFrames={200 + ((inputProps?.duration ?? 20) * 30)}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					videoPath: defaultVideoPath ,
					sessionTitle: "Big Buck Bunny",
					speakers: [
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
					],
					sponsorLogos: defaultSponsorLogos
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
					sessionTitle: "Big Buck Bunny",
					speakers: [
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
					]
				}}
			/>
			<Composition
				id="Sponsors"
				component={Sponsors}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					sponsorLogos: defaultSponsorLogos
				}}
			/>
			<Composition
				id="VideoLayer"
				component={VideoLayer}
				fps={30}
				durationInFrames={(inputProps?.duration ?? 20) * 30}
				width={1920}
				height={1080}
				defaultProps={{
					videoPath: defaultVideoPath,
					transitionStart: 200
				}}
			/>
		</>
	);
};

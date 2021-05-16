import { Composition, delayRender, getInputProps, continueRender } from 'remotion';
import { useState, useEffect } from 'react';
import { VideoSeqs } from './VideoSeqs';
import { SessionInfo } from './Layers/SessionInfo';
import { Sponsors } from './Layers/Sponsors';
import { VideoLayer } from './Layers/VideoLayer';
import profile from './Images/profile_placeholder.png';

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
					videoPath: "",
					sessionTitle: "Big Buck Bunny",
					speakers:[
						{
							"name": "Bunny",
							"bio": "Big Buck Bunny",
							"photoPath": ""
						},
						{
							"name": "Rodents",
							"bio": "Three Villains",
							"photoPath": ""
						}
					]
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
					speakers:[
						{
							"name": "Bunny",
							"bio": "Big Buck Bunny",
							"photoPath": ""
						},
						{
							"name": "Rodents",
							"bio": "Three Villains",
							"photoPath": ""
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
			/>
			<Composition
				id="VideoLayer"
				component={VideoLayer}
				fps={30}
				durationInFrames={(inputProps?.duration ?? 20) * 30}
				width={1920}
				height={1080}
				defaultProps={{
					videoPath: "",
					transitionStart: 200
				}}
			/>
		</>
	);
};

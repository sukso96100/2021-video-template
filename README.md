# UbuCon Asia 2021 Video template

This repo is for React Remotion project that generated video cover with tempalte for UbuCon session recordings.

## Setting up local dev environment
See remotion.dev docs.

## Parameter files
Write parameter file that will be used to render video.
Place it on `params` directory
```json
{
  "videoPath": "<Name of the file placed in src/Videos>",
  "sessionTitle": "<Session title here>",
  "videoWidth" : 1920,
  "videoHeight" : 1080,
  "speakers": [
    {
      "name": "<Speaker name here>",
      "bio": "<Speaker bio here>",
      "photoPath": "https://path.to/speaker/profile/photo.jpg"
    }
  ],
  "sponsorsData":[
    {"class": "Diamond", "logos":[
      "https://path.to/sponsor/logo/image.jpg"
    ]},
    {"class": "Gold", "logos":[
      "https://path.to/sponsor/logo/image.jpg"
    ]},
    {"class": "Silver", "logos":[
      "https://path.to/sponsor/logo/image.jpg"
    ]},
    {"class": "Video Recording/Internalization support", "logos":[
    ]}
  ]
}

```

## Render with `npx`
```bash
npx remotion render src/index.tsx VideoSeqs <output_file_name> --props=params/<param_file_name>
```
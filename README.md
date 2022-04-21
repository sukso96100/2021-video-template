# FOSSASIA Summit 2022 - Video cutting tools

This repo is for cutting session videos from live recordings and combining with cover image



## Parameter files
Write parameter file that will be used to cut out session videos.
Place it on `split_params` directory as `.json` file

Example:
```json
{
  "source":"<File ID on Google Drive>",
  "source_file":"yt_day_2_part_1.mp4",
  "title_image":"images/azure_database_workshop.jpg",
  "time_from":"01:44:25.000",
  "time_to":"02:38:58.000",
  "output":"azure_database_workshop.mp4"
}

```

- `source`: Choose one of these

| File name | Google Drive Fild ID | Description |
|--|--|--|
| bbb_day_2_3_v2.mp4 | 1OqKNK-aEF8mV-NJRte6p30h6b3Wlwzd7 | BBB recording of day 2~3 with White backdrop with pattern - Recommended For most types of sessions. Except sessions that uses video focus layout such as panel discussions |
| yt_day_1_part_1.mp4 | 1JTC-lJ0n_a5rxX6cOrolumM4TkB8Y8tQ | YouTube recording - Recommended For most type of sessions |
| yt_day_1_part_2.mp4 | 1mfO1XXlZXzhAufK_JC8XAwjWSbmuYwFC | YouTube recording - Recommended For most type of sessions |
| yt_day_2_part_1.mp4 | 1M-sVDnwyaQS15OrojQiu4aNLxOZUh1gG | YouTube recording - Recommended For most type of sessions |
| yt_day_2_part_2.mp4 | 1T7hrH0eYzc_11R3ugohEzqjrzfVRcabL | YouTube recording - Recommended For most type of sessions |
| yt_day_3_part_1.mp4 | 17sAN_NRl_oprqbNQe538SG69190mV8o- | YouTube recording - Recommended For most type of sessions |
| yt_day_3_part_2.mp4 | 1pLss6rV78YdNSLLxJ5qsHk_2Xw_FtqGu | YouTube recording - Recommended For most type of sessions |

- `title_image`: One of images available in `images` directory of this repo. Make sure to add one on `images` directory if the image you want not exists yet.
- `time_from`: When the session starts on the live recording file in `HH:MM:SS.mmm` format
- `time_to`: When the session ends on the live recording file in `HH:MM:SS.mmm` format
- `output`: Name of the resulting video file - ends with `.mp4`

If there are some part that should be remove between `time_from` and `time_to`, Make sure to let me know when sending pull request

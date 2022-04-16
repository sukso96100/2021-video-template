# FOSSASIA Summit 2022 - Video cutting tools

This repo is for cutting session videos from live recordings and combining with cover image



## Parameter files
Write parameter file that will be used to cut out session videos.
Place it on `split_params` directory as `.json` file

Example:
```json
{
  "source":"yt_day_2_part_1.mp4",
  "title_image":"images/azure_database_workshop.jpg",
  "time_from":"01:44:25.000",
  "time_to":"02:38:58.000",
  "output":"azure_database_workshop.mp4"
}

```

- `source`: Choose one of these
  - YouTube recordings (Recommended For most type of sessions)
    - `yt_day_1_part_1.mp4`
    - `yt_day_1_part_2.mp4`
    - `yt_day_2_part_1.mp4`
    - `yt_day_2_part_2.mp4`
    - `yt_day_3_part_1.mp4`
    - `yt_day_3_part_2.mp4`
  - BBB recordings (Recommended For most types of sessions. Except sessions that uses video focus layout such as panel discussions)
    - `bbb_day_2_3_v2.mp4`: White backdrop with pattern 
    - `bbb_day_2_3.mp4`: White backdrop
    - `bbb_day_2.mp4`: Red backdrop
    - `bbb_day_3.mp4`: Red backdrop
- `title_image`: One of images available in `images` directory of this repo. Make sure to add one on `images` directory if the image you want not exists yet.
- `time_from`: When the session starts on the live recording file in `HH:MM:SS.mmm` format
- `time_to`: When the session ends on the live recording file in `HH:MM:SS.mmm` format
- `output`: Name of the resulting video file - ends with `.mp4`

If there are some part that should be remove between `time_from` and `time_to`, Make sure to let me know when sending pull request

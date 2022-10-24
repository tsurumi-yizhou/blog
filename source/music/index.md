---
title: 音乐
date: 2022-10-18 12:22:08
---
{% raw %}
<head>
    <script src="https://cdn.jsdelivr.net/npm/vconsole/dist/vconsole.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery"></script>
    <script src="playlist.js"></script>
</head>

<body>
    <div id="root"></div>
    <script src="player.js"></script>
    <script>
        create_player("喜欢的音乐", 中学堂街9号的鹿喜欢的音乐);
        create_player("中古中土", 中古中土)
        create_player("touhou", 东方)
        create_player("EVA歌单", 心之壁)
        create_player("VOCALOID精选集", 中文vocaloid.concat(日语vocaloid))
        create_player("风灵玉秀歌单", 风灵玉秀)
        create_player("通中主题歌单", 通中)
        create_player("古风歌单", 古风)
    </script>
</body>
{% endraw %}
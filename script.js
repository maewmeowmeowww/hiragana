document.getElementById('startBtn').addEventListener('click', function() {
    const min = 0x3041; // ひらがな「あ」から始まる
    const max = 0x3096; // ひらがな「ゖ」まで
    const randomCode = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById('numberDisplay').textContent = randomCode;

    // 音声を聞くボタンを有効にする
    document.getElementById('speakBtn').disabled = false;
});

document.getElementById('speakBtn').addEventListener('click', function() {
    const number = document.getElementById('numberDisplay').textContent;

    // 数字を日本語で発音
    const speech = new SpeechSynthesisUtterance(number);
    speech.lang = 'ja-JP';
    window.speechSynthesis.speak(speech);
});

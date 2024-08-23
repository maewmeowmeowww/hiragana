document.getElementById('startBtn').addEventListener('click', function() {
    // 4桁の数字をランダムに生成
    const randomNumber = Math.floor(1000 + Math.random() * 9000).toString();
    document.getElementById('numberDisplay').textContent = randomNumber;

    // 音声を聞くボタンを有効にする
    document.getElementById('speakBtn').disabled = false;
});

if ('speechSynthesis' in window) {
    // サポートされている場合の処理
} else {
    alert("このブラウザは音声合成をサポートしていません。");
}


document.getElementById('speakBtn').addEventListener('click', function() {
    const number = document.getElementById('numberDisplay').textContent;

    // 数字を日本語の文字列に変換
    const japaneseNumber = convertNumberToJapanese(number);

    // 数字を日本語で発音
    const speech = new SpeechSynthesisUtterance(japaneseNumber);
    speech.lang = 'ja-JP';
    window.speechSynthesis.speak(speech);
});

// 数字を日本語に変換する関数
function convertNumberToJapanese(number) {
    const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const units = ['', '十', '百', '千'];
    const specialOnes = {
        1: 'じゅう',
        2: 'ひゃく',
        3: 'せん'
    };

    let japaneseNumber = '';

    for (let i = 0; i < number.length; i++) {
        const digit = number[i];
        const unitIndex = number.length - 1 - i;

        if (digit !== '0') {
            if (digit === '1' && unitIndex >= 1 && unitIndex <= 3) {
                // 「1」の場合、千・百・十の位では特殊な発音を使用
                japaneseNumber += specialOnes[unitIndex];
            } else {
                // その他の場合、数字と単位を結合
                japaneseNumber += digits[parseInt(digit)] + units[unitIndex];
            }
        }
    }

    // 全ての桁が「0」の場合は「零」とする
    if (japaneseNumber === '') {
        japaneseNumber = '零';
    }

    return japaneseNumber;
}

module.exports = function countWordFrequency(text) {
    const words = text.match(/\w+/g);
    const frequency = {};

    words.forEach(word => {
        const lowerCaseWord = word.toLowerCase();
        if (!frequency[lowerCaseWord]) {
            frequency[lowerCaseWord] = 0;
        }
        frequency[lowerCaseWord]++;
    });

    return frequency;
}

// // Ví dụ sử dụng
// const text = "Đây là một ví dụ về việc đếm tần suất từ trong một đoạn văn bản. Mỗi từ sẽ được đếm.";
// const frequency = countWordFrequency(text);
// console.log(frequency);
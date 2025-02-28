function chunkString(str, size) {
    if (!str) return [];
    
    let chunks = [];
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.substring(i, i + size));
    }
    
    return chunks;
}

// Example test cases
console.log(chunkString("Hello, world!", 5)); // ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2)); // ["12", "34", "5"]
console.log(chunkString("abc", 5)); // ["abc"]

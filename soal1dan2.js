///No1

function hitungHuruf(s) {
    s = s.toLowerCase();
    let counts = {};
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(char >= 'a' && char <= 'z') {
            if(counts[char]) {
                counts[char]++;
            } else {
                counts[char] = 1;
            }
        }
    }
    return Object.keys(counts).sort().map(char => `${char}=${counts[char]}`).join(', ');
}

console.log(hitungHuruf("We Always Mekar")); 
console.log(hitungHuruf("coding is fun"));

//No2

function urutkanHuruf(data) {
    let counter = {};
    data.join('').split('').forEach(char => counter[char] = (counter[char] || 0) + 1)
    let sortedChars = Object.entries(counter).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let result = sortedChars.map(([char, freq]) => char.repeat(freq)).join('');
    
    return result;
}

// Contoh penggunaan fungsi:
console.log(urutkanHuruf(["Abc", "bCd"]));  
console.log(urutkanHuruf(["Oke", "One"]));  
console.log(urutkanHuruf(["Pendanaan", "Terproteksi", "Untuk", "Dampak", "Berarti"])); 

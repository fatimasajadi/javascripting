let pets = ['cat', 'dog', 'rat'];
let i = 0;

for (pet in pets) {
    pets[i] = pets[i] + 's';
    i++;
}
console.log(pets);
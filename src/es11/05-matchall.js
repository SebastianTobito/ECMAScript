const regex = /\b(Apple)+\b/g;

const fruta = 'Apple, banana, kiwi, Apple, lemon, etc, etc, etc';
for (const match of fruta.matchAll(regex)){
    console.log(match);
}
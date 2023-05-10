
const map = new Map();
console.log(map.size);
map.set('key1', 'value1');
console.log(map.size);
console.log(map.get('key1'));

const json = '{"id": 1, "name": "JS-primer"}';
const obj = JSON.parse(json);
console.log(obj.id);
console.log(obj.name);

//与えられた文字列がJSON形式でパースできない場合は例外が投げられます。 また、実際のアプリケーションでJSONを扱うのは、外部のプログラムとデータを交換する用途がほとんどです。 外部のプログラムが送ってくるデータが常にJSONとして正しい保証はありません。 そのため、JSON.parseメソッドは基本的にtry...catch構文で例外処理をするべきです。
const userInput = "not json value";
try {
    const json = JSON.parse(userInput);
} catch (error) {
    console.log("JSONとしてパースできませんでした");
}
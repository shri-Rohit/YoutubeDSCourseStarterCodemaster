// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'
function reverse(str){
// 	const arr=str.split('');
// 	arr.reverse();
// 	const res = arr.join('');
// return res;

//return str.split('').reverse().join('');

// let res="";
// for(let i=0;i<str.length;i++){
// 	const char=str[i];
// 	res=char+res;
//    }
//    return res;


return str.split("").reduce((output,char)=>{
	output = char + output;
	return output;
},"");


}






mocha.setup('bdd');
const { assert } = chai;

describe('String Reversal', () => {
	it('reverse() correctly reverses string', () => {
		assert.equal(reverse('ffaa'), 'aaff');
		assert.equal(reverse('  aaff'), 'ffaa  ');
	});
});

mocha.run();

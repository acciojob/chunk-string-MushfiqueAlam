function stringChop(str, size) {
  // your code here
	if(!str){
		return [];
	}
	size=Number(size);
	let s="";
	let arr=[];
	// for(let i=0;i<str.length;i++){
	// 	s+=str[i];
	// 	if(s.length===size){
	// 		arr.push(s);
	// 		s="";
	// 	}
	}
	// if(s.length>0)
	// 	arr.push(s);

	for(let i=0;i<str.length;i=i+size){
		let subStr=str.slice(i,i+size);
		arr.push(subStr);
	}
	return arr;
	
}
// Do not change the code below

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

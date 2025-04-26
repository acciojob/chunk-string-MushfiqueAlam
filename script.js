function stringChop(str, size) {
  // your code here
	size=Number(size);
	let s="";
	let arr=[];
	for(let i=0;i<str.length;i++){
		s+=str[i];
		if(s.length===size){
			arr.push(s);
			s="";
		}
	}
	if(s.length>0)
		arr.push(s);
	return arr;
	
}

// Do not change the code below

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

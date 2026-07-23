//longest substring

function longestSubstring(str){
    let maxlength=0
   for(let i=0;i<str.length;i++){
    let set=new Set()
    for(let j=i;j<str.length;j++){
        if(set.has(str[j])){
            break
        }
        set.add(str[j])
        maxlength=Math.max(maxlength,j-i+1)
    }
    
   }
   console.log(maxlength)
}
longestSubstring("abcabcb")
function filter_list(arr){
  let array_new = [];
  arr.map((item)=>{
    if(typeof(item) === 'number'){
      array_new.push(item);
    }
    
  })
  return array_new
}

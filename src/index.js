module.exports = function toReadable (number) {
    let array1 = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
    let array2 = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let result = [];
    let arr = Array.from(number.toString(),Number);
    let beforeHundred = (String(arr[1]) + arr[2]);
    let ww = Number(beforeHundred)
    
  if(number == 0){
      return 'zero';
  }
  if(number == 100){
      return 'one hundred';
  }
 
 
    if(number <= 20){
      result.push(array1[number]);
    }
      
    if(number > 20 && number < 100){
      const n1 = arr[0];
      const n2 = arr[1];
      result.push(array2[`${n1}`]);
      result.push(array1[`${n2}`]);
    }
  
    if(number > 100 && number <= 999 && ww <= 20){
      const n1 = arr[0];
      const n2 = arr[1];
      result.push(array1[`${n1}`] + ' hundred');
      result.push(array1[`${ww}`]);
    }
    if(number >= 100 && number <= 999 && ww > 20){
      const n1 = arr[0];
      const n2 = arr[1];
      const n3 = arr[2];
      result.push(array1[`${n1}`] + ' hundred');
      result.push(array2[`${n2}`]);
      result.push(array1[`${n3}`]);
    }
   
    return result.join(' ').trim();
}

export function forceCast<T>(input: any): T {

    // ... do runtime checks here
  
    // @ts-ignore <-- forces TS compiler to compile this as-is
    return input;
  }



  export function forceCastArray<T>(input: any): T[] {
    //let output:Array<T>;
    // ... do runtime checks here
 
    // @ts-ignore <-- forces TS compiler to compile this as-is



    return convertArray(input);
  }



  export function convertObjToArray<T>(input: any): T[] {
           let sp = JSON.stringify(input);
           sp.replace('TextRow','');
           let cursoJSON = JSON.parse(sp);
  
           return cursoJSON;

           //console.log('cursoJSON', cursoJSON);
  }


  export function convertArray<T>(input: any): T[] {
    let finalArray = new Array();
      for(let k in input){
          finalArray.push(input[k]);
      }
  
      return finalArray;
    //console.log('cursoJSON', cursoJSON);
  }
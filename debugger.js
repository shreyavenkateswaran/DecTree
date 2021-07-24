
var str = [];
var n;
var obj;
let stack = [];
var arr = [];
var zero = [];
var vec;
var bx = 50, by = 40;
var diagram = null;



var input = document.querySelector('input');
var textarea = document.querySelector('textarea');
var verify = document.querySelector('#verify');

console.log(input);
console.log(textarea);
console.log(verify);

if(input){
    input.addEventListener('change', () => {


    let files = input.files;
    if (files.length == 0) return;

    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        textarea.value = lines.join('\n');
    };
    reader.onerror = (e) => alert(e.target.error.name);

    reader.readAsText(file);
});
}
function validate() {


    

    
    str = $('#input').val().split("\n");

    n = str.length;
    vec = new Array(n);
    obj = new Array(n);
    arr = new Array(n);
    for (var i = 0; i < obj.length; i++) {
        
        obj[i] = new Array(4);
        arr[i] = new Array(0);
    }

    
    console.log(arr.length);
    localStorage.setItem("str-array", JSON.stringify(str));
    localStorage.setItem("arr-array", JSON.stringify(arr));

    

    
    var str = JSON.parse(localStorage.getItem("str-array"));
    var arr = JSON.parse(localStorage.getItem("arr-array"));
   
    arr = str;


   
   
    var dashCounter = 0;
   var ifNo = 0;
   var ifYes = 0;
   var i;
   
   

   
   let errorFlagQuestion = false;
   let errorFlagDash = false;
   let errorFlagIf = false;

   for(let i = 0; i < str.length; i++){
       
      
   
    if(str[i].indexOf('Are') != -1 || str[i].indexOf('Do') != -1 || str[i].indexOf('Does') != -1 || str[i].indexOf('Would') != -1 
        || str[i].indexOf('Is') != -1 || str[i].indexOf('What') != -1 || str[i].indexOf('Have you') != -1 
          || str[i].indexOf('Where') != -1 || str[i].indexOf('So are there') != -1 || str[i].indexOf('Did') != -1 || str[i].indexOf('do') != -1){
        if  (str[i].indexOf('?') == -1  ) {
            
            errorFlagQuestion = true;
            
        }
    }
   
       
       if (str[i].indexOf('-') != 1 ){
        
           dashCounter++;
       }
       
   
       if(str[i].indexOf('If No') != -1 || str[i].indexOf('If no') != -1 || arr[i].indexOf('if no') != -1 || arr[i].indexOf('if No') != -1 ){
        
           ifNo++;
       }
   
       if(arr[i].indexOf('If Yes') != -1 || arr[i].indexOf('If yes') != -1 || arr[i].indexOf('if yes') != -1 || arr[i].indexOf('if Yes') != -1 ){
        
           ifYes++;
       }
   
      
   
   } 

   if(ifNo != ifYes){
        //alert("Unequal If No's or If Yes's");
        errorFlagIf = true;
    }

    if(dashCounter%2 != 0){
        //alert("Wrong number of hyphens!");
        errorFlagDash = true;
    }

    if (errorFlagQuestion) {
		alert("Please check to see if there is a question mark (?) after every question or if there are any extra question marks. The allowed question words are: Are, Do, Does, Would, Is, What, Have you, Where, So are there, Did.");
	}

	if (errorFlagDash) {
		alert("Wrong number of hyphens! "+ dashCounter);
    }

	if (errorFlagIf) {
		alert("Unequal If No's or If Yes's");
    }

	if(errorFlagQuestion||errorFlagDash||errorFlagIf){
		document.location.href = "#";
	}else{
		document.location.href = "tree.html";
	}
}


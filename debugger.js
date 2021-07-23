// var Diagram = MindFusion.Diagramming.Diagram;
// var DiagramLink = MindFusion.Diagramming.DiagramLink;
// var ControlNode = MindFusion.Diagramming.ControlNode;

// var Rect = MindFusion.Drawing.Rect;
// var Point = MindFusion.Drawing.Point;

// var Animation = MindFusion.Animations.Animation;
// var AnimationType = MindFusion.Animations.AnimationType;
// var EasingType = MindFusion.Animations.EasingType;
// var AnimationEvents = MindFusion.Animations.Events;
var str = [];
var n;
var obj;
let stack = [];
var arr = [];
var zero = [];
var vec;
var bx = 50, by = 40;
var diagram = null;

// $(document).ready(function () {
//  diagram = Diagram.create(document.getElementById("diagram"));
//  diagram.setBounds(new Rect(0, 0, 500, 500));
// });

// console.log(str);

var input = document.querySelector('input');
var textarea = document.querySelector('textarea');
var verify = document.querySelector('#verify');

console.log(input);
console.log(textarea);
console.log(verify);

if(input){
    input.addEventListener('change', () => {
    
    //alert("change in text area");

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
    // document.getElementById("undo").style.display = "inline-block";

    

    
    str = $('#input').val().split("\n");
    //alert("validate method" + str.length);
    n = str.length;
    vec = new Array(n);
    obj = new Array(n);
    arr = new Array(n);
    for (var i = 0; i < obj.length; i++) {
        
        obj[i] = new Array(4);
        arr[i] = new Array(0);
    }

//      alert("inside for loop n value " + obj.length);
//      alert("String length " + n);

    let p = 3;
    // console.log(str[1]);
    for (var i = 0; i < n; i++) {
        let size = 0;
        for (var j = 0; j < str[i].length; j++) {
            if (str[i][j] != '-') break;
            else {
                size++;
                //alert("size increment");
            } 
        }
        // console.log(size);
        vec[size / 2] = i;
        if (size == 0) {
            p++;
            // arr[0].push(i);
            zero.push(i);
        }
        else {
            arr[vec[(size / 2) - 1]].push(i);
        }
        // console.log(size);
        let len = str[i].length;
        // let s = str[i].search(',');
        str[i] = str[i].substring(size);
        obj[size / 2].push(str[i]);
    }

    console.log(arr.length);
    localStorage.setItem("str-array", JSON.stringify(str));
    localStorage.setItem("arr-array", JSON.stringify(arr));

    

    
    var str = JSON.parse(localStorage.getItem("str-array"));
    var arr = JSON.parse(localStorage.getItem("arr-array"));
   
    arr = str;

    // console.log("str");
    // alert("str length" + str.length);
    // alert("arr lenth " + arr.length);
   
   
    var dashCounter = 0;
   var ifNo = 0;
   var ifYes = 0;
   var i;
   
   
   //alert("Abut to embark into for loop arr length " + str.length );

   let errorFlag = false;
   
   for(let i = 0; i < str.length; i++){
       
       // for(let j = 0 ; j < arr[i].length; j++){
       //     console.log(j);
       //alert("inside click verify counter " + str[i] );

       //alert ("str[i].indexOf (\"Are\") " + str[i].indexOf('you'));
   
      // console.log(str[i]);
   
    if(str[i].indexOf('Are') != -1 || str[i].indexOf('Do') != -1 || str[i].indexOf('Does') != -1 || str[i].indexOf('Would') != -1 
        || str[i].indexOf('Is') != -1 || str[i].indexOf('What') != -1 || str[i].indexOf('Have you') != -1 
          || str[i].indexOf('Where') != -1 || str[i].indexOf('So are there') != -1 || str[i].indexOf('Did') != -1 || str[i].indexOf('do') != -1){
        if  (str[i].indexOf('?') == -1  ) {
            alert("Please check to see if there is a question mark (?) after every question or if there are any extra question marks. The allowed question words are: Are, Do, Does, Would, Is, What, Have you, Where, So are there, Did.");
			errorFlag = true;
            
        }
    }
    
}
if(errorFlag){
	document.location.href = "#";
}else{
	document.location.href = "tree.html";
}
}

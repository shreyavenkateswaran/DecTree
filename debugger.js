var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var ControlNode = MindFusion.Diagramming.ControlNode;

var Rect = MindFusion.Drawing.Rect;
var Point = MindFusion.Drawing.Point;

var Animation = MindFusion.Animations.Animation;
var AnimationType = MindFusion.Animations.AnimationType;
var EasingType = MindFusion.Animations.EasingType;
var AnimationEvents = MindFusion.Animations.Events;
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
// 	diagram = Diagram.create(document.getElementById("diagram"));
// 	diagram.setBounds(new Rect(0, 0, 500, 500));
// });

// console.log(str);

var input6 = document.querySelector('#verify');
var textarea = document.querySelector('textarea');
input6.addEventListener('change', () => {
	let files = input6.files;
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
// function validate() {
// 	// document.getElementById("undo").style.display = "inline-block";
// 	str = $('#input').val().split("\n");
// 	n = str.length;
// 	vec = new Array(n);
// 	obj = new Array(n);
// 	for (var i = 0; i < obj.length; i++) {
// 		obj[i] = new Array(4);
// 		arr[i] = new Array(0);
// 	}

// 	 console.log(n);

// 	let p = 3;
// 	// console.log(str[1]);
// 	for (var i = 0; i < n; i++) {
// 		let size = 0;
// 		for (var j = 0; j < str[i].length; j++) {
// 			if (str[i][j] != '-') break;
// 			else size++;
// 		}
// 		// console.log(size);
// 		vec[size / 2] = i;
// 		if (size == 0) {
// 			p++;
// 			// arr[0].push(i);
// 			zero.push(i);
// 		}
// 		else {
// 			arr[vec[(size / 2) - 1]].push(i);
// 		}
// 		// console.log(size);
// 		let len = str[i].length;
// 		// let s = str[i].search(',');
// 		str[i] = str[i].substring(size);
// 		obj[size / 2].push(str[i]);
// 	}

// 	console.log(arr);
// 	localStorage.setItem("str-array", JSON.stringify(str));
// 	localStorage.setItem("arr-array", JSON.stringify(arr));

// 	document.location.href = "tree.html";
// }

// var str = JSON.parse(localStorage.getItem("str-array"));
// var arr = JSON.parse(localStorage.getItem("arr-array"));
var dashCounter = 0;
var ifNo = 0;
var ifYes = 0;

var i;

var input2 = document.querySelector('#verify');

input2.addEventListener("click", function(){



for(let i = 0; i <= arr.length; i++){
    
    // for(let j = 0 ; j < arr[i].length; j++){
    //     console.log(j);
    console.log("hi");

    console.log(arr[i]);

    if(arr[i].indexOf("Are") != -1 || arr[i].indexOf("Do") != -1 || arr[i].indexOf("Does") != -1 || arr[i].indexOf("Would") != -1 || arr[i].indexOf("Is") != -1 || arr[i].indexOf("What") != -1 || arr[i].indexOf("Have you") != -1 || arr[i].indexOf("Where") != -1 || arr[i].indexOf("So are there") != -1 || arr[i].indexOf("Did") != -1){
        if((arr[arr.length-1].getIndexOf("?") == -1)){
            alert("Please check to see if there is a question mark (?) after every question or if there are any extra question marks. The allowed question words are: Are, Do, Does, Would, Is, What, Have you, Where, So are there, Did.");
        }
    }

    
    while(arr[i].equals("-")){
        dashCounter++;
    }
    

    if(arr[i].getIndexOf("If No") != -1 || arr[i].getIndexOf("If no") != -1 || arr[i].getIndexOf("if no") != -1 || arr[i].getIndexOf("if No") != -1 ){
        ifNo++;
    }

    if(arr[i].getIndexOf("If Yes") != -1 || arr[i].getIndexOf("If yes") != -1 || arr[i].getIndexOf("if yes") != -1 || arr[i].getIndexOf("if Yes") != -1 ){
        ifYes++;
    }

//}
}

if(ifNo != ifYes){
    alert("Unequal If No's or If Yes's");
}

if(dashCounter%2 != 0){
    alert("Wrong number of hyphens!");
}
});

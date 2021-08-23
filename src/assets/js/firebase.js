//(function() {

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
  apiKey: "AIzaSyDc_Slru4aZtwlefN2VyTmRBXh8cIlvHp4",
  authDomain: "tbbwebsite-ad242.firebaseapp.com",
  databaseURL: "https://tbbwebsite-ad242-default-rtdb.firebaseio.com",
  projectId: "tbbwebsite-ad242",
  storageBucket: "tbbwebsite-ad242.appspot.com",
  messagingSenderId: "1008320966454",
  appId: "1:1008320966454:web:71196b7751ac707924cd97",
  measurementId: "G-V5BWN2TVZN"
};

firebase.initializeApp(config);
	var firestore = firebase.firestore();
  
	const docRef = firestore.doc("creator/creatorData");
	const inputTextField = document.querySelector("#name");
	const saveButton = document.querySelector("#saveButton");
	
	saveButton.addEventListener("click", function() {
      	const textToSave = inputTextField.value;
      console.log("I am going to save" + textToSave + "to Firestore.");)
      dcRef.set({
        creatorStatus: textToSave
      }).then(function() {
        	console.log("Request sent!");
      }).catch(function(error) {
        	console.log("Error", error);
    });
    })   
//})();


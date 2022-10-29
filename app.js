
var quiz =[
  {
    question: "Html Stands For ____________________________",
    options: [
      "Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language",
      ],
      correctAns: "Hypertext markup language",
    },
    {
      question: "Css Stands For _______________________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "Js Stands For _______________________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "Dom Stands For _______________________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "Ram Stands For _______________________",
      options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
      correctAns: "Random Acccess Memory",
    },
    {
      question: "Rom Stands For _______________________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ]
  
  var currentNum  = document.getElementById('currentNum');
  var totalNum  = document.getElementById('totalNum');
  var btnCont  = document.getElementById('btnCont');
  var questionBox = document.getElementById('questionBox');
  var opt = document.getElementsByClassName('optBtn');
  console.log(opt);
  
  currentIndex = 0;
  
  
  function renderInit(){
    // opt.innerHTML = ""
    currentNum.innerHTML = currentIndex +1;
    totalNum.innerHTML = quiz.length;
    questionBox.innerHTML = quiz[currentIndex].question;

    for (var i=0; i < opt.length; i++){
      // console.log(quiz[currentIndex].options[i]);

      // opt.innerHTML += `<button class="col btn">${quiz[currentIndex].options[i]}</button>`
      opt[i].innerHTML = quiz[0].options[i] 
    }


        //   questionBox.innerHTML = quiz[question[1]];
    

    // for(var i=0; i<quiz.question[i]; i++)
  }
  renderInit()

  // function next() {
  //   if (currentIndex + 1 == quiz.length) {

  //   } else {
  //     currentIndex++;
  //     renderInit();
  //   }
  // }
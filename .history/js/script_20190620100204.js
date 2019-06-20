/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing
    
   //keeping "study guide" as future resource for future self
/*** 
   created global variables to store DOM elements needed to reference and manipulate the DOM
   being mindful of global and local variables within the scope of the functions
***/
const theStudents = document.getElementsByClassName('student-item cf');
const studentspagina = 10;


/*** 
      creating a showpage function to hide items except for 10 that 
      want to shown , ie. a "block"
      leaving Pro tips in my comments to refresh my future self's memory if need be
   
   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const showPage = (list, page) => {
   const startIndex = (page * studentspagina) - studentspagina;
   const endIndex = (page * studentspagina);
   for
      (let i = 0; i < list.length; i++) {

      if (i >= startIndex && i < endIndex) {
         list[i].style.display = "block";
      } else {
         list[i].style.display = "none";
      }
   }
}
showPage(theStudents, 1);




/*** 
   creating the functionality to enable pagination

***/

const appendPageLinks = (list) => {
   const maxPages = Math.ceil(list.length / studentspagina);
   let div = document.createElement("div");
   div.className = "pagination";
   //we generate the action to append the the element the user chooses
   document.querySelector(".page").appendChild(div);
   let ul = document.createElement("ul");
   div.appendChild(ul);
   for
      (let i = 1; i <= maxPages; i++) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.textContent = `${i}`;                              //variable inside a template literal requires ${} setting variable to value of i
      a.href = `#`;
      if (i == 1) {
         a.className = "active";                           //added class name to first pagination link
      }
      ul.appendChild(li);
      li.appendChild(a);
   }
   ul.addEventListener("click", (event) => {
      const btn = event.target;
     // console.log(event.target);
      //here we hear the behaviour of the end user's choice

      
      let number = event.target.textContent;
      showPage(theStudents, number);

      let btns = document.querySelectorAll("a");
      for (let i = 0; i < btns.length; i++){
         btns[i].className = "none";
      }

      btn.className = "active";
   });
   }

   appendPageLinks(theStudents);



// thank you for review of my project two, pagination and list, traversing and bubbling through the DOM dynamically
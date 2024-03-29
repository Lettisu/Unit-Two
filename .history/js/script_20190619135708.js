/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const theStudents = document.getElementsByClassName('student-item cf');
const studentspagina = 10;


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
   
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
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   const maxPages = Math.ceil(list.length / studentspagina);
   let div = document.createElement("div");
   div.className = "pagination";
   //document.getElementByClassName("page").appendChild(div);
   document.querySelector(".page").appendChild(div);
   let ul = document.createElement("ul");
   div.appendChild(ul);
   for
      (let i = 1; i <= maxPages; i++) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.textContent = `${i}`;                              //variable inside a template literal requires ${} setting variable to value of i
      a.href = `#`;
      if (i === 1) {
         a.className = "active";                           //added class name to first pagination link
      }
      ul.appendChild(li);
      li.appendChild(a);
   }
   ul.addEventListener("click", (e) => {
      const btn = e.target;
      let number
      if (btn === 'A') {
        // let number = e.target.textContent;

         //if (e.target = a) {
         let link = document.getElementByClassName("pagination a");
         //}

         for
            (let i = 1; i <= link.length; i++) {
            // const hide = (e) 
            // e.target.style.visibility = 'hidden';
            link[i].classList.remove("active");
            // ul.addEventListener('click', hide, false);
            number = `${i}`;
         }
            btn.className = "active";
      }
      showPage(theStudents, number);

   });
}


showPage(theStudents, 1);
appendPageLinks(theStudents);



// Remember to delete the comments that came with this file, and replace them with your own code comments.
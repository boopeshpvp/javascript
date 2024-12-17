// let clonedElements = [];
// const deleteButton = document.getElementById("deleteButton");

// function addNewPoint() {
//     const pointsContainer = document.getElementById('pointsContainer');
//     const clone = pointsContainer.cloneNode(true);
//     const inputField = clone.querySelector('.eventdetails-addkeypoint');
//     clone.value = ''; // Clear the value of the input field in the cloned element
//     pointsContainer.parentNode.insertBefore(clone, pointsContainer.nextSibling);
//     clonedElements.push(clone);
//     deleteButton.style.display = 'inline-block'; // Show the delete button
// }
// const pointsContainer = document.getElementById("pointsContainer");
// function deleteLastPoint() {
//     if (clonedElements.length > 0) {
//         const lastClone = clonedElements.pop();
//         lastClone.remove();
//     }
//     if (clonedElements.length === 0) {
//         deleteButton.style.display = 'none';
//     }
// }

// function addNewPoint() {
//   const pointsContainer = document.getElementById("pointsContainer");
//   const deleteButton = document.getElementById("deleteButton");
//   const iFeild = document.createElement("input");
//   iFeild.setAttribute("type", "text");
//   iFeild.setAttribute("placeholder", "Enter your point here");
//   iFeild.setAttribute("class", "form-control eventdetails-addkeypoint");
//   pointsContainer.appendChild(iFeild);
//   deleteButton.style.display = "inline-block";
// }

// function deleteLastPoint() {
//   const deleteButton = document.getElementById("deleteButton");
//   let allInputs = document
//     .getElementById("pointsContainer")
//     .querySelectorAll('input[type="text"]');

//   allInputs[allInputs.length - 1].parentNode.removeChild(
//     allInputs[allInputs.length - 1]
//   );

//   if (allInputs.length < 3) {
//     deleteButton.style.display = "none";
//   }
// }

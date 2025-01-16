
    const togglebtn = document.querySelector('.toggle')
    const togglebtnicon = document.querySelector('.toggle i')
    const dropdownmenu = document.querySelector('.dropdown')

    togglebtn.onclick = function(){
        dropdownmenu.classList.toggle('open')
        const isOpen = dropdownmenu.classList.contains('open')
        togglebtnicon.classList= isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    }



// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Iterate from 1 to 8 for semester and container pairs
    for (let i = 1; i <= 8; i++) {
      // Select the current semester div
      const semesterDiv = document.querySelector(`.Semester-${i}`);
      
      // Ensure the semester div exists before adding an event listener
      if (semesterDiv) {
        // Add event listener to each semester div
        semesterDiv.addEventListener('click', function () {
          // Select the PYQ and Index sections
          const pyqSection = document.querySelector('.pyq');
          const indexSection = document.querySelector('.index');
          
          // Ensure these elements exist and toggle their classes
          if (pyqSection) pyqSection.classList.remove('hide');
          if (indexSection) indexSection.classList.add('hide');
  
          // Hide all container divs
          for (let j = 1; j <= 8; j++) {
            const containerDiv = document.querySelector(`.container-${j}`);
            if (containerDiv) containerDiv.classList.add('hide');
          }
  
          // Unhide the corresponding container div
          const targetContainer = document.querySelector(`.container-${i}`);
          if (targetContainer) targetContainer.classList.remove('hide');
        });
      }
    }
  });
  
  


function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message; // Set the message
    toast.style.display = 'block'; // Show the toast
    setTimeout(() => {
        toast.style.display = 'none'; // Hide the toast after 2 seconds
    }, 2000); // Adjust time as needed
}

// Add click event listeners to all divs with the class "myDiv"
document.querySelectorAll('.myDiv').forEach(div => {
    div.addEventListener('click', function () {
        showToast('PLEASE CLICK ON TEXT "Semester 👈" ');
    });
});

// Add click event listeners to all spans with the class "myText"
document.querySelectorAll('.myText').forEach(text => {
    text.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent event from reaching the parent div
        showToast('Text clicked ✨!');
    });
});



//scroll


document.getElementById("scrollButton").addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({
      behavior: "smooth"
    });
  });
  

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




// if (window.location.pathname.includes("index.html")) {
    
//     const semesterButtons = document.querySelectorAll("[class^='Semester-']");

    
//     semesterButtons.forEach(button => {
//         button.addEventListener("click", (event) => {
//             const semesterClass = event.target.className; 
//             localStorage.setItem("selectedSemester", semesterClass); 
//             window.location.href = "pyq.html"; 
//         });
//     });
// }

// // On pyq.html
// if (window.location.pathname.includes("pyq.html")) {
//     const selectedSemester = localStorage.getItem("selectedSemester"); 
//     if (selectedSemester) {
        
//         const containerClass = selectedSemester.replace("Semester", "container");
//         const container = document.querySelector(`.${containerClass}`); 
//         if (container) {
//             container.classList.remove("hide"); 
//         }
//         localStorage.removeItem("selectedSemester"); 
//     }
// }




if (window.location.pathname.includes("index.html")) {
    const semesterButtons = document.querySelectorAll("a[class^='Semester-']");

    semesterButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            // Get all the classes of the clicked element
            const classes = event.target.classList;
            
            // Find the class that starts with "Semester-" (could be multiple classes)
            const semesterClass = [...classes].find(className => className.startsWith('Semester-'));

            if (semesterClass) {
                // Store only the "Semester-" class in localStorage
                localStorage.setItem("selectedSemester", semesterClass);
                window.location.href = "pyq.html"; 
            }
        });
    });
}
if (window.location.pathname.includes("pyq.html")) {
    const selectedSemester = localStorage.getItem("selectedSemester");
    
    if (selectedSemester) {
        const containerClass = selectedSemester.replace("Semester", "container");
        const container = document.querySelector(`.${containerClass}`);

        if (container) {
            container.classList.remove("hide");
        } else {
            console.error(`Container for ${selectedSemester} not found.`);
        }
        localStorage.removeItem("selectedSemester");
    }
}




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
  
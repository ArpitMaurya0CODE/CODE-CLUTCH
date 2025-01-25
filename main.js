
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



/
document.addEventListener('DOMContentLoaded', function () {
    
    for (let i = 1; i <= 8; i++) {
     
      const semesterDiv = document.querySelector(`.Semester-${i}`);
      
      
      if (semesterDiv) {
       
        semesterDiv.addEventListener('click', function () {
         
          const pyqSection = document.querySelector('.pyq');
          const indexSection = document.querySelector('.index');
          
          
          if (pyqSection) pyqSection.classList.remove('hide');
          if (indexSection) indexSection.classList.add('hide');
  
          
          for (let j = 1; j <= 8; j++) {
            const containerDiv = document.querySelector(`.container-${j}`);
            if (containerDiv) containerDiv.classList.add('hide');
          }
  
          
          const targetContainer = document.querySelector(`.container-${i}`);
          if (targetContainer) targetContainer.classList.remove('hide');
        });
      }
    }
  });
  
  


function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message; 
    toast.style.display = 'block'; 
    setTimeout(() => {
        toast.style.display = 'none'; 
    }, 2000); 
}


document.querySelectorAll('.myDiv').forEach(div => {
    div.addEventListener('click', function () {
        showToast('PLEASE CLICK ON TEXT "Semester 👈" ');
    });
});


document.querySelectorAll('.myText').forEach(text => {
    text.addEventListener('click', function (event) {
        event.stopPropagation(); 
        showToast('Text clicked ✨!');
    });
});


document.getElementById("scrollButton").addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({
      behavior: "smooth"
    });
  });
  
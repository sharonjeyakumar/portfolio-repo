const PROJECTS = document.querySelectorAll('.project');
const homenav = document.querySelector('.homenav');
const projectnav = document.querySelector('.projectnav');
const resumenav = document.querySelector('.resumenav');
const aboutnav = document.querySelector('.aboutnav');
const contactnav = document.querySelector('.contactnav');

const navbg = document.querySelector('.navbg');
const navItems = document.querySelectorAll('.nav-item'); 


//Right Columns 
const rightcol = document.querySelector('.right-col'); 
const leftcol = document.querySelector('.left-col'); 
const resumecol = document.querySelector('.resume-col'); 


const projectShowcase1 = document.querySelector('.projectShowcase1'); 



const directory = document.querySelectorAll('.directory'); 

const page = document.querySelector('.page');
const background = document.querySelector('.background');



PROJECTS.forEach(project => {
    const project_date = project.querySelector('.project-date'); // Find the project date inside each project
    project.addEventListener('mouseover', () => {
        if (project_date) {
            project_date.style.marginLeft = '10px';  // Adjust the margin-left of the specific project_date
        }
    });

    project.addEventListener('mouseout', () => {
        if (project_date) {
            project_date.style.marginLeft = '';  // Reset the margin-left when the mouse leaves
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Default active item (Home)
    navItems[0].classList.add('active');
    
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));

            // Add active class to the clicked item
            item.classList.add('active');

            directory.forEach(directory =>{
                directory.textContent = 'home';
                if (item === projectnav) {
                    rightcol.classList.add('showColumn');
                    resumecol.classList.remove('showColumn');
                    navbg.style.left = '97px';  // Move navbg for Projects
                    navbg.style.width = '72px';
                    directory.textContent = 'projects';

                    page.style.height = '100px';
                    background.style.height = '100px';
                    rightcol.style.height = '100px';
                    resumecol.style.height = '100px';
                    leftcol.style.height = '100px';

                    // resumecol.style.display ='none';
                    
                    
                } else if (item === homenav) {
                    rightcol.classList.remove('showColumn');
                    resumecol.classList.add('showColumn');
                    navbg.style.left = '35px';  // Move navbg for Home (if needed)
                    navbg.style.width = '55px';
                    directory.textContent = 'home';

                    page.style.height = '1500px';
                    background.style.height = '1500px';
                    rightcol.style.height = '1500px';
                    resumecol.style.height = '1500px';
                    leftcol.style.height = '1500px';

                    // resumecol.style.display ='inline-block';
                } else if (item === contactnav) {
                    rightcol.classList.remove('showColumn');
                    resumecol.classList.remove('showColumn');
                    navbg.style.left = '181px';  // Example position for Contact
                    navbg.style.width = '64px';
                    directory.textContent = 'contact';
                }
            })    
        });
    });
});


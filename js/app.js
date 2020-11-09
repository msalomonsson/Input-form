/* DOM SELECTORS */
const cardList = document.querySelector('.card-container');
const inputName = document.querySelector('#name-input');
const inputCourse = document.querySelector('#course-input');
const inputAuthor = document.querySelector('#author-input');
const form = document.querySelector('.inputs');
const error = document.querySelector('.Error');
const success = document.querySelector('.Success')
const btn = document.querySelector('.submit-btn');
const icons = document.querySelectorAll('.icon');
const spinner = document.querySelector('.lds-spinner');


/* Event Listeners */

form.addEventListener('submit', addCourse);


/* Functions */

function addCourse(e){
    e.preventDefault();
    console.log('working');

    if (inputName.value == '' || inputCourse.value == '' || inputAuthor.value == ''){

        inputName.classList.toggle('fail');
        inputCourse.classList.toggle('fail');
        inputAuthor.classList.toggle('fail');
        btn.classList.toggle('fail');

        error.style.display = 'flex';

        setTimeout(function(){
            error.style.display = 'none';
            inputName.classList.remove('fail');
            inputCourse.classList.remove('fail');
            inputAuthor.classList.remove('fail');
            btn.classList.remove('fail');
        }, 3000)
    }   else {
        
        success.style.display = 'flex';
        spinner.style.display ='inline-block';

        setTimeout(function(){
            success.style.display = 'none';
            spinner.style.display ='none';

            const htmlCode = `
                <li class="card">
                    <div class="card-top">
                        <picture>
                            <img src="https://source.unsplash.com/random/260x195" alt="Random picture">
                        </picture>
                    </div>
                    <div class="card-bottom">
                        <p class="name">${inputName.value}</p>
                        <p class="course">${inputCourse.value}</p>
                        <p class="author">${inputAuthor.value}</p>
                    </div>
                </li>
            `;

            cardList.innerHTML += htmlCode;

            inputName.value = '';
            inputCourse.value = '';
            inputAuthor.value = '';

        }, 3000)
        

        inputName.focus();
    }


   


}
const setup = () => {
    let divs = document.querySelectorAll('div');
    let nav = document.querySelector('nav');

    divs.forEach(div => {
        nav.insertAdjacentHTML("beforeend", `<a class="topnav">${div.className}</a>`);
    });
    clickHandler();
}

const clickHandler = () => {
    let buttons = document.querySelectorAll('a');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', filterDivs);
    }
}

const filterDivs = (event) => {
    let home = false;
    let selectedButton = event.target;
    let selectedDiv = document.getElementsByClassName(selectedButton.innerHTML)[0];
    
    console.log(selectedDiv);
    if (selectedDiv.classList.contains("home")) {
        home = true;
    }

    let buttons = document.querySelectorAll('a');
    buttons.forEach(button => {
        button.classList.remove("active");
    })
    selectedButton.classList.add("active");

    let divs = document.querySelectorAll('div');
    divs.forEach(div => {
        if (home) {
            div.classList.remove("hidden");
        } else {
            div.classList.add("hidden");
        }
    })
    if (!home) {
        selectedDiv.classList.remove("hidden");
    }
}

window.addEventListener("load", setup);
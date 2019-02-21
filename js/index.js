// JS goes here
class Dropdown {
    constructor(element) {
        //assign this element to the dropdown element
        this.element = element;
        // console.log(this.element);
        // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
        this.button = this.element.querySelector('.hamburger');
        // console.log(this.button);
        // assign the reference to the ".dropdown-content" class found in the dropdown element
        this.content = this.element.querySelector('.menu-content');
        console.log(this.content);
        this.close = this.element.querySelector('.hamburger-close');
        console.log(this.hamburger);
        this.button.addEventListener('click', () => {
            this.toggleContent();
        })
        this.close.addEventListener('click', () => {
            this.toggleContent2();
        })
    }

    toggleContent() {
        this.content.classList.toggle('menu-open');
        this.button.style.display = 'none';
        this.close.classList.toggle('hamburger-close');
    }
    toggleContent2() {
        this.content.classList.toggle('menu-open');
        this.button.style.display = 'block';
        this.close.classList.toggle('hamburger-close');
    }

    
}

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));
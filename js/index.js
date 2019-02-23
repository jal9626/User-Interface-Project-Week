// Dropdown
class Dropdown {
    constructor(element) {
        //assign this element to the dropdown element
        this.element = element;
        
        // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
        this.button = this.element.querySelector('.hamburger');
        
        // assign the reference to the ".dropdown-content" class found in the dropdown element
        this.content = this.element.querySelector('.menu-content');
        
        this.close = this.element.querySelector('.hamburger-close');
        
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

//tabs
class TabLink {
    constructor(tab) {
      // Assign this.element to the passed in DOM element
      this.tab = tab;
      
      // Get the custom data attribute on the Link
      this.data =  this.tab.dataset.tab;
      
      // Using the custom data attribute get the associated Item element
      this.tabItem = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.tabItem);
      
      // Add a click event listener on this instance, calling the select method on click
      this.tab.addEventListener('click', this.select.bind(this));
    };
  
    select() {
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tabs-link'); 
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      links.forEach( (tab) => {tab.classList.remove('tabs-link-selected')}
      );
  
      // Add a class named "tabs-link-selected" to this link
      this.tab.classList.add('tabs-link-selected');
      
      // Call the select method on the item associated with this link
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(item) {
      // Assign this.element to the passed in element
       this.item = item; 
    }
  
    select() {
      // Select all ".tabs-item" elements from the DOM
       const items = document.querySelectorAll('.tabs-item');
  
      // Remove the class "tabs-item-selected" from each element
      items.forEach( (item) => {item.classList.remove('tabs-item-selected')}
      );
      // Add a class named "tabs-item-selected" to this element
      this.item.classList.add('tabs-item-selected');
    }
  }

let links = document.querySelectorAll('.tabs-link').forEach(tabLink => new TabLink(tabLink));

let tab = document.querySelectorAll('.tabs-link');
tab[0].addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'rgb(133, 133, 133)';
    event.target.style.color = '#FFFFFF'; 
});
tab[0].addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = '#FFFFFF';
    event.target.style.color = 'black'; 
});

tab[1].addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'rgb(133, 133, 133)';
    event.target.style.color = '#FFFFFF'; 
});
tab[1].addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = '#FFFFFF';
    event.target.style.color = 'black'; 
});

tab[2].addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'rgb(133, 133, 133)';
    event.target.style.color = '#FFFFFF'; 
});
tab[2].addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = '#FFFFFF';
    event.target.style.color = 'black'; 
});


tab[3].addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'rgb(133, 133, 133)';
    event.target.style.color = '#FFFFFF'; 
});
tab[3].addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = '#FFFFFF';
    event.target.style.color = 'black'; 
});
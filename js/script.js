// Menu data
const menuData = {
    "chicken-mandi": {
        title: "Chicken Mandi",
        items: [
            { name: "Chicken Fry Mandi (1 Piece)", price: "240/-" },
            { name: "Chicken Fry Mandi (2 Piece)", price: "440/-" },
            { name: "Chicken Fry Mandi (3 Piece)", price: "640/-" },
            { name: "Chicken Fry Mandi (4 Piece)", price: "840/-" },
            { name: "Chicken Juicy Mandi (1 Piece)", price: "260/-" },
            { name: "Chicken Juicy Mandi (2 Piece)", price: "460/-" },
            { name: "Chicken Juicy Mandi (3 Piece)", price: "660/-" },
            { name: "Chicken Juicy Mandi (4 Piece)", price: "880/-" },
            { name: "Al Faham Mandi (1 Piece)", price: "280/-" },
            { name: "Al Faham Mandi (2 Piece)", price: "480/-" },
            { name: "Al Faham Mandi (3 Piece)", price: "700/-" },
            { name: "Al Faham Mandi (4 Piece)", price: "900/-" },
            { name: "Chicken Broasted Mandi (1 Piece)", price: "260/-" },
            { name: "Chicken Broasted Mandi (2 Piece)", price: "480/-" },
            { name: "Chicken Broasted Mandi (3 Piece)", price: "680/-" },
            { name: "Chicken Broasted Mandi (4 Piece)", price: "880/-" },
            { name: "Grill Chicken Mandi (2 Piece)", price: "450/-" },
            { name: "Grill Chicken Mandi (4 Piece)", price: "850/-" },
            { name: "Barbeque Chicken Mandi (2 Piece)", price: "450/-" },
            { name: "Barbeque Chicken Mandi (4 Piece)", price: "900/-" },
            { name: "Chicken 65 Mandi", price: "400/-" },
            { name: "Chicken Lollypop Mandi", price: "380/-" },
            { name: "Crunchy Mandi", price: "200/-" },
            { name: "Extra Chicken Piece", price: "420/-" },
            { name: "Extra Juicy", price: "150/-" },
            { name: "Extra Mayo", price: "40/-" },
            { name: "LAZEEZ Chicken mix Mandi", price: "1000/-" }
        ]
    },
    "beef-biryani": {
        title: "Beef Biryani",
        items: [
            { name: "Beef Biryani Single", price: "120/-" },
            { name: "Beef Biryani Plate", price: "180/-" },
            { name: "Beef Spl. Biryani", price: "210/-" },
            { name: "Beef Biryani Family Pack", price: "540/-" },
            { name: "Beef Biryani Jumbo Pack", price: "680/-" }
        ]
    },
    "chicken-biryani": {
        title: "Chicken Biryani",
        items: [
            { name: "Chicken Biryani Single", price: "130/-" },
            { name: "Chicken Biryani Plate", price: "200/-" },
            { name: "Chicken Spl. Biryani", price: "230/-" },
            { name: "Chicken Biryani Family Pack", price: "580/-" },
            { name: "Chicken Biryani Jumbo Pack", price: "740/-" }
        ]
    },
    "veg-biryani": {
        title: "Veg Biryani",
        items: [
            { name: "Egg Biryani", price: "130/-" },
            { name: "Veg. Biryani", price: "150/-" },
            { name: "Paneer Biryani", price: "180/-" }
        ]
    },
    "shawarma": {
        title: "Shawarma",
        items: [
            { name: "Shawarma", price: "130/-" },
            { name: "Shawarma With Salad", price: "120/-" },
            { name: "Lazeez Spl. Shawarma", price: "140/-" },
            { name: "Chicken 65 Shawarma", price: "140/-" }
        ]
    },
    "grill-chicken": {
        title: "Grill Chicken",
        items: [
            { name: "Grill Chicken (1 Piece)", price: "120/-" },
            { name: "Grill Chicken (Half)", price: "200/-" },
            { name: "Grill Chicken (Full)", price: "380/-" }
        ]
    },
    "chinese-corner": {
        title: "Chinese Corner",
        items: [
            { name: "Butter Chicken", price: "160/- / 230/-", halfFull: true },
            { name: "Kadai Chicken", price: "160/- / 230/-", halfFull: true },
            { name: "Chicken Masala", price: "160/- / 230/-", halfFull: true },
            { name: "Chicken Curry", price: "160/- / 230/-", halfFull: true },
            { name: "Garlic Chicken", price: "160/- / 230/-", halfFull: true },
            { name: "Ginger Chicken", price: "160/- / 230/-", halfFull: true },
            { name: "Dum Ka Chicken", price: "160/- / 230/-", halfFull: true },
            { name: "Chicken Afgani", price: "160/- / 230/-", halfFull: true },
            { name: "Lazeez Spl. Chicken", price: "170/- / 260/-", halfFull: true },
            { name: "Hyderabadi Chicken", price: "160/- / 230/-", halfFull: true },
            { name: "Andhra Chicken", price: "160/- / 230/-", halfFull: true },
            { name: "Telangana Chicken", price: "160/- / 230/-", halfFull: true },
            { name: "Chef Spl. Curry", price: "160/- / 230/-", halfFull: true },
            { name: "Malai Chicken", price: "160/- / 230/-", halfFull: true }
        ]
    },
    "chinese-veg": {
        title: "Chinese Veg",
        items: [
            { name: "Gobi Manchurian 65", price: "180/-" },
            { name: "Paner Tikka", price: "180/-" },
            { name: "Paner 65", price: "180/-" },
            { name: "Paner Majestic", price: "180/-" },
            { name: "Kaju Masala", price: "180/-" },
            { name: "Palak Paner", price: "180/-" }
        ]
    },
    "sea-food": {
        title: "Sea Food",
        items: [
            { name: "Apollo Fish", price: "200/- / 300/-", halfFull: true },
            { name: "Chilli Fish", price: "200/- / 300/-", halfFull: true },
            { name: "Fish Manchurian", price: "200/- / 300/-", halfFull: true },
            { name: "Fish 65", price: "200/- / 300/-", halfFull: true },
            { name: "Pepper Fish", price: "200/- / 300/-", halfFull: true }
        ]
    },
    "chinese-dry-wet": {
        title: "Chinese Dry/Wet",
        items: [
            { name: "Chilli Chicken", price: "130/- / 200/-", halfFull: true },
            { name: "Chicken 65", price: "130/- / 200/-", halfFull: true },
            { name: "Chicken 555", price: "130/- / 200/-", halfFull: true },
            { name: "Chicken Majestic", price: "160/- / 200/-", halfFull: true },
            { name: "R.R. Chicken", price: "180/- / 200/-", halfFull: true },
            { name: "Schezwan Chicken", price: "140/- / 200/-", halfFull: true },
            { name: "Garlic Chicken", price: "160/- / 200/-", halfFull: true },
            { name: "Chicken Lollypop", price: "150/- / 240/-", halfFull: true },
            { name: "Chicken Dusmück", price: "150/- / 240/-", halfFull: true },
            { name: "Lazeez Spl. Chinese Platter", price: "600/- / 1000/-", halfFull: true },
            { name: "Ginger Chicken Dry", price: "150/- / 200/-", halfFull: true },
            { name: "Chicken Manchurian", price: "130/- / 200/-", halfFull: true },
            { name: "Power Pepper Chicken", price: "140/- / 220/-", halfFull: true },
            { name: "Dragon Chicken", price: "140/- / 200/-", halfFull: true }
        ]
    },
    "beef-dry-wet": {
        title: "Beef Dry/Wet",
        items: [
            { name: "Beef Talawa Gosht", price: "130/- / 200/-", halfFull: true },
            { name: "Beef Masala", price: "130/- / 200/-", halfFull: true },
            { name: "Beef Boti Fry", price: "130/- / 200/-", halfFull: true },
            { name: "Beef Kheema", price: "140/- / 250/-", halfFull: true },
            { name: "Beef Mutton Mulghai", price: "150/- / 220/-", halfFull: true },
            { name: "Beef Mutton Rogan Gosht", price: "150/- / 250/-", halfFull: true },
            { name: "Beef Mutton Shahi Korma", price: "130/- / 200/-", halfFull: true }
        ]
    },
    "prawns": {
        title: "Prawns",
        items: [
            { name: "Loose Prawns", price: "150/- / 250/-", halfFull: true },
            { name: "Chilli Prawns", price: "160/- / 260/-", halfFull: true },
            { name: "Garlic Prawns", price: "160/- / 260/-", halfFull: true },
            { name: "Pepper Prawns", price: "160/- / 260/-", halfFull: true }
        ]
    },
    "rice-noodles": {
        title: "Rice & Noodles",
        items: [
            { name: "Chicken Fried Rice", price: "100/- / 160/-", halfFull: true },
            { name: "Chicken Noodles", price: "100/- / 160/-", halfFull: true },
            { name: "Egg Fried Rice", price: "80/- / 140/-", halfFull: true },
            { name: "Egg Noodles", price: "80/- / 140/-", halfFull: true },
            { name: "Veg Fried Rice", price: "90/- / 150/-", halfFull: true },
            { name: "Veg Noodles", price: "90/- / 150/-", halfFull: true },
            { name: "Chk Schezwan Rice", price: "100/- / 170/-", halfFull: true },
            { name: "Chk Schezwan Noodles", price: "100/- / 170/-", halfFull: true },
            { name: "Singapr Rice", price: "100/- / 170/-", halfFull: true },
            { name: "Sgina Noodles", price: "100/- / 170/-", halfFull: true },
            { name: "Chicken Manchurian", price: "130/- / 200/-", halfFull: true },
            { name: "Veg Manchurian", price: "100/- / 170/-", halfFull: true },
            { name: "Jeera Rice", price: "100/- / 150/-", halfFull: true }
        ]
    },
    "desert": {
        title: "Desert",
        items: [
            { name: "Double Ka Meetha", price: "Price on request" },
            { name: "Kaddu Ki Kheer", price: "Price on request" },
            { name: "Gajar Ka Halwa", price: "Price on request" },
            { name: "Apricot Delight", price: "Price on request" }
        ]
    },
    "rotis": {
        title: "Rotis",
        items: [
            { name: "Romali Roti", price: "Price on request" },
            { name: "Tandori Roti", price: "Price on request" }
        ]
    },
    "handi-for-parties": {
        title: "Handi For Parties",
        items: [
            { name: "Chicken Handi (30 Members)", price: "4,000/-" },
            { name: "Chicken Handi (50 Members)", price: "6,500/-" },
            { name: "Chicken Handi (100 Members)", price: "12,000/-" },
            { name: "Mutton Handi (30 Members)", price: "8,000/-" },
            { name: "Mutton Handi (50 Members)", price: "12,000/-" },
            { name: "Mutton Handi (100 Members)", price: "18,000/-" },
            { name: "Beef Handi (30 Members)", price: "3,500/-" },
            { name: "Beef Handi (50 Members)", price: "5,500/-" },
            { name: "Beef Handi (100 Members)", price: "10,000/-" }
        ]
    }
};

// Daily Specials Data
const dailySpecials = {
    "monday": {
        dish: "Hyderabadi Chicken Biryani",
        price: "230/-",
        description: "Authentic dum biryani with aromatic spices"
    },
    "tuesday": {
        dish: "Butter Chicken",
        price: "230/-",
        description: "Creamy and rich butter chicken with naan"
    },
    "wednesday": {
        dish: "Grill Chicken Mandi",
        price: "450/-",
        description: "Traditional Arabian rice with grilled chicken"
    },
    "thursday": {
        dish: "Chicken 65",
        price: "200/-",
        description: "Spicy and crispy chicken appetizer"
    },
    "friday": {
        dish: "Fish Manchurian",
        price: "300/-",
        description: "Crispy fish in tangy Manchurian sauce"
    },
    "saturday": {
        dish: "LAZEEZ Chicken Mix Mandi",
        price: "1000/-",
        description: "Special mix of all our chicken varieties"
    },
    "sunday": {
        dish: "Beef Biryani Family Pack",
        price: "540/-",
        description: "Perfect for family gatherings"
    }
};

// Category icons mapping
const categoryIcons = {
    "chicken-mandi": "fa-drumstick-bite",
    "beef-biryani": "fa-utensils",
    "chicken-biryani": "fa-utensils",
    "veg-biryani": "fa-carrot",
    "shawarma": "fa-bread-slice",
    "grill-chicken": "fa-fire",
    "chinese-corner": "fa-utensil-spoon",
    "chinese-veg": "fa-leaf",
    "sea-food": "fa-fish",
    "chinese-dry-wet": "fa-pepper-hot",
    "beef-dry-wet": "fa-drumstick-bite",
    "prawns": "fa-shrimp",
    "rice-noodles": "fa-bowl-rice",
    "desert": "fa-ice-cream",
    "rotis": "fa-bread-slice",
    "handi-for-parties": "fa-utensils"
};

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Load categories on home page
    if (document.getElementById('categories-grid')) {
        loadCategoriesGrid();
    }
    
    // Load daily specials on home page
    if (document.getElementById('daily-specials')) {
        loadDailySpecials();
    }
    
    // Load menu navigation and content on menu page
    if (document.getElementById('categories-nav-grid') && document.getElementById('menu-content')) {
        loadMenuNavigation();
        loadMenuContent();
        setupMenuNavigation();
    }
});

// Load daily specials
function loadDailySpecials() {
    const specialsContainer = document.getElementById('daily-specials');
    let html = '';
    
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    
    days.forEach(day => {
        const special = dailySpecials[day];
        html += `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="special-card">
                    <div class="special-day">${capitalizeFirstLetter(day)}</div>
                    <div class="special-content">
                        <div class="special-dish">${special.dish}</div>
                        <div class="special-price">${special.price}</div>
                        <div class="special-desc">${special.description}</div>
                    </div>
                </div>
            </div>
        `;
    });
    
    specialsContainer.innerHTML = html;
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Load categories grid on home page
function loadCategoriesGrid() {
    const gridContainer = document.getElementById('categories-grid');
    let html = '';
    
    for (const [key, category] of Object.entries(menuData)) {
        html += `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <a href="menu.html#${key}" class="category-card">
                    <div class="category-image">
                        <img src="images/${key}.jpg" alt="${category.title}" onerror="this.src='images/placeholder.jpg'">
                    </div>
                    <div class="category-content">
                        <h3 class="category-title">${category.title}</h3>
                        <p class="category-count">${category.items.length} items</p>
                    </div>
                </a>
            </div>
        `;
    }
    
    gridContainer.innerHTML = html;
}

// Load menu navigation
function loadMenuNavigation() {
    const navContainer = document.getElementById('categories-nav-grid');
    let html = '';
    
    for (const [key, category] of Object.entries(menuData)) {
        html += `
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                <div class="category-nav-item" data-category="${key}">
                    <div class="category-nav-icon">
                        <i class="fas ${categoryIcons[key]}"></i>
                    </div>
                    <div class="category-nav-title">${category.title}</div>
                </div>
            </div>
        `;
    }
    
    navContainer.innerHTML = html;
}

// Load menu content
function loadMenuContent() {
    const contentContainer = document.getElementById('menu-content');
    let html = '';
    
    for (const [key, category] of Object.entries(menuData)) {
        html += `
            <div class="menu-category" id="${key}">
                <h2 class="menu-category-title">${category.title}</h2>
                <div class="row">
        `;
        
        category.items.forEach(item => {
            const priceHtml = item.halfFull 
                ? `<div class="menu-item-price half-full">
                     <span>Half: ${item.price.split(' / ')[0]}</span>
                     <span>Full: ${item.price.split(' / ')[1]}</span>
                   </div>`
                : `<div class="menu-item-price">${item.price}</div>`;
            
            html += `
                <div class="col-lg-4 col-md-6">
                    <div class="menu-item-card">
                        <div class="menu-item-image">
                            <img src="images/menu/${key}/${item.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.jpg" 
                                 alt="${item.name}" 
                                 onerror="this.src='images/placeholder.jpg'">
                        </div>
                        <div class="menu-item-content">
                            <h3 class="menu-item-title">${item.name}</h3>
                            ${priceHtml}
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    }
    
    contentContainer.innerHTML = html;
}

// Setup menu navigation
function setupMenuNavigation() {
    const navItems = document.querySelectorAll('.category-nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Remove active class from all items
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Scroll to category
            const targetElement = document.getElementById(category);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Set first category as active by default
    if (navItems.length > 0) {
        navItems[0].classList.add('active');
    }
    
    // Update active nav item on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 150;
        
        for (const [key] of Object.entries(menuData)) {
            const element = document.getElementById(key);
            if (element) {
                const offsetTop = element.offsetTop;
                const offsetBottom = offsetTop + element.offsetHeight;
                
                if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                    // Remove active class from all items
                    navItems.forEach(navItem => {
                        navItem.classList.remove('active');
                    });
                    
                    // Add active class to current category
                    const activeNavItem = document.querySelector(`.category-nav-item[data-category="${key}"]`);
                    if (activeNavItem) {
                        activeNavItem.classList.add('active');
                    }
                    break;
                }
            }
        }
    });
}
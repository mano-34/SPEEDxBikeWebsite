//nav menu

const menuBtn = document.getElementById("menu-open-button");
const navMenu = document.querySelector(".nav-menu");

// nav menu / icon
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-times");
    } else {
        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");
    }
});

// Auto close
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");
    });
});



// signup/login
const navAccount = document.getElementById("navAccount");
const authOverlay = document.getElementById("authOverlay");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const closeAuth = document.getElementById("closeAuth");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

// Show form
function showAuth(type) {
    authOverlay.style.display = "flex";
    if (type === "login") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

// show login
navAccount.addEventListener("click", (e) => {
    e.preventDefault();
    showAuth("login");
});

// Close overlay
closeAuth.addEventListener("click", () => authOverlay.style.display = "none");

// Switch forms
showSignup.addEventListener("click", (e) => {
    e.preventDefault();
    showAuth("signup");
});
showLogin.addEventListener("click", (e) => {
    e.preventDefault();
    showAuth("login");
});

// Close  click outside
authOverlay.addEventListener("click", (e) => {
    if (e.target === authOverlay) {
        authOverlay.style.display = "none";
    }
});

let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("signupSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim().toLowerCase();
    const password = document.getElementById("signupPassword").value.trim();

    if (!name || !email || !password) {
        alert("All fields are required!");
        return;
    }

    // Check already exists
    if (users.some(u => u.email === email)) {
        alert("User already exists! Please login.");
        showAuth("login");
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", email);
    alert("Account created successfully!");
    authOverlay.style.display = "none";
});

document.getElementById("loginSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
        alert("Please enter email and password!");
        return;
    }

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("currentUser", email);
        alert("Logged in successfully!");
        authOverlay.style.display = "none";
    } else {
        alert("Invalid email or password!");
    }
});


//  add to cart

const bikeItems = document.querySelectorAll(".menu-item");
bikeItems.forEach(item => {
    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.classList.add("add-cart-btn");
    item.appendChild(button);

    button.addEventListener("click", () => {
        let isLoggedIn = localStorage.getItem("loggedIn") === "true";
        if (!isLoggedIn) {
            showAuth("login");
        } else {
            const bikeName = item.querySelector(".name").innerText;
            alert(`${bikeName} added to cart!`);
        }
    });
});
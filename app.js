const searchInput = document.getElementById("freelancer-search");
const categoryFilter = document.getElementById("category-filter");
const freelancerList = document.getElementById("freelancer-list");
const profileMessage = document.getElementById("profile-message");

const freelancers = [
    {
        name: "Aarav Sharma",
        role: "Web Developer",
        category: "development",
        description: "Builds modern and responsive websites.",
        price: "Starting at ₹1,500"
    },
    {
        name: "Priya Verma",
        role: "UI/UX Designer",
        category: "design",
        description: "Creates clean and user-friendly interfaces.",
        price: "Starting at ₹1,200"
    },
    {
        name: "Rohan Mehta",
        role: "Content Writer",
        category: "writing",
        description: "Creates engaging website and marketing content.",
        price: "Starting at ₹800"
    }
];

function renderFreelancers(items) {
    freelancerList.innerHTML = "";

    if (items.length === 0) {
        freelancerList.innerHTML = "<p>No freelancers found.</p>";
        return;
    }

    items.forEach((freelancer) => {
        const article = document.createElement("article");

        article.innerHTML = `
      <h3>${freelancer.name}</h3>
      <p>${freelancer.role}</p>
      <p>${freelancer.description}</p>
      <p>${freelancer.price}</p>
      <button type="button">View Profile</button>
    `;

        article.querySelector("button").onclick = function () {
            profileMessage.textContent =
                `${freelancer.name} — ${freelancer.role}. ${freelancer.description} ${freelancer.price}.`;

            document.getElementById("profile").scrollIntoView({
                behavior: "smooth"
            });
        };

        freelancerList.appendChild(article);
    });
}

function filterFreelancers() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = freelancers.filter((freelancer) => {
        const matchesSearch =
            freelancer.name.toLowerCase().includes(searchTerm) ||
            freelancer.role.toLowerCase().includes(searchTerm);

        const matchesCategory =
            selectedCategory === "all" ||
            freelancer.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    renderFreelancers(filtered);
}

searchInput.addEventListener("input", filterFreelancers);
categoryFilter.addEventListener("change", filterFreelancers);

renderFreelancers(freelancers);

const bookingForm = document.getElementById("booking-form");
const bookingMessage = document.getElementById("booking-message");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const freelancer = document.getElementById("booking-freelancer").value;
    const date = document.getElementById("booking-date").value;
    const today = new Date().toISOString().split("T")[0];

if (date < today) {
  bookingMessage.textContent = "Please select a future date.";
  return;
}
    const details = document.getElementById("booking-details").value;

    const booking = {
        freelancer: freelancer,
        date: date,
        details: details
    };

    const existingBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    existingBookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    bookingMessage.textContent =
        `Booking request sent to ${freelancer} for ${date}.`;

    bookingForm.reset();
    displayBookings();
});

const bookingList = document.getElementById("booking-list");

function displayBookings() {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  bookingList.innerHTML = "";

  if (bookings.length === 0) {
    bookingList.innerHTML = "<p>No bookings yet.</p>";
    return;
  }

  bookings.forEach((booking) => {
    const article = document.createElement("article");

    article.innerHTML = `
      <h3>${booking.freelancer}</h3>
      <p>Date: ${booking.date}</p>
      <p>Project: ${booking.details}</p>
      <p>Status: Pending</p>
      <button type="button" class="edit-booking">Edit Booking</button>
      <button type="button" class="delete-booking">Delete Booking</button>
    `;

    const editButton = article.querySelector(".edit-booking");

    editButton.addEventListener("click", () => {
      const newDate = prompt("Enter new booking date:", booking.date);

      if (!newDate) {
        return;
      }

      const newDetails = prompt(
        "Enter new project details:",
        booking.details
      );

      if (!newDetails) {
        return;
      }

      booking.date = newDate;
      booking.details = newDetails;

      localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
      );

      displayBookings();
    });

    const deleteButton = article.querySelector(".delete-booking");

    deleteButton.addEventListener("click", () => {
      const updatedBookings = bookings.filter(
        (item) => item !== booking
      );

      localStorage.setItem(
        "bookings",
        JSON.stringify(updatedBookings)
      );

      displayBookings();
    });

    bookingList.appendChild(article);
  });
}

displayBookings();

const loginForm = document.querySelector("#login form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const savedEmail = localStorage.getItem("signupEmail");
  const savedPassword = localStorage.getItem("signupPassword");

  if (email === savedEmail && password === savedPassword) {
    localStorage.setItem("loggedInUser", email);

    loginStatus.textContent = `Logged in as: ${email}`;

    alert("Login successful!");

    loginForm.reset();
  } else {
    alert("Invalid email or password.");
  }
});


const loginStatus = document.getElementById("login-status");

const loggedInUser = localStorage.getItem("loggedInUser");

if (loggedInUser) {
  loginStatus.textContent = `Logged in as: ${loggedInUser}`;
}

const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");

  loginStatus.textContent = "";

  alert("Logged out successfully!");
});

const signupForm = document.getElementById("signup-form");
const signupMessage = document.getElementById("signup-message");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  localStorage.setItem("signupEmail", email);
  localStorage.setItem("signupPassword", password);

  signupMessage.textContent = "Account created successfully!";

  signupForm.reset();
});
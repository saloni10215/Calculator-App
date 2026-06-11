const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
const darkModeBtn = document.getElementById("darkModeBtn");

// Calculator Buttons
buttons.forEach(button => {

    button.addEventListener("click", function () {

        const value = this.textContent;

        if (value === "C") {

            display.value = "";

        } else if (value === "⌫") {

            display.value = display.value.slice(0, -1);

        } else if (value === "=") {

            try {

                display.value = eval(display.value);

            } catch {

                display.value = "Error";

            }

        } else {

            display.value += value;

        }

    });

});

// Keyboard Support
document.addEventListener("keydown", function (event) {

    const key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "."
    ) {

        display.value += key;

    } else if (key === "Enter") {

        try {

            display.value = eval(display.value);

        } catch {

            display.value = "Error";

        }

    } else if (key === "Backspace") {

        display.value = display.value.slice(0, -1);

    } else if (key === "Escape") {

        display.value = "";

    }

});

// Load Saved Theme
if (localStorage.getItem("darkMode") === "enabled") {

    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀️ Light Mode";

}

// Dark Mode Toggle
darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("darkMode", "enabled");
        darkModeBtn.textContent = "☀️ Light Mode";

    } else {

        localStorage.setItem("darkMode", "disabled");
        darkModeBtn.textContent = "🌙 Dark Mode";

    }

});
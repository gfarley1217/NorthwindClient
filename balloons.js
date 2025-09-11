document.addEventListener("DOMContentLoaded", function () {
    const elem = document.getElementById("dob");
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: "MM-dd",
    });

    // uncheck all boxes (for Firefox)
    document
        .querySelectorAll(".form-check-input")
        .forEach((c) => (c.checked = false));

    // event listener for check/uncheck
    document
        .getElementById("checkbox-card")
        .addEventListener("change", function (e) {
            if (e.target.classList.contains("form-check-input")) {
                const elem = document.getElementById(e.target.id + "Img");
                elem.style.visibility = "visible";
                elem.classList.remove(
                    "animate__animated",
                    "animate__bounceInDown",
                    "animate__bounceOutUp"
                );
                e.target.checked
                    ? elem.classList.add("animate__animated", "animate__bounceInDown")
                    : elem.classList.add("animate__animated", "animate__bounceOutUp");
            }
        });

    // Random attention getter for h1
    const animations = [
        "animate__bounce",
        "animate__flash",
        "animate__pulse",
        "animate__rubberBand",
        "animate__shakeX",
        "animate__shakeY",
        "animate__headShake",
        "animate__swing",
        "animate__tada",
        "animate__wobble",
        "animate__jello",
        "animate__heartBeat"
    ];
    const randomAnim = animations[Math.floor(Math.random() * animations.length)];
    const greeting = document.querySelector("h1.greeting");
    greeting.classList.add("animate__animated", randomAnim);

    // 2. Toast if balloon checkboxes are not selected
    document.getElementById("submit").addEventListener("click", function () {
    const anyChecked = document.querySelectorAll(".form-check-input:checked").length > 0;
    if (!anyChecked) {
        const toastEl = document.querySelector(".toast"); // finds your toast
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
    });

        // 3. Select / Deselect all balloons
    document.getElementById("toggleAll").addEventListener("click", function () {
        const checkboxes = document.querySelectorAll(".form-check-input");
        const allChecked = [...checkboxes].every(cb => cb.checked);
        checkboxes.forEach(cb => {
            cb.checked = !allChecked;                               
            cb.dispatchEvent(new Event("change", {bubbles: true})); 
        
        });
    });

        // 4. Change the color of h1 on hover
    document.querySelectorAll(".form-check-label").forEach(label => {
        label.addEventListener("mouseenter", function () {
            const color = this.getAttribute("for");
            greeting.style.color = color;
        });
        label.addEventListener("mouseleave", function () {
            greeting.style.color = "slategray";
        });
    });

    // ChatGPT helped with some of the code above

});


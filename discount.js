document.addEventListener("DOMContentLoaded", function () {
    document
    .getElementById("discount-row")
    .addEventListener("click", function(e) {
        if (e.target.classList.contains("discount")) {
            e.preventDefault();

            document.getElementById("discount-code").innerHTML =
               "Discount Code: " + e.target.dataset.discountCode; 
            document.getElementById("product").innerHTML =
                e.target.dataset["product"];
            bootstrap.Toast.getOrCreateInstance(
            document.getElementById('liveToast')
        ).show();
        } 
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            const toastEl = document.getElementById("liveToast");
            const toast = bootstrap.Toast.getOrCreateInstance(toastEl);
            toast.hide();
        }
    });
});
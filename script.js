document.getElementById("openMessage").addEventListener("click", function() {
    document.getElementById("card").classList.add("opened");
});

document.getElementById("closeMessage").addEventListener("click", function() {
    document.getElementById("card").classList.remove("opened");
});

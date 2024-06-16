document.addEventListener('DOMContentLoaded', function() {
    var headers = document.querySelectorAll('.toggle-header');

    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            var content = header.nextElementSibling;
            
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll('section');
    var footer = document.getElementById('site-footer');

    sections.forEach(function (section) {
        section.style.transition = 'opacity 0.5s ease';
    });

    function updateSectionOpacity() {
        sections.forEach(function (section) {
            if (window.scrollY + window.innerHeight >= section.offsetTop) {
                section.style.opacity = '1';
            }
        });
    }

    function updateFooterVisibility() {
        var scrollPosition = window.scrollY + window.innerHeight;
        var documentHeight = document.body.offsetHeight;

        if (scrollPosition >= documentHeight - 100) {
            footer.style.opacity = '1';
        } else {
            footer.style.opacity = '0';
        }
    }

    window.addEventListener("scroll", function () {
        updateSectionOpacity();
        updateFooterVisibility();
    });

    // Rola suavemente para a seção correspondente ao clicar nos links do menu
    document.querySelectorAll('nav ul li a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetSectionId = this.getAttribute('href');
            var targetSection = document.querySelector(targetSectionId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Atualiza a opacidade das seções e a visibilidade do footer ao carregar a página
    updateSectionOpacity();
    updateFooterVisibility();
});

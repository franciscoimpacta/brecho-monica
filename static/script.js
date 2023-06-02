document.addEventListener("DOMContentLoaded", function (event) 
{
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId);

        // Valide se todas as variáveis existem
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                // mostrar navbar
                nav.classList.toggle('show');
                // alterar ícone
                toggle.classList.toggle('bx-x');
                // adicionar padding ao corpo
                bodypd.classList.toggle('body-pd');
                // adicionar padding ao header
                headerpd.classList.toggle('body-pd');
            });
        }
    }
})

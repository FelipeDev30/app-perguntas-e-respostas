const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach(radio => {
    radio.addEventListener('change', event => {
        const selectedValue = event.target.value;
        const parent = event.target.parentNode;
        const group = parent.parentNode;
        const allRadios = group.querySelectorAll('input[type="radio"]');

        // Desabilita todos os rádios do grupo
        allRadios.forEach(r => r.disabled = true);

        // Estiliza o botão selecionado
        parent.style.backgroundColor = selectedValue === "correta" ? "green" : "red";
        parent.style.borderRadius = "5px";
        parent.style.color = "blue";

        // Se incorreta, destaca também a correta
        if (selectedValue === "incorreta") {
            const correta = group.querySelector('input[value="correta"]');
            if (correta) {
                const corretaParent = correta.parentNode;
                corretaParent.style.backgroundColor = "green";
                corretaParent.style.borderRadius = "5px";
                corretaParent.style.color = "white";
            }
        }
    });
});

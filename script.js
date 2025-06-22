function iniciarSlider(sliderId, totalSlides, intervalo) {
    let count = 1;
    document.getElementById("radio" + count + "-" + sliderId).checked = true;
    
    setInterval(function () {
        count++;

        console.log("Iniciando slider: " + sliderId + " com " + totalSlides + " slides e intervalo de " + intervalo + "ms");

        if (count > totalSlides) {
            count = 1;
        }
        document.getElementById("radio" + count + "-" + sliderId).checked = true;
    }, intervalo);
}

// Inicia sliders independentes
iniciarSlider("blusas", 4, 5000);
iniciarSlider("conjuntos", 4, 5000);
iniciarSlider("acessorios", 4, 5000);
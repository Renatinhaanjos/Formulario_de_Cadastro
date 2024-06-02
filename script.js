document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    const ufInput = document.getElementById('uf');
    const ufError = document.getElementById('ufError');

    // Regex para validar UF (Estados brasileiros)
    const ufRegex = /^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/i;

    const ufValue = ufInput.value.toUpperCase();

    if (!ufRegex.test(ufValue)) {
        ufError.style.display = 'inline';
        event.preventDefault();
    } else {
        ufError.style.display = 'none';
    }
});

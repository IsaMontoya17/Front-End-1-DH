function descargarPDF() {
    const link = document.createElement('a');
    link.href = './assets/formula%202024-12-10.pdf';
    link.download = 'formula_2024-12-10.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


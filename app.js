const fun = () => {
    console.log('key press')
    let html = document.getElementById('html').value;
    let css = document.getElementById('css').value;
    let output = document.getElementById('output');
    output.contentDocument.body.innerHTML = html+ "<style>"+css+"</style>";
}

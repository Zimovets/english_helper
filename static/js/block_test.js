
function buttonCliick() {
    document.getElementById('but').onclick = () => document.getElementById('test').innerHTML = '' +
        '    <div style="color: red"><label>It\'s work</label><label>WOW!!!!!</label></div>';
}

buttonCliick();

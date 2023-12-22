const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) =>{
    insert.innerHTML = `
    <style>
table, th, td {
  border: 1px solid white;
  margin-top:154px;
  color:white;
}
  .center {
    margin-left: auto;
    margin-right: auto;
  
}
</style>
    <div class="color">
    <table class="center" style="width:50%";>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
    `
})
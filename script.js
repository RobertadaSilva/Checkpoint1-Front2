
document.querySelector('.novo').click();
function js(event) {
    event.preventDefault();
    document.querySelector('#form').style.display = 'none'; //Edmundo
    var div = document.querySelector(".wrapper");
    var nome = document.getElementById("nome").value;
    var url = document.getElementById("url").value;
    var hobby = document.getElementById("hobby").value;
    document.querySelector('.novo').style.display = 'flex'; //Edmundo

    var newCard = `<div class="wrapper">
      <div class="card">
          <div class="topcard">
              <nav class="navbar">
                  <i class="fa-solid fa-user"></i>
                  <i class="fa-solid fa-fire-flame-curved"></i>
                  <i class="fa-solid fa-comments"></i>
              </nav>
              <div class="foto_acoes">
                  <div class="foto" style="background:url('` + url + `') center/cover">
                      <div class="foto_texto">
                          <div class="nome-idade">
                              <h2>` + nome + `</h2>
                              <h2></h2>
                          </div>
                          <div class="bio">
                              <p><b>Hobby</b>:`+ hobby + `</p>
                          </div>
                      </div>
                  </div>
                  <div class="acoes">
                      <div class="acao">
                          <i class="fa-solid fa-x"></i>
                      </div>
                      <div class="acao">
                          <i class="fa-solid fa-star"></i>
                      </div><div class="acao">
                          <i class="fa-solid fa-heart"></i>
                      </div>
                  </div>
              </div>
              </div>
          </div>
      </div>
  </div>`;
    div.insertAdjacentHTML('beforeend', newCard);



}



function adicionarNovoCard() {
    document.querySelector('#form').style.display = 'block'; //Edmundo
}
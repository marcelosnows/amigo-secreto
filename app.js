let friends = [];
let originalFriends = []; // lista original para reiniciar o app

function addFriends() {

  const inputFriendsName = document.getElementById("input-friends-name");
  friendsName = inputFriendsName.value;

  if(friendsName === "") {
    // validando se o campo está vazio
    alert("O campo está vazio, digite um nome!")
    inputFriendsName.focus();

  } else if (!/^[a-zA-Z\s]+$/.test(friendsName)) {
    // validando se foram digitados apenas letras
    alert("Não são permitidos caracteres especiais e nem números!")
    alert("O nome só pode conter letras e espaços!")
    inputFriendsName.focus();
    inputFriendsName.value = "";
    
  } else if (/^([a-zA-Z])\1+$/.test(friendsName)) {
    //valida se não há caracteres repetidos.
    alert("O nome não pode ter caracteres repetidos.");
    inputFriendsName.focus();
    inputFriendsName.value = "";
  
  } else {
    // insere o nome no array de amigos e atualiza e limpa o campo
    friends.push(friendsName);
    originalFriends.push(friendsName); // atualiza lista original
    updateFriendList();
  };

   // permite a entrada de dados pressionando "Enter"
 document.getElementById("input-friends-name").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    addFriends(friends);
  };
});

  return;
};

function updateFriendList() {
  const friendsList = document.getElementById("friendsList");
  friendsList.innerHTML = friends.map(friend => `<li>${friend}</li>`).join("");
};

function drawSecretFriend() {
  let restart;
  if (friends.length === 0) {
    restart = confirm("Não há amigos cadastrados. Adicione os nomes para sorteá-los!");
    inputFriendsName.focus();
  }
  if (restart) {
    friends = []; // reinicia a lista de amigos
    updateFriendList();
    document.getElementById("resultado").innerHTML = "";
    alert("A aplicação será reiniciada e você poderá cadastrar novos amigos!")
  } else {
    const secretFriendIndex = [Math.floor(Math.random() * friends.length)];
    let friendDraw = friends [secretFriendIndex];
    const result = document.getElementById("resultado");
    result.innerHTML = `<li> O amigo secreto sorteado foi: ${friendDraw}</li>`;
    
    // remove o nome do amigo sorteado da lista.
    friends.splice(secretFriendIndex, 1);
    updateFriendList();
  
  } 
  return; 
}


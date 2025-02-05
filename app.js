let friends = [];

function addFriends() {

  const inputFriendsName = document.getElementById("input-friends-name");
  friendsName = inputFriendsName.value;

  if(friendsName === "") {
    // validando se o campo está vazio
    alert("O campo está vazio, digite um nome!")

  } else if (!/^[a-zA-Z\s]+$/.test(friendsName)) {
    // validando se foram digitados apenas letras
    alert("Não são permitidos caracteres especiais e nem números!")
    alert("O nome só pode conter letras e espaços!")
    
  } else if (/^([a-zA-Z])\1+$/.test(friendsName)) {
    //valida se não há caracteres repetidos.
    alert("O nome não pode ter caracteres repetidos.");
  
  } else {
    // insere o nome no array de amigos e atualiza e limpa o campo
    friends.push(friendsName);
    atualizeList();
    inputFriendsName.focus();
    inputFriendsName.value = "";
  };

   // permite a entrada de dados pressionando "Enter"
 document.getElementById("input-friends-name").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    addFriends(friends);
  };
});

  return;
};

function atualizeList() {
  const friendsList = document.getElementById("friendsList");
  friendsList.innerHTML = "";
  friends.forEach((friends) => {
    const li = document.createElement("li");
    li.textContent = friends;
    friendsList.appendChild(li);
  }
)};

function drawSecretFriend() {
  if (friends.length === 0) {
      alert("Nenhum amigo foi adicionado. Adicione um amigo para sorteá-lo!");  
    
  } else {
    const secretFriend = [Math.floor(Math.random() * friends.length)];
    const friendDraw = friends [secretFriend];
    const result = document.getElementById("resultado");
    result.innerHTML = `<li> O amigo secreto sorteado foi: ${friendDraw}</li>`;
    
    // remove o amigo sorteado da lista.
    friendDraw = friends.splice(secretFriend, 1);
  };
  
   return;
};


import { accounts, user } from "./UserInfo";
console.log(accounts);

function createElement(transferIban) {
  let i = `
    <div class="dropdown">
    <select id="secim"  class="dropbtn">
  </select>
      </div>
      <div>
    <label for="ftransafer"></label>
    <input type="textBox" id="transferIban" name="transferIban" placeholder="trxx yyyy xxxx xyyx">
 
    <input type="numericBox" id="odeme" placeholder="Odeme Miktarı">
    
    <input type="submit"  id="btnGonder"> 
    <div>
  <p>Kalan süre <span id="timer" >00.00</span>
  </p>
</div>
    
</div> `;
  return i;
}

let node = document.querySelector("#container");
node.innerHTML = createElement();
let transferIban = document.querySelector("#transferIban");
const timeLeftDisplay = document.querySelector("#timer");
const sendButton = document.querySelector("#btnGonder");
const timeLeft = 3;
let time = timeLeft * 60;

setInterval(countDown, 1000);

function countDown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 20 ? "0" + seconds : seconds;
  timeLeftDisplay.innerHTML = `${minutes}:${seconds}`;
  time--;
}
console.log(timeLeft);
sendButton.addEventListener("click", countDown);

var dropdown = document.getElementById("secim");
dropdown &&
  accounts.forEach(function (e) {
    var accountNumber = `Hesap No: ${e.iban} - Bakiye: ${e.hesapMiktar} `;
    var accounts = document.createElement("option");
    accounts.innerText = accountNumber;
    dropdown.appendChild(accounts);
    activeButton();
  });

function activeButton() {
  if (transferIban) {
    document.getElementById("sendButton").disabled = false;
  } else if (!transferIban) {
    document.getElementById("sendButton").disabled = true;
  }
}

function transferMoney(miktar) {
  accounts.forEach(function (e) {
    var bakiye = `${e.hesapMiktar}`;
  });
  console.log(bakiye);
  if (miktar < 0 && miktar > bakiye) {
    alert("geçerli miktar giriniz");
  } else {
    alert("değer girin");
  }
  if (miktar > bakiye) {
    var odeme = document.querySelector("#odeme");
    alert("paranız yok ");
    odeme.disabled = true;
  }
  if (miktar >= 500 && miktar <= bakiye) {
    var kod = prompt("telefona gelen kod", " ");
    alert(
      `telefonunuza kod gönderildi." + "Lütfen kodu giriniz."` +
        kod +
        " Güncel bakiye :  " +
        bakiye
    );
  } else {
    bakiye = bakiye - miktar - 0.5;
    alert("başarılı transfer \n güncel bakiye :  " + bakiye);
  }
}
function miktarGirisi() {
  var miktar = document.querySelector("#odeme").value;
  transferMoney(miktar);
}

document.querySelector("#btnGonder").addEventListener("click", miktarGirisi);

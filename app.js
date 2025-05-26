function addMember() {
  const name = document.getElementById("memberName").value.trim();
  const role = document.getElementById("memberRole").value;

  if (name === "") {
    alert("Entrez un nom !");
    return;
  }

  const teamList = document.getElementById("teamList");

  const div = document.createElement("div");
  div.className = "member";

  div.innerHTML = `
    <span>${name} – ${role}</span>
    <span>🎙️</span>
  `;

  teamList.appendChild(div);

  document.getElementById("memberName").value = "";
}

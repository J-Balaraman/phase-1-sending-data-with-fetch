
function submitData(names, emails) {
  return  fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    name: `${names}`,
    email: `${emails}`,
  }),
})
.then((resp) => resp.json())

.then((data) => {
  document.body.innerHTML = data.id
})

.catch((error) => document.body.innerHTML = error.message)
}
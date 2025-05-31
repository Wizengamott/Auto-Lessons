async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();
    console.log(data)
    return data
      }

fetchData()

async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const user = await response.json();
    console.log(user)
    return user
}
fetchUser()
function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(toDo => {
        console.log('To Do: ', toDo);
        return toDo
      })
      .catch(error => {
        console.error('We have an error:', error)
      });
  }
//fetchData()

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(user => {
        console.log('User: ', user);
        return user
      })
      .catch(error => {
        console.error('We have an error:', error)
      });
}
//fetchUser()

const promisesData = Promise.all([fetchData(), fetchUser()]) 
const promisesData2 = Promise.race([fetchData(), fetchUser()])
  .then(result => {
    console.log('First resolved result: ', result);
  })
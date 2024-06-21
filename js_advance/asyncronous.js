fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json)) 

      
async function getTodos(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json();
    console.log(">>>> data ",data)
    return data
};


(async function getdata(){
    console.log(await getTodos())

})()

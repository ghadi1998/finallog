

 async function create (data) {
  try {
    
    const resp = await fetch('/signup/' , {
        method:'POST',
        mode:"cors",
        credentials:'include',
        headers:{
          'Content-Type': 'application/json ',
          'Accept': 'application/json',
          "Access-Control-Origin": "*"
        },
        body:JSON.stringify(data)
      })
    console.log(resp)
    
    console.log(resp.body)
    resp.headers.forEach(console.log);
    
    return JSON.stringify(resp);
  } catch (err) {
       console.log(err)
    }
}


  //  const list = () => {
  //    return fetch('/users', {
  //      method: 'GET',
  //    }).then(response => {
  //      return response.json()
  //    }).catch((err) => console.log(err))
  //   }

    export default create
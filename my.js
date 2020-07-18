function testGS() {

    const url = "https://script.google.com/macros/s/AKfycbx3P3daXkxLDJBw6i-S5p3gCuJWyHghIoZmVy0ocCqWfXNdu5FA/exec";
    
    //"https://script.googleusercontent.com/macros/echo?user_content_key=Xv3qa44odCYZpW3yNMX7BaYUJOgYyIcmeIx328aK4Vg1_OdHNXpovEXrJ10PNDCF_SJESzW9nSHnMwwBPlNJbuuJIom04DWHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNcbIvMeL7C3wexBJk4CjY950cJY6FMLim5QZOUVNXT4l7lD0rMCzwZgioWaTV97WOsaBFSPXFn7&lib=MIctwdw7rX-HdG-SP3F0HtktBEwHaOX08";
      
    fetch(url)
    .then(d => d.json())
    .then(d => {
    
    document.getElementById("app").textContent = d[0].status;
    
    });

}

document.getElementById("btn").addEventListener("click", testGS);


function addGS() {

    const url = "https://script.google.com/macros/s/AKfycbx3P3daXkxLDJBw6i-S5p3gCuJWyHghIoZmVy0ocCqWfXNdu5FA/exec";
    
    //"https://script.googleusercontent.com/macros/echo?user_content_key=Xv3qa44odCYZpW3yNMX7BaYUJOgYyIcmeIx328aK4Vg1_OdHNXpovEXrJ10PNDCF_SJESzW9nSHnMwwBPlNJbuuJIom04DWHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNcbIvMeL7C3wexBJk4CjY950cJY6FMLim5QZOUVNXT4l7lD0rMCzwZgioWaTV97WOsaBFSPXFn7&lib=MIctwdw7rX-HdG-SP3F0HtktBEwHaOX08";
    //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch  
    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
         mode: 'no-cors', // no-cors, *cors, same-origin
         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'omit', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
       // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({first:"ana",last:"Cell 50",phone:89800097009}) // body data type must match "Content-Type" header
      });
}

document.getElementById("btn2").addEventListener("click", addGS);
document.getElementById("btn").addEventListener("click", testGS);

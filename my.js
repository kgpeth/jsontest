function testGS() {

    const url = "https://script.googleusercontent.com/macros/echo?user_content_key=Xv3qa44odCYZpW3yNMX7BaYUJOgYyIcmeIx328aK4Vg1_OdHNXpovEXrJ10PNDCF_SJESzW9nSHnMwwBPlNJbuuJIom04DWHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNcbIvMeL7C3wexBJk4CjY950cJY6FMLim5QZOUVNXT4l7lD0rMCzwZgioWaTV97WOsaBFSPXFn7&lib=MIctwdw7rX-HdG-SP3F0HtktBEwHaOX08";

    fetch(url)
    .then(d => d.json())
    .then(d => {
    
    document.getElementById("app").textContent = d[0].status;
    
    });

}

document.getElementById("btn").addEventListener("click", testGS);


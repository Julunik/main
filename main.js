fetch("mrpg/latest.json")
    .then(response => {
        if (!response.ok) throw new Error("Unable to download JSON");
        return response.json();
    })
    .then(data => {
        document.getElementById("mrpg_version").textContent = "[ " + data.Version + " ]";
    })
    .catch(error => {
        console.error(error);
    });
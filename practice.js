import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
const appSettings = {
    databaseURL: "https://basictest-a334b-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js"
let paraparal = document.getElementById("paraparal")
const app = initializeApp(appSettings);
const db = getDatabase(app);
let updateshere = document.getElementById("updateshere")
let inpbox = document.getElementById("inpbox")
let additem = document.getElementById("additem")
let liitem = document.getElementsByTagName("li")


additem.addEventListener("click", function () {
    let addsum = inpbox.value

    push(randomdata, addsum)




    document.getElementById("inpbox").value = " "
    /* console.log(addsum) */

})

/* additem.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        let addsum = inpbox.value
        push(randomdata, addsum)
        console.log(addsum)

    }
}) */

const randomdata = ref(db, 'randommstuff');



onValue(randomdata, function (snapshot) {


    if (snapshot.exists()) {
        let somstu = Object.entries(snapshot.val())

        paraparal.textContent = " "
        for (let i = 0; i < somstu.length; i++) {

            let newEl = document.createElement("li")
            let currentitem = somstu[i]
            let currentvalue = currentitem[1]
            let currentID = currentitem[0]
            newEl.textContent = currentvalue
            paraparal.append(newEl)
            newEl.addEventListener("click", function () {
                let exactlocation = ref(db, `randommstuff/${currentID}`)
                remove(exactlocation)
            })

        }

    } else {
        paraparal.innerHTML = "Add Tasks to be done"
    }




})

/* paraparal.innerHTML = somstu */
/* paraparal.innerHTML = " "*/


/* console.log(somstu[i])
/* paraparal.innerHTML += `<li>${somstu[i]}</li>`
}
} * /)

/* function teststop(snapshot) {
console.log(snapshot)
} */
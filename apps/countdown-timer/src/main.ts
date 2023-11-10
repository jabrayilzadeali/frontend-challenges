import "../styles/style.css"



// seconds.textContent = `${newDate.getSeconds()}`

const secondsElement = document.querySelector<HTMLHeadingElement>("[data-time='seconds']")!
const minutesElement = document.querySelector<HTMLHeadingElement>("[data-time='minutes']")!
const hoursElement = document.querySelector<HTMLHeadingElement>("[data-time='hours']")!
const daysElement = document.querySelector<HTMLHeadingElement>("[data-time='days']")!
const modal = document.querySelector<HTMLDialogElement>("[data-modal]")!
const openModal = document.querySelector<HTMLHeadingElement>("[data-open-modal]")!
const closeModal = document.querySelector<HTMLHeadingElement>("[data-close-modal]")!
const form = document.querySelector<HTMLFormElement>("[data-form]")!
const textInput = document.querySelector<HTMLFormElement>("[data-form-input]")!
const dateTimeInput = document.querySelector<HTMLFormElement>("[data-form-date]")!
const dataMainText = document.querySelector<HTMLHeadingElement>("[data-main-text]")!

console.log("hello world")
if (localStorage.getItem("main-text") !== null) {
    dataMainText.textContent = localStorage.getItem("main-text")

}

form.onsubmit = (e) => {
    e.preventDefault()
    console.log(textInput.value)
    if (textInput.value !== null || textInput.value !== "") {
        dataMainText.textContent = textInput.value
        localStorage.setItem("main-text", textInput.value)
        console.log(dateTimeInput.value)
        localStorage.setItem("date", JSON.stringify(dateTimeInput.value))

        // let date = new Date(dateTimeInput.value)
        // localStorage.setItem('date', date)
        // localStorage.a = date
    // let newDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        
    }
    console.log(dateTimeInput.value)

}

openModal.onclick = () => {
    modal.showModal()
}

closeModal.onclick = () => {
    modal.close()
}


setInterval(() => {

    let today = new Date()
    let newDate;

    // https://stackoverflow.com/questions/46915002/argument-of-type-string-null-is-not-assignable-to-parameter-of-type-string
    if (localStorage.getItem("date") !== null) {
        let date = JSON.parse(localStorage.getItem("date")!)
        newDate = new Date(date)        
    } else {
        newDate = new Date(today.getFullYear() + 1, 0, 1)
    }

    let year = today.getFullYear()
    let month = today.getMonth() + 1
    let date = today.getDate() + 1

    let dateStr = `${year}-${month}-${date}`
    dateTimeInput.setAttribute('min', dateStr)


    let remainedTime: number = (newDate.getTime() - today.getTime())
    let diff = new Date(remainedTime)
    
    let days = Math.floor(remainedTime / 1000 / 60 / 60 / 24)
    
    console.log(diff.getDate())
    
    secondsElement.textContent = `${diff.getSeconds() + 1}`
    minutesElement.textContent = `${diff.getMinutes() + 1}`
    hoursElement.textContent = `${diff.getHours() + 1}`
    daysElement.textContent = `${days + 1}`
}, 1000)
const createDoctor = (name, specialty, address) => {
    return {
        toString() {
            return `<p>${this.doctorName} specializes in ${this.doctorSpecialty} at ${this.doctorAddress}</p>`
        },

        doctorName: name,
        doctorSpecialty: specialty,
        doctorAddress: address
    }
}

const doctorContainer = document.querySelector("#doctors")

const render = (doctorString) => {
    doctorContainer.innerHTML += doctorString
}

const newDoctor = createDoctor("Doogie Howser", "cardiology", "123 Park Place")

render(newDoctor)


const person = Object.create(
    {
        calculateAge() {
            console.log('Age:', new Date().getFullYear() - this.birthYear)
        }
    },
    {
        name: {
            value: 'Roman',
            enumerable: true,
            writable: true,
            configurable: true
        },
        birthYear: {
            value: 1995,

        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                document.body.style.background = 'green'
                console.log('Set age', value)
            }
        }
    }
)

person.name = "Bohdan"
person.birthYear = 1999

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('Key', key, person[key])
    }
}
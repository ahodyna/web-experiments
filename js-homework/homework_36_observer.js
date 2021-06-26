const observable = {
    name: 'Alisa ndkmfem',
    job: 'Movie maker',

    subscriptions: [],

    subscribe: function(subscription) {
        this.subscriptions.push(subscription)
    },
    notify: function() {
        for (let i = 0; i < this.subscriptions.length; i++) {
            const subscription = this.subscriptions[i]
            subscription(this.name, this.job)
        }
    },

    updateName: function(newName) {
        this.name = newName
        this.notify()
    },
    updateJob: function(newJob) {
        this.job = newJob
        this.notify()
    },
}
 
document.getElementById('userName').addEventListener('keyup', (e) => {
    const inputNameValue = e.target.value
    observable.updateName(inputNameValue)
})

document.getElementById('userJob').addEventListener('keyup', (e) => {
    const inputJobValue = e.target.value
    observable.updateJob(inputJobValue)
})


// 1
observable.subscribe((name, job) => console.log(`updated name: ${name} - ${job}`))

// 2
observable.subscribe((name, job) => console.log(`total leters count: ${name.length + job.length}`))

let forbiddeNames = [ 'Max', 'Putin', 'Klava' ]
observable.subscribe((name, job) => {
    if (forbiddeNames.includes(name)) {
        alert(`${name} is forbiden`)
    }
})

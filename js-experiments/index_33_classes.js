function hello(){
    console.log('Hello!', this)
}


let person = {
    name: 'Alina',
    age: 23,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function(job, phone){
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

let person2 = {
    name: 'Olena',
    age: 21
}

// person.logInfo.bind(person2, 'Frontend', '123-123-123')() 
person.logInfo.call(person2, 'Frontend', '123-123-123')
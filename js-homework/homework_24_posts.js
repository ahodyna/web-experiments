$(document).ready(function () {
    $.get('https://jsonplaceholder.typicode.com/posts', function (data) {
        comments = data
        appendPost()
    })

})

let comments = []

$.get('https://jsonplaceholder.typicode.com/users', function (data) {
    users = data
})


let users = []

function createPostComponenta(title, body, name, mail) {
    let $component = $('<div class="post"></div>')
    $($component).append('<div class="postTitle"> ' + title + '</div>')
    $($component).append('<div class="postBody"> ' + body + '</div>')
    $($component).append('<div class="postFooter">' + name + ' <span>' + mail + '</span></div>')
    return $component
}

function appendPost() {
    for (let i = 0; i < comments.length; i++) {
        commentsBody = comments[i].body
        commentsTitle = comments[i].title
        userId = comments[i].userId


        for (let j = 0; j < users.length; j++) {
            if (users[j].id == userId) {
                let name = users[j].username
                let mail = users[j].email

                let component = createPostComponenta(commentsTitle, commentsBody, name, mail)
                $("#posts").append(component);

            }
        }
    }
}
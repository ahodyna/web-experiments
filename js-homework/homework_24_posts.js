$(document).ready(function () {
    reCreatePostPage()
})


function createPostComponent(userId, title, body, name, mail) {
    let $component = $('<div class="post"></div>')
    $component.append('<div class="postTitle"> ' + title + '</div>')
    $component.append('<div class="postBody"> ' + body + '</div>')

    $postFooter = $('<div class="postFooter"></div>')
    $component.append($postFooter)

    let $userLink = $('<span class="fake-link">' + name + ' ' + mail + '</span>')
    $postFooter.append($userLink)

    $userLink.on('click', function () {
        reCreateUserPage(userId)
    })
    return $component
}

function findUserById(usersArray, userId) {
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].id == userId) {
            return usersArray[i];
        }
    }
    return null;
}

function reCreatePostPage() {
    let postsPromise = $.get('https://jsonplaceholder.typicode.com/posts')
    let usersPromise = $.get('https://jsonplaceholder.typicode.com/users')

    $.when(postsPromise, usersPromise).done(function (postsResponse, usersResponse) {
        let posts = postsResponse[0]
        let users = usersResponse[0]

        let $postList = $('<div id="postList"></div>')
        for (let i = 0; i < posts.length; i++) {
            let postBody = posts[i].body
            let postTitle = posts[i].title
            let userId = posts[i].userId

            let user = findUserById(users, userId)

            let $postComponent = createPostComponent(userId, postTitle, postBody, user.name, user.email)
            $postList.append($postComponent)
        }
        $('#root').append($postList)

    })
}


function reCreateUserPage(userId) {
    // $('#root').html(null)


}
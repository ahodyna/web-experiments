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
        $('#root').html(null)
        $('#root').append($postList)

    })
}


function reCreateUserPage(userId) {
    $('#root').html(null)

    $.get('https://jsonplaceholder.typicode.com/users', function (data) {
        let users = data

        let user = findUserById(users, userId)

        let name = user.name
        let mail = user.email
        let street = user.address.street

        let city = user.address.city
        let nameCompany = user.company.name
        let bs = user.company.bs

        let componentUserBlock = createUserComponent(userId, name, mail, street, city, nameCompany, bs)

        $('#root').append(componentUserBlock)
    })
}

function createUserComponent(userId, name, mail, street, city, companyName, bs) {
    $componentUser = $('<div class="user"></div>')

    $componentUser.append('<div class="userNameAndMailBlock">' + name + mail + '</div>')
    $componentUser.append('<div class="addresBlock">' + street + city + '</div>')
    $componentUser.append('<div class="companyBlock">' + companyName + bs + '</div>')

    let $buttonPosts = $('<button>show user posts</button>')
    $componentUser.append($buttonPosts)

    let $componentBlock = $('<div id="userPosts"></div>')
    $componentUser.append($componentBlock)

    $buttonPosts.on('click', function () {
        $.get('https://jsonplaceholder.typicode.com/posts', function (data) {
            let posts = data
            for (let i = 0; i < posts.length; i++) {
                let postsBody = posts[i].body
                let postTitle = posts[i].title

                let componentPostsTitleUser = $('<div class="postTitle"> ' + postTitle + '</div>')
                let componentPostsBodyUser = $('<div class="postBody"> ' + postsBody + '</div>')

                let $componentUserPosts = $('<div class="post"></div>')

                $componentUserPosts.append(componentPostsTitleUser)
                $componentUserPosts.append(componentPostsBodyUser)

                $componentBlock.append($componentUserPosts)
            }


        })
    })
    return $componentUser
}
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
    $.get('https://jsonplaceholder.typicode.com/users/' + userId, function (data) {
        $('#root').html(null)
        let user = data

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

    let $buttonTodos = $('<button>show to do</button>')
    $componentUser.append($buttonTodos)

    let $buttonAlbums = $('<button>album</button>')
    $componentUser.append($buttonAlbums)

    let $userInfoComponent = $('<div id="userInfo"></div>')
    $componentUser.append($userInfoComponent)

    $buttonPosts.on('click', function () {
        $.get('https://jsonplaceholder.typicode.com/posts', function (data) {
            $userInfoComponent.html(null)
            let posts = data
            for (let i = 0; i < posts.length; i++) {
                let postsBody = posts[i].body
                let postTitle = posts[i].title

                let componentPostsTitleUser = $('<div class="postTitle"> ' + postTitle + '</div>')
                let componentPostsBodyUser = $('<div class="postBody"> ' + postsBody + '</div>')

                let $componentUserPosts = $('<div class="post"></div>')

                $componentUserPosts.append(componentPostsTitleUser)
                $componentUserPosts.append(componentPostsBodyUser)

                $userInfoComponent.append($componentUserPosts)
            }
        })
    })

    $buttonTodos.on('click', function () {
        $.get('https://jsonplaceholder.typicode.com/todos', function (data) {
            $userInfoComponent.html(null)
            let todos = data

            for (let i = 0; i < todos.length; i++) {

                let title = todos[i].title
                let completed = todos[i].completed

                let componentTitleTodos = $('<div>' + title + '</div>')

                let checkedAttribute = completed ? 'checked' : ''
                let componentCheckbox = $('<div>' + 'completed: <input type="checkbox" ' + checkedAttribute + '></div>')

                let $componentBlockTodos = $('<div></div>')

                $componentBlockTodos.append(componentTitleTodos)
                $componentBlockTodos.append(componentCheckbox)

                $userInfoComponent.append($componentBlockTodos)
            }

        })
    })

    $buttonAlbums.on('click', function () {
        $.get('https://jsonplaceholder.typicode.com/albums', function (data) {
            $userInfoComponent.html(null)

            let album = data

            for (let i = 0; i < album.length; i++) {

                if (userId == album[i].userId) {
                    let $componentBlockAlbum = $('<div class="album"></div>')

                    let $componentTitleAlbum = $('<div>' + album[i].title + '</div>')
                    $componentBlockAlbum.append($componentTitleAlbum)

                    let $photosCollection = $('<div class ="photosCollection"></div>')
                    $componentBlockAlbum.append($photosCollection)

                    $userInfoComponent.append($componentBlockAlbum)

                    $.get('https://jsonplaceholder.typicode.com/photos', function (photos) {

                        for (let j = 0; j < photos.length; j++) {

                            if (album[i].id == photos[j].albumId) {

                                let titlePhoto = photos[j].title
                                let ph = photos[j].thumbnailUrl

                                let $componentBlockPhoto = $('<div class = "albumImageSection"></div>')

                                let $componentTitlePhoto = $('<div>' + titlePhoto + '</div>')
                                $componentBlockPhoto.append($componentTitlePhoto)

                                let $componentPhoto = $("<img src='"+ ph +"'>")
                                $componentBlockPhoto.append($componentPhoto)

                                $photosCollection.append($componentBlockPhoto)
                            }
                        }
                    })
                }
            }
        })
    })
    return $componentUser
}
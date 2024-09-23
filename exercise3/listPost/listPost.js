
function getUserById(users, userIds) {
    return new Promise(function(resolve) {
        let result = users.filter(function(user) {
            return userIds.includes(user.id);
        })

        setTimeout(function() {
            resolve(result);
        }, 0);
    });
}



getPosts()
    .then(function(posts) {
        let userIds = posts.map(function(posts) {
            return posts.user_id;
        });

        return getUserById(users, userIds)
            .then(function(dataUsers) {
                return {
                    users: dataUsers,
                    posts: posts,
                };
            });
    })
    .then(function(data) {

        let listPost = document.querySelector('#listPost')

        let html = '';

        data.posts.forEach(post => {
            let user = users.find(user => user.id === post.user_id);


            html += `
                <tr>
                    <th scope="row" id="Id">${post.id}</th>
                    <td id="title">${post.title}</td>
                    <td id="fullName">${user.first_name + " " + user.last_name}</td>
                    <td id="created_at">${post.created_at}</td>
                </tr>
            `
        })

        
        listPost.innerHTML = html;
    })

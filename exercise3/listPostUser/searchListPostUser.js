
const $email = document.getElementById('email')

const $btnSearch = document.getElementById('search')

function searchPost() {
	const Email = $email.value;

    if(Email.length > 0) {

        for(let user of users) {
            if(user.email === Email) {

                    let listPostUser = document.querySelector('#listPostUser')

                    let html = '';

                    data.forEach(element => {
                        if(element.user_id === user.id) {
                            html += `
                            <tr>
                                <th scope="row" id="Id">${element.id}</th>
                                <td id="title">${element.title}</td>
                                <td id="fullName">${user.first_name + " " + user.last_name}</td>
                                <td id="image">${element.image}</td>
                                <td id="content">${element.content}</td>
                                <td id="created_at">${element.created_at}</td>
                                <td id="updated_at">${element.updated_at}</td>
                            </tr>
                        `
                        }
                    });

                    
                    listPostUser.innerHTML = html;
                    
            }
        }
    } else {
        alert('Vui lòng nhập thông tin tìm kiếm')
    }
    

}
$btnSearch.onclick = searchPost;

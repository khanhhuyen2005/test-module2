
const $Id = document.getElementById('ID')

const $btnSearch = document.getElementById('search')

function searchPost() {
	const ID = $Id.value;

    if(ID.length > 0) {
        for(let i = 0; i < data.length; i++) {
            if(data[i].id === Number(ID)) {

                    let viewPost = document.querySelector('#viewPost')

                    let html = '';

                    let user = users.find(user => user.id === data[i].user_id);


                    html += `
                        <tr>
                            <th scope="row" id="Id">${data[i].id}</th>
                            <td id="title">${data[i].title}</td>
                            <td id="fullName">${user.first_name + " " + user.last_name}</td>
                            <td id="image">${data[i].image}</td>
                            <td id="content">${data[i].content}</td>
                            <td id="created_at">${data[i].created_at}</td>
                            <td id="updated_at">${data[i].updated_at}</td>
                        </tr>
                    `

                    viewPost.innerHTML = html;

            }
        }
    } else {
        alert('Vui lòng nhập thông tin tìm kiếm')
    }
    

}
$btnSearch.onclick = searchPost;



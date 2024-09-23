
const $keyword = document.getElementById('keyword')

const $btnSearch = document.getElementById('search')

function searchUser() {
	const keyword = $keyword.value;

    if(keyword.length > 0) {
        for(let i = 0; i < users.length; i++) {
            if(users[i].last_name.toLowerCase().includes(keyword.toLowerCase()) === true || users[i].first_name.toLowerCase().includes(keyword.toLowerCase()) === true || users[i].email.toLowerCase().includes(keyword.toLowerCase()) === true ) {
                let userBlock = document.querySelector('#viewUser');

                let htmlUser = '';

                    htmlUser += `
                        <tr>
                            <th scope="row" id="Id">${users[i].id}</th>
                            <td id="FullName">${users[i].first_name + " " + users[i].last_name}</td>
                            <td id="Email">${users[i].email}</td>
                        </tr>
                    `

                userBlock.innerHTML = htmlUser;
            }
        }
    } else {
        for(let i = 0; i < users.length; i++) {

            let userBlock = document.querySelector('#viewUser');

            let htmlUser = '';

                    users.forEach(element => {

                        htmlUser += `
                            <tr>
                                <th scope="row" id="Id">${element.id}</th>
                                <td id="FullName">${element.first_name + " " + element.last_name}</td>
                                <td id="Email">${element.email}</td>
                            </tr>
                        `
                        });
                    
                userBlock.innerHTML = htmlUser;
        }
    }
    

}
$btnSearch.onclick = searchUser;



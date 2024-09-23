
const rank = [
    {
        username: 'Newcastle',
        point: 10,
        coefficient: 1
    },
    {
        username: 'Liverpool',
        point: 12,
        coefficient: 9
    },
    {
        username: 'Arsenal',
        point: 11,
        coefficient: 5
    },
    {
        username: 'Man City',
        point: 13,
        coefficient: 8
    },
    {
        username: 'Chelsea',
        point: 10,
        coefficient: 6
    },
    {
        username: 'Brighton',
        point: 9,
        coefficient: 4
    },
    {
        username: 'Aston Villa',
        point: 12,
        coefficient: 3
    },
    {
        username: 'Nottingham Forest',
        point: 9,
        coefficient: 2
    }
]


let rankBlock = document.querySelector('#chart');

    let htmlRank = '';

for(let i = 0; i < rank.length; i++) {
    rank.sort((a,b) => {
            let comparePoint = b.point - a.point;
            let compareCoefficient = b.coefficient - a.coefficient;
        
            return comparePoint || compareCoefficient;
            
        });

        htmlRank += `
            <tr>
                <td>${i + 1}</td>
                <td scope="row" id="Id">${rank[i].username}</td>
                <td id="FullName">${rank[i].coefficient}</td>
                <td id="Email">${rank[i].point}</td>
            </tr>
        `

}

rankBlock.innerHTML = htmlRank;

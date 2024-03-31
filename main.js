// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json); // This will log the entire array of users
//         console.log(json[0]); // This will log the first user object
//         // You can do further operations with json[0] here

//         for (let i = 0; i < json.length; i++) {
//         const listDiv = $("#users-list");
//             listDiv.text(`user number ${json[i].id} name ${json[i].name}`);
//         }

//     });

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//         console.log(json[0]);
//         const listDiv = $("#users-list");

//         const tableData = $("#box");

//         $("#table-id").css({
//             "margin": "50px",
//             "border": "1px solid black"
//         });

//         tableData.css({
//             "margin": "10px",
//             "border": "1px solid black"
//         });
//         json.forEach(user => {
//             $("#box").append(`<p>User number ${user.id}, name ${user.name} mail ${user.email} address ${user.address.city} </p>`);
//             listDiv.css({ color: "gray", background: "beige", fontWeight: "bold" })
//             $("#users-list p").css("margin-bottom", "50px");
//             $("#box").text(user.id)
//         });
//     });

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(json => {
//     const tableBody = $("#table-id tbody"); 

//     json.forEach(user => {
//         const newRow = `
//             <tr>
//                 <td class="box">${user.id}</td>
//                 <td class="box">${user.username}</td>
//                 <td class="box">${user.email}</td>
//                 <td class="table-light">${user.address.city}</td>
//             </tr>
//         `;
//         tableBody.append(newRow);
//     });

//     $("#table-id").css({
//         "margin": "50px",
//         "border": "1px solid black"
//     });

// });
// $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/users',
//     method: 'GET',
//     success: function(json) {
//         const tableBody = $("#table-id tbody"); 

//         json.forEach(user => {
//             const newRow = `
//                 <tr>
//                     <td class="box">${user.id}</td>
//                     <td class="box">${user.username}</td>
//                     <td class="box">${user.email}</td>
//                     <td class="table-light">${user.address.city}</td>
//                 </tr>
//             `;
//             tableBody.append(newRow);
//         });

//         $("#table-id").css({
//             "margin": "50px",
//             "border": "1px solid black"
//         });
//     },
//     error: function(xhr, status, error) {
//         console.error('An error occurred:', error);
//     }
// });

$.get('https://jsonplaceholder.typicode.com/users', function (json) {
    const tableBody = $("#table-id tbody");

    json.forEach(user => {
        const newRow = `
            <tr>
                <td class="box">${user.id}</td>
                <td class="box">${user.username}</td>
                <td class="box">${user.email}</td>
                <td class="table-light">${user.address.city}</td>
            </tr>
        `;
        tableBody.append(newRow);
    });

    
$("#table-id").hide();

$("#table-id").css({
    "margin": "50px",
    "border": "1px solid black"
});

$("#table-id").fadeIn(5000);

}).fail(function (xhr, status, error) {
    console.error('An error occurred:', error);
});

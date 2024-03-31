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

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        const tableBody = $("#table-id tbody"); // Select the tbody element of the table

        json.forEach(user => {
            // Create a new table row and append user data to it
            const newRow = `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                </tr>
            `;
            // Append the new row to the table body
            tableBody.append(newRow);
        });

        // Apply styling to the table
        $("#table-id").css({
            "margin": "50px",
            "border": "1px solid black"
        });
    });

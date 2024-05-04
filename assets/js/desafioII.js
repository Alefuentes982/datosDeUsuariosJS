// Funcion IIFE 
(function () {
    //obtengo los datos de la API y los muestro en la página
    async function fetchUserData() {
        try {
            // Realiza la solicitud a la API para obtener datos de usuarios
            const response = await fetch('https://randomuser.me/api/?results=10');
            const data = await response.json();

            const users = data.results;
            console.log(JSON.stringify(users))           
            const userDataContainer = document.getElementById('user-data');

            users.forEach(user => {           
                const { name, email, phone, picture } = user;
                const userElement = document.createElement('div');
                userElement.classList.add('user');

                const nameElement = document.createElement('p');
                nameElement.textContent = `${name.first} ${name.last}`;
                userElement.appendChild(nameElement);

                const emailElement = document.createElement('p');
                emailElement.textContent = email;
                userElement.appendChild(emailElement);

                const phoneElement = document.createElement('p');
                phoneElement.textContent = phone;
                userElement.appendChild(phoneElement);

                const pictureElement = document.createElement('img');
                pictureElement.src = picture.large;
                userElement.appendChild(pictureElement);

                userDataContainer.appendChild(userElement);
            });
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    }

    fetchUserData();
})();
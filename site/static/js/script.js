const API_URL = "http://192.168.1.188:3000";
async function get_rooms() {
    const resp = await fetch(API_URL + "/rooms");
    const data = await resp.json();
    return data;
}

async function display_rooms() {
    const rooms = await get_rooms();
    const main = document.querySelector("main > div.content section > div.rooms-list");
    rooms.forEach((room) => {
        const roomDiv = document.createElement("div");
        roomDiv.classList.add("room");
        roomDiv.innerHTML = `
        <div class="images">
            ${room.images.map(
                (img) => `
                <div class="image-item">
                <img src="${API_URL + img}" alt="Room Image">
                </div>
                `
            )}
        </div>
            <h2>Room ${room.number}</h2>
            <p>Type: ${room.type}</p>
            <p>Status: ${room.status}</p>
        `;
        main.appendChild(roomDiv);
    });
}

// display_rooms();

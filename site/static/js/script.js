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
        <div class="room-info">
            <p>Room ${room.number}</p>
            <p>Price: $${room.price}</p>
            </div>
            <p>Type: ${room.type}</p>
            <p>Status: ${room.status}</p>
            <div class="rating">
            ${'<i data-lucide="star"></i>'.repeat(Number(room.rating))}
            </div>
            `;
        main.appendChild(roomDiv);
        lucide.createIcons();
    });
}

// display_rooms();
document.querySelectorAll("div.rating").forEach((div) => {
    const rating = div.getAttribute("data-rating");
    for (let i = 0; i < rating; i++) {
        const star = document.createElement("i");
        star.setAttribute("data-lucide", "star");
        div.appendChild(star);
    }
    lucide.createIcons();
});

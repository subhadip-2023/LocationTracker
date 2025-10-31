const socket = io();
// console.log("hey");

if (navigator.geolocation) {
    
    navigator.geolocation.watchPosition(
        (position)=>{
            const {longitude, latitude} = position.coords;
            socket.emit("send-location",{longitude, latitude})
        },
        (error)=>{
            console.error(error);  
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
    );
}

const map = L.map("map").setView([0, 0], 16);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution: "world map"}).addTo(map);

const markers = {};

socket.on("recieve-location", (data)=> {
    const {id, latitude, longitude} = data;

    map.setView([latitude, longitude]);

    if(!markers[id]) {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    } else {
        markers[id].setLatLng([latitude, longitude])
    }
});

socket.on("user-disconnected", (id)=>{
    if(markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
})
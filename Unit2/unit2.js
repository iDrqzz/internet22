var player = {
    name: "Giannis Antetokounmpo",
    position: "Forward",
    jerseyNumber: 34,
    introduce: function() {
        return "Hi, I'm " + this.name + ", a " + this.position + " for the Milwaukee Bucks, wearing jersey number " + this.jerseyNumber + ".";
    }
};

console.log(player.introduce());

document.getElementById('eventButton').addEventListener('click', function() {
    alert('You clicked the event button!');
});
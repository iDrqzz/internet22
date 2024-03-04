document.addEventListener('DOMContentLoaded', function () {

    function createCharacter(name, hp, moves) {

        const character = {
            getHP: function () {
                return hp;
            },
            getName: function () {
                return name;
            },
            displayMoves: function () {
                const movesDiv = document.querySelector('.moves');
                for (let i = 0; i < moves.length; i++) {
                    const paragraph = document.createElement('p');
                    paragraph.textContent = moves[i];
                    movesDiv.appendChild(paragraph);
                }
            }
        };


        return character;
    }

    const bucksPlayer = createCharacter('Giannis Antetokounmpo', 95, ['Eurostep', 'Fadeaway', 'Alley-oop']);

    bucksPlayer.displayMoves();

    console.log('Player Name:', bucksPlayer.getName());
    console.log('Player HP:', bucksPlayer.getHP());
});
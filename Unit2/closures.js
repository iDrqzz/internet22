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
                console.log('Moves:');
                for (let i = 0; i < moves.length; i++) {
                    console.log(moves[i]);
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
async function bucksRace() {

    let runner1 = false;
    let runner2 = false;
    let loser = '';

    const runner1Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner1';
            resolve(true);
        }, Math.random() * 10000);
    });

    const runner2Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner2';
            resolve(true);
        }, Math.random() * 10000);
    });

    const results = await Promise.all([runner1Go, runner2Go]);

    return [results[0], results[1], loser];
}

bucksRace().then((result) => {
    console.log("Result of runner1Go:", result[0]);
    console.log("Result of runner2Go:", result[1]);
    console.log("The loser is:", result[2]);
});
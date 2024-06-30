function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmAboveLimit = 1;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}


checkSpeed(100);  
checkSpeed(40);  
checkSpeed(10); 

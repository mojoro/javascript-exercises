const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    people.sort((personA, personB) => {
        if (!personA.yearOfDeath) personA.yearOfDeath = currentYear;
        if (!personB.yearOfDeath) personB.yearOfDeath = currentYear;
        const lifeA = personA.yearOfDeath - personA.yearOfBirth;
        const lifeB = personB.yearOfDeath - personB.yearOfBirth;

        if(lifeA > lifeB) return -1;
        if(lifeA < lifeB) return 1;
    })

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;

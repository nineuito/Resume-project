function hero(bullets, dragons) {
    if (bullets % 2 === 0 && bullets > dragons) {
        return true;
    } else {
        return false;
    }
}

console.log(hero(8, 4))


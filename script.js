const banana_scale = (num) => {
    if(num >0) {
        return Math.round(num/0.18)
    }

    else {
        return "Please enter a positive number!!!"
    }
}

module.exports = { banana_scale };
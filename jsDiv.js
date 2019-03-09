
function div(val, by){
    return (val - val % by) / by;
}

module.exports = div;
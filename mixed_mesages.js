// const sun = 
const filler = {
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const thing = {
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const stuff = {
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const we = {
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const should = {
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const cut = {
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const down = {
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const hmm = {
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const but = {
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const nah = {
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const later = {
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const wait = {
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const tarot_deck = {
    1:{
        name:'Fool',
        past: "you had lessons you had to learn",
        present: "there is something",
        future: 'we have so much to do in here'
    },
    2:{
        name:'filler'
    },
    3:thing,4:stuff,5:we,6:should,7:cut,8:down,9:hmm,10:but,11:nah,12:later,13:wait}

function draw () {
    const past = Math.floor(Math.random() *13)

    const present = Math.floor(Math.random() *13)

    const future = Math.floor(Math.random() *13)

    console.log(`Your past is ${(tarot_deck[past].name)} which means ${(tarot_deck[past]).past} and your present card is ${tarot_deck[present].name} meaning that ${tarot_deck[present].present} and finally your future is ${tarot_deck[future].name} which means that ${tarot_deck[future].future}`) 
}
 
const we = {
    name: 'mistakes',
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const should = {
    name: 'I was wrong',
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const cut = {
    name: 'something',
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const down = {
    name: 'anything',
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const hmm = {
    name: 'Help!',
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const but = {
    name: 'why!?0',
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const nah = {
    name: 'eventually',
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const later = {
    name: 'something will have to change later.',
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const tarot_deck = {
    0: {
        name: 'Fool',
        past: ["you had lessons you had to learn", "you had lessons you failed to learn"],
        present: 'indexes start at 0',
        future: 'always have always will'
    },
    1:{
        name:'The Magician',
        past: ['You have seen your desires made manifest','You have let your desires keep you from your responsibilities'],
        present: "there is something",
        future: 'we have so much to do in here'
    },
    2:{
        name: 'moon',
        past:['blah', 'blah of another sort'],
        present:'blah blah',
        future:'blah blah blah'
    },
    3:{
        name: 'messed up',
        past:['blah','should maybe get actual things in here soon'],
        present:'blah blah',
        future:'blah blah blah'
    },
    4:{
        name: 'sigh',
        past:'blah',
        present:'blah blah',
        future:'blah blah blah'
    },
    5:we,6:should,7:cut,8:down,9:hmm,10:but,11:nah,12:later,13:{
        name: 'Death',
        past:['You have overcome and experienced great strife letting it change your for the better','You have endured life without letting it affect you for the better'],
        present:'blah blah',
        future:'blah blah blah'
    }}

function draw () {
    const past = Math.floor(Math.random() *3)
    const upordown = Math.floor(Math.random() *2)
    // console.log(upordown)
    const present = Math.floor(Math.random() *13)

    const future = Math.floor(Math.random() *13)

    console.log(`Your past is ${(tarot_deck[past].name)} which means ${(tarot_deck[past]).past[upordown]} and your present card is ${tarot_deck[present].name} meaning that ${tarot_deck[present].present} and finally your future is ${tarot_deck[future].name} which means that ${tarot_deck[future].future}`) 
}
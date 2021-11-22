// const sun = 
const filler = {
    
}
const thing = {
    name: 'messed up',
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const stuff = {
    name: 'sigh',
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
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
const wait = {
    name: 'alot of things',
    past:'blah',
    present:'blah blah',
    future:'blah blah blah'
}
const tarot_deck = {
    0: {
        //this one is actually fool you fool
        name: 'test',
        past: ['something is wrong','son of a -']
    },
    1:{
        name:'Fool',
        past: ["you had lessons you had to learn", "you had lessons you failed to learn"],
        present: "there is something",
        future: 'we have so much to do in here'
    },
    2:{
        name: 'moon',
        past:['blah', 'blah of another sort'],
        present:'blah blah',
        future:'blah blah blah'
    },
    3:thing,4:stuff,5:we,6:should,7:cut,8:down,9:hmm,10:but,11:nah,12:later,13:wait}

function draw () {
    const past = Math.floor(Math.random() *3)
    const upordown = Math.floor(Math.random() *2)
    console.log(upordown)
    const present = Math.floor(Math.random() *13)

    const future = Math.floor(Math.random() *13)

    console.log(`Your past is ${(tarot_deck[past].name)} which means ${(tarot_deck[past]).past[upordown]} and your present card is ${tarot_deck[present].name} meaning that ${tarot_deck[present].present} and finally your future is ${tarot_deck[future].name} which means that ${tarot_deck[future].future}`) 
}


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
    5:{
        name: 'The Hierophant',
        past:'blah',
        present:'blah blah',
        future:'blah blah blah'
    },
    6:{
        name: 'The Lovers',
        past:'blah',
        present:'blah blah',
        future:'blah blah blah'
    },
    7:{
        name: 'The Chariot',
        past:'blah',
        present:'blah blah',
        future:'blah blah blah'
    },
    8:{
        name: 'The Hermit',
        past:'blah',
        present:'blah blah',
        future:'blah blah blah'
    },
    9:{
        name: 'Wheel of Fortune',
        past:'blah',
        present:'blah blah',
        future:'blah blah blah'
    },
    10:{
        name: 'The Hanged Man',
        past:'blah',
        present:'blah blah',
        future:'blah blah blah'
    },
    11:{
        name: 'Death',
        past:['You have overcome and experienced great strife letting it change your for the better','You have endured life without letting it affect you for the better'],
        present:'blah blah',
        future:'blah blah blah'
    },
    12:{
        name: 'Temperance',
        past:'blah',
        present:'blah blah',
        future:'blah blah blah'
    }
    
}

function draw () {
    const past = Math.floor(Math.random() *3)
    const upordown = Math.floor(Math.random() *2)
    // console.log(upordown)
    const present = Math.floor(Math.random() *13)

    const future = Math.floor(Math.random() *13)

    console.log(`Your past is ${(tarot_deck[past].name)} which means ${(tarot_deck[past]).past[upordown]} and your present card is ${tarot_deck[present].name} meaning that ${tarot_deck[present].present} and finally your future is ${tarot_deck[future].name} which means that ${tarot_deck[future].future}`) 
}
draw()


const tarot_deck = {
    0: {
        name: 'Fool',
        past: ["you had lessons you had to learn", "you had lessons you failed to learn"],
        present: ['You are filled with a desire for change', 'You are disguising fears as thrill seeking'],
        future: ['You will joyfully find yourself in new exciting situations','Unless you change you will find yourself aimless']
    },
    1:{
        name:'The Magician',
        past: ['You have seen your desires made manifest','You have let your desires keep you from your responsibilities'],
        present: ["Wills will be made manifest",'a liar will make false claims for self gain'],
        future: ['There will be opportunities to realize potential','There will be lies and manipulations']
    },
    2:{
        name: 'The High Priestess',
        past:['There has been strength in the mind and intuition in your past', 'The mind has been an escape from reality'],
        present:['Trust in your mind. It knows what\'s best here','Must embrace the reality of the world and not retreat into the mind'],
        future:['Build on and trust in your mind and intuition','There will be a desire to disappear into the mind that must be resisted']
    },
    3:{
        name: 'The Empress',
        past:['Motherly creation','should maybe get actual things in here soon'],
        present:['blah blah','decadence'],
        future:['blah blah blah','fall from grace']
    },
    4:{
        name: 'The Emperor',
        past:['blah','fupah'],
        present:['blah blah','plah'],
        future:['blah blah blah','fabla']
    },
    5:{
        name: 'The Hierophant',
        past:['blah','fupah'],
        present:['blah blah','plah'],
        future:['blah blah blah','fabla']
    },
    6:{
        name: 'The Lovers',
        past:['blah','fupah'],
        present:['blah blah','plah'],
        future:['blah blah blah','fabla']
    },
    7: {
        name:'Strength',
        past:['blah','fupah'],
        present:['blah blah','plah'],
        future:['blah blah blah','fabla']
    },
    8:{
        name: 'The Chariot',
        past:['blah','fupah'],
        present:['blah blah','plah'],
        future:['blah blah blah','fabla']
    },
    9:{
        name: 'The Hermit',
        past:['blah','fupah'],
        present:['blah blah','plah'],
        future:['blah blah blah','fabla']
    },
    10:{
        name: 'Wheel of Fortune',
        past:['blah','fupah'],
        present:['blah blah','plah'],
        future:['blah blah blah','fabla']
    },
    11:{
        name: 'Justice',
        past:['blah','fupah'],
        present:['blah blah','plah'],
        future:['blah blah blah','blah blah b']
    },
    12:{
        name: 'The Hanged Man',
        past:['blah','fupah'],
        present:['blah blah','plah'],
        future:['blah blah blah','blah blah b']
    },
    13:{
        name: 'Death',
        past:['You have overcome and experienced great strife letting it change your for the better','You have endured life without letting it affect you for the better'],
        present:['blah blah','plah'],
        future:['blah blah blah','fubla']
    },
    14:{
        name: 'Temperance',
        past:['blah','da'],
        present:['blah blah', 'pra'],
        future:['blah blah blah','hm']
    },
    15:{
        name: 'The Devil',
        past: ['Used substances','blames others and things for failures'],
        present: ['Indulge creatively','refuse to take responsibility'],
        future:['above in future sense','Must take responsibility']
    },
    16:{
        name: 'Tower',
        past:['Catalysing change','Just catastrophy',],
        present: ['good','bad'],
        future: ['Beware Good drastic sudden changes that must be embraced', 'Stop putting off or delaying it will only make it worse']
    },
    17:{
        name: 'Star',
        past: ['Sharing and showing off','Flaunted and lorded it over others'],
        present: ['Time to shine','Time to hold back and be humble'],
        future: ['Will have the chance to shine and share with the world soon','Heeds the need for humility and not taunt']
    },
    18: {
        name: 'The Moon',
        past: ['u','d'],
        present: ['u','d'],
        future: ['u','d']
    },
    19: {
        name: "The Sun",
        past: ['u','d'],
        present: ['u','d'],
        future: ['u','d']
    },
    20: {
        name: 'Judgement',
        past:['u','d'],
        present: ['u','d'],
        future:['u','d']
    },
    21:{
        name: 'The World',
        past: ['u','d'],
        present: ['u','d'],
        future: ['u','d']
    }
    
}

function draw () {
    const past = Math.floor(Math.random() *22)
    const upordown = Math.floor(Math.random() *2)
    // console.log(upordown)
    const present = Math.floor(Math.random() *22)
    const presordown = Math.floor(Math.random() *2)
    const future = Math.floor(Math.random() *22)
    const fuordown = Math.floor(Math.random() *2)
    console.log(`Your past is ${(tarot_deck[past].name)} which means ${(tarot_deck[past]).past[upordown]} and your present card is ${tarot_deck[present].name} meaning ${tarot_deck[present].present[presordown]} and finally your future is ${tarot_deck[future].name} which means that ${tarot_deck[future].future[fuordown]}`) 
}
draw()
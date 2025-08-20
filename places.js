var places = {
    cornField: {
        name: `Corn Field`,
        arriveMessage: `You are in the corn field.`,
        description: `You are surrounded by tall ears of corn, blotting out the horizon. Rising above them, you see the roof of a farm house.`,
        items: [
        ],
        npcs: [],
        connections: {
            "to farm house": "farmHouseOutside",
            "to city": `cityGate`,
            "to centre": `cornFieldCentre`
        },
        isDug: false,
    },
    farmHouseOutside: {
        name: `Farm House`,
        arriveMessage: `You are outside of the farm house.`,
        description: `It is an average farm house, with a large locked door. You can hear sounds coming from inside.`,
        items: [
            items.shovel
        ],
        npcs: [],
        connections: {
            "to corn field": "cornField",
            "to city": `cityGate`
        },
        isDoorOpen: false
    },
    farmHouseInside: {
        name: `Inside Farm House`,
        arriveMessage: `You are inside the farm house.`,
        description: `You are in a "typical" medieval farm house. There is a large wooden table, and a spiral staircase in the corner leading up to the roof.`,
        items: [
            items.knife,
            items.meat,
            items.cactus,
        ],
        npcs: [],
        connections: {
            "outside": "farmHouseOutside",
            "upstairs": "farmHouseRoof"
        },
    },
    farmHouseRoof: {
        name: `Atop farm house`,
        arriveMessage: `You are atop the farm house.`,
        description: `You are on a wooden platform attached to the roof, with a table and chairs.`,
        items: [
            items.binoculars,
            items.coin
        ],
        npcs: [],
        connections: {
            "downstairs": "farmHouseInside"
        },
    },
    cityGate: {
        name: `Gate to the city`,
        arriveMessage: `You are in front of the city's gate.`,
        description: `The gate to the city is closed.`,
        items: [],
        npcs: [npcs.guard],
        connections: {
            "to corn field": "cornField",
            "to farm house": "farmHouseOutside"
        },
    },
    citySquare: {
        name: `City Square`,
        arriveMessage: `You are in the city square.`,
        description: `You are in the town square. It is bustling with people. Alongside the other buldings, there is a smithy and gaol. There are two pathes leading out of the square, an alley between two of the more unassuming buldings, and a large street.`,
        items: [],
        npcs: [npcs.heretic],
        connections: {
            "through gate": "cityGate",
            "inside gaol": "gaol",
            "inside alley": "alley",
            "inside smithy": "smithy",
            "to street": "street"
        },

    },
    gaol: {
        name: `Gaol`,
        arriveMessage: `You are inside the gaol.`,
        description: `You are in a small wooden building with a closed, stone gaol cell. The cell contains a lone table with a candlestick still smoking on its top. The floor is covered in a thin layer of straw.`,
        items: [
            items["tray of food"],
            items.sack
        ],
        npcs: [],
        connections: {
            "outside": "citySquare"
        },

    },
    apothecary: {
        name: `Apothecary`,
        arriveMessage: `You are inside of the Apothecary.`,
        description: `You are in a dimly lit room, filled with shelves stocked with various substances. Across from you there is a large wooden counter.`,
        items: [
            items.leeches,
            items["blood thinners"]
        ],
        npcs: [npcs.apothecary],
        connections: {
            "outside": "street"
        },
    },
    shop: {
        name: `Shop`,
        arriveMessage: `You are in the shop.`,
        description: `You are in the shop. There are a couple of people perusing the commodities. The goods in the store generally consist of food, with the occasional issue of Goat's Monthly, and sets of tupperware.`,
        items: [
            items.cheese,
            items.tea
        ],
        npcs: [
            npcs.shopkeeper
        ],
        connections: {
            "outside": "street"
        },
    },
    tavern: {
        name: `Tavern`,
        arriveMessage: `You are in the tavern.`,
        description: `You are in the tavern. There is a crowd of people obscuring the bar. There are also a few people sitting in chairs looking unimpressed.`,
        items: [],
        npcs: [
            npcs.barman
        ],
        connections: {
            "outside": "street"
        },
        isBarrelFull: true,
        isBusy: true,
    },
    smithy: {
        name: `Smithy`,
        arriveMessage: `You are in the smithy.`,
        description: `You are inside the smithy. The building is divided in two by the counter. On one side there are several shelves holding nails, railroad spikes, horseshoes, and various farming implements; the other side is populated by various tools, work stations, and an imposing forge.`,
        items: [
            items.sign
        ],
        npcs: [
            npcs.smith
        ],
        connections: {
            "outside": "citySquare"
        },
    },
    alley: {
        name: `alley`,
        arriveMessage: `You are in the alley.`,
        description: `You are in the alley. The sides of buildings loom overhead, and there is a dead end in front of you. The left wall is in a state of disrepair; you think you can see a glimpse of metal behind it, but you can't tell.`,
        items: [items["metal detector"]],
        npcs: [],
        connections: {
            "out": "citySquare"
        }
    },
    street: {
        name: `street`,
        arriveMessage: `You are in the city high street.`,
        description: `You are in the high street. It is quiet; most of the people are in the tavern, from which you can hear faint shouting about tea. There is also a shop and an apothecary, which are significantly quieter.`,
        items: [],
        npcs: [],
        connections: {
            "to square": "citySquare",
            "inside apothecary": "apothecary",
            "inside shop": "shop",
            "inside tavern": "tavern"
        }
    },
    cornFieldCentre: {
        name: `corn field centre`,
        arriveMessage: `You are in the centre of the corn field.`,
        description: `You are in a large clearing in the centre of the corn field. You feel as if you are going to be attacked by an imposing figure with large red bars.`,
        items: [],
        npcs: [],
        connections: {
            "out": "cornField"
        },
    },
    apothecaryUpstairs: {
        name: `apothecary upstairs`,
        arriveMessage: `You are in the of attic the apothecary.`,
        description: `The upstairs is being used as a display room, with model shipwrecks, model ships, and some miscellaneous bric-a-brac.`,
        items: [
            items["gaol key"],
            items["glass bottle"]
        ],
        npcs: [],
        connections: {
            "downstairs": "apothecary",
        },
        isPushable: false
    },
    // hallucinatable places, places for hallucinating, those places.
    SeaWattGaming: {
        name: `sea watt gaming quote`,
        arriveMessage: undefined,
        description: `But then I had a very good idea. I used F5 - see, using F5 gave me a whole new perspective, and I was able to see a place description I couldn't have seen before.`,
        items: [],
        npcs: [],
        connections: {}
    },
    gower: {
        name: `gower`,
        arriveMessage: undefined,
        description: `You are in the Gower.`,
        items: [],
        npcs: [],
        connections: {}
    },
    boilPrawnShack: {
        name: `boil prawn shack`,
        arriveMessage: undefined,
        description: `You are in a swamp. There is a patch of dryish land; sitting atop it is a ramshackle shack, with a man in prisoner clothing leaning against it. He says in an Mancunian accent: "Marika's tits, you must be 'ungry." You promptly stop hallucinating and have a hankering for some prawn.`,
        items: [],
        npcs: [],
        connections: {}

    },
    beatSaber: {
        name: `beat saber`,
        arriveMessage: undefined,
        description: `You are in a neon corridor, being assaulted by cubes while loud music is blasted in your ears.`,
        items: [],
        npcs: [],
        connections: {}
    },
};

var hallucinatablePlaces = [
    this.cornField,
    this.SeaWattGaming,
    this.gower,
    this.boilPrawnShack,
    this.beatSaber,
];

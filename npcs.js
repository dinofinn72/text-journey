var npcs = {
    shopkeeper: {
        lookDescription: `a shopkeeper suspiciously standing behind the counter`,
        inspectDescription: `The shopkeeper is a tall, lanky figure wearing a long coat and stetson.`,
        sayAlways: undefined,
        sayOnce: `"Hey there kid, i don't exept standard currency, if you want something i have you'll have to trade for it, currently i'm only accepting steaks and stakes."`,
        smallTalk: [
            `"Some may call this trash, but me, i call it treasure."`,
            `"Some people think I look suspicious, I'll say to that: your goddam right."`,
        ]
    },
    guard: {
        lookDescription: `a guard leaning against their spear`,
        inspectDescription: `the guard has tufts of green hair poking out from underneath there helmet. their armoure is well worn but sterdy. they are surounded by twelve cacti which they curuntly disecting with their eyes.  `,
        sayAlways: `You try to talk to the guard but their rapturous concentration on the cacti does not waver.`,
        smallTalk: [
            `"I used to be an adventurerer like you, till i took an arrow to the knee."`
        ]
    },
    barman: {
        lookDescription: `a barman being obscured by the crowd`,
        inspectDescription: `the man appears to be in his twenties it also appears he would rather be anywhere else`,
        sayAlways: `you try to get the barman's atention over the crowd but he is busy fighting for his life over the establishment's lack of tea`,
        sayOnce: undefined,
        smallTalk: [
            `"Thanks again for the tea, it realy saved my hide."`,
            `"I heard that gary got lost in hell. so sad"`,
            `"Did you know you can use gunpowder as a great antidepresent"`
        ]
    },
    //smith as in person who works in a smithy not someome named smith
    smith: {
        lookDescription: `a burly woman working the forge`,
        inspectDescription: `The woman is wearing an apron over practical cloths. She apears to be bothered about something`,
        sayAlways: undefined,
        sayOnce: `"I'm sorry but i'm all out of matts if you want somthing made you will have to wait for the next shipment."`,
        smallTalk: [
            `"Looking to protect yourself? Or deal some damage?"`
        ]
    },
    "grog connoisseur": {
        lookDescription: `an orb sitting alone drinking an imug of unidentifiibul liqwid waring a name tag that sais "helo my name is the grog conisure`,
        inspectDescription: `the orb is a brite red and it seems to be picking op the mug with two smaller mugs that appear to act as its hands`,
        sayAlways: undefined,
        sayOnce: `hey if you buy any of this here grog i recemend you pare it with cheese it goes geate with the scumm`,
        smallTalk: [
            `"Sometimes you get a mug of grog thats just pepperoni, those times are the worst."`,
            `"I wasent allways red you knowe i used to be vomit green."`
        ],
    },
    apothecary: {
        lookDescription: `a shady apothecary wearing a plague mask behind the counter`,
        inspectDescription: `They are wearing a dark cloak with large sleeves and a green plague mask.`,
        sayAlways: undefined,
        smallTalk: [
            `"Did you know i once fought a knight wielding a trowel, i was so adventures back then."`,
            `"dont ask how i got these giant's toes."`,
            `*unintelegable screeching*`
        ]
    },
    "cactus lord": {
        lookDescription: `The cactus lord ominously floating above clearing`,
        inspectDescription: `The cactus lord is an exceedingly large potted cactus wearing a potted caucus as crown above his sneering face.`,
        sayAlways: `The cactus lord is currently giving a fifty-nine page long monologue and you think it would be rude to interrupt.`,
        smallTalk: [
            `you somehow manage to have a nice chat with the cactus lord.`
        ]
    },
    "farmer": {
        lookDescription: `a scruffy farmer near the door`,
        inspectDescription: `The farmer is wearing seven pairs of overalls and a preaching hat. He does not look happy to see you.`,
        smallTalk: [
            `"Get out of my house you ruffian."`,
            `"I don't want to talk to you."`,
            `"I don't like you."`
        ]
    },
    "heretic": {
        lookDescription: `TODO`,
        inspectDescription: `TODO`,
        sayOnce: `TODO`,
        smallTalk: [
            `TODO`,
            `TODO`,
        ]
    }
};
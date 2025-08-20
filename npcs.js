var npcs = {
    shopkeeper: {
        lookDescription: `a shopkeeper standing suspiciously behind the counter`,
        inspectDescription: `The shopkeeper is a tall, lanky figure wearing a long coat and a Stetson.`,
        sayAlways: undefined,
        sayOnce: `"Hey there kid. I don't accept standard currency, so if you want something I have, you'll have to trade for it. Currently I'm only accepting steaks and stakes."`,
        smallTalk: [
            `"Some may call this trash, but me, I call it treasure."`,
            `"Some people think I look suspicious - I'll say to that: you're goddamn right."`,
        ]
    },
    guard: {
        lookDescription: `a guard leaning against their spear`,
        inspectDescription: `The guard has tufts of green hair poking out from underneath their helmet. Their armour is well worn, but sturdy. They are surrounded by twelve cacti, which they are currently dissecting with their eyes.`,
        sayAlways: `You try to talk to the guard, but their rapturous concentration on the cacti does not waver.`,
        smallTalk: [
            `"I used to be an adventurer like you. Then I took an arrow in the knee."`
        ]
    },
    barman: {
        lookDescription: `a barman being obscured by the crowd`,
        inspectDescription: `The man appears to be in his twenties. It also appears he would rather be anywhere else.`,
        sayAlways: `You try to get the barman's attention over the crowd, but he is busy fighting for his life over the establishment's lack of tea.`,
        sayOnce: undefined,
        smallTalk: [
            `"Thanks again for the tea, it really saved my hide."`,
            `"I heard that Gary got lost in hell. So sad."`,
            `"Did you know you can use gunpowder as a great antideppressant?"`
        ]
    },
    //smith as in person who works in a smithy not someome named smith
    smith: {
        lookDescription: `a burly woman working the forge`,
        inspectDescription: `The woman is wearing an apron over practical clothes. She appears to be bothered about something.`,
        sayAlways: undefined,
        sayOnce: `"I'm sorry but I'm all out of materials. If you want somthing made, you'll have to wait for the next shipment."`,
        smallTalk: [
            `"Looking to protect yourself? Or deal some damage?"`
        ]
    },
    "grog connoisseur": {
        lookDescription: `an orb sitting alone drinking`,
        inspectDescription: `The orb is bright red, and wearing a name tag that reads: "hello my name is the grog connoisseur". It is drinking an iMug of unidentifiable liquid, and seems to be picking up the mug with two smaller mugs that appear to act as its hands.`,
        sayAlways: undefined,
        sayOnce: `"Hey, if you buy any of this here grog, I recommend you pair it with cheese. It goes great with the scumm!"`,
        smallTalk: [
            `"Sometimes you get a mug of grog that's just pepperoni. Those times are the worst."`,
            `"I wasn't always red, you know. I used to be vomit green."`
        ],
    },
    apothecary: {
        lookDescription: `a shady apothecary wearing a plague mask behind the counter`,
        inspectDescription: `They are wearing a dark cloak with large drapey sleeves, and a green plague mask.`,
        sayAlways: undefined,
        smallTalk: [
            `"Did you know I once fought a knight wielding a trowel? I was so adventurous back then."`,
            `"Dont ask how I got these giant's toes."`,
            `*unintelligible screeching*`
        ]
    },
    "cactus lord": {
        lookDescription: `the Cactus Lord ominously floating above clearing`,
        inspectDescription: `The Cactus Lord is an exceedingly large potted cactus, wearing a potted caucus as a crown above his sneering face.`,
        sayAlways: `The Cactus Lord is currently giving a fifty-nine page long monologue, and you think it would be rude to interrupt.`,
        smallTalk: [
            `You somehow manage to have a nice chat with the Cactus Lord.`
        ]
    },
    "farmer": {
        lookDescription: `a scruffy farmer near the door`,
        inspectDescription: `The farmer is wearing seven pairs of overalls and a preaching hat. He does not look happy to see you.`,
        smallTalk: [
            `"Get out of my house, you ruffian."`,
            `"I don't want to talk to you."`,
            `"I don't like you."`
        ]
    },
    "heretic": {
        lookDescription: `a heretic imprisoned in the stocks`,
        inspectDescription: `The heretic is wearing black rags and a mask of shame. There is a crowd gathered around him, flinging insulin and various lamp shades.`,
        sayOnce: `"I saw a blonde girl burying a metallic box in the corn field, while muttering something about the cheese, man. Could be useful."`,
        smallTalk: [
            `"Man, I wish I was not stuck in these stocks, so I could craft more heretical idols."`,
            `[Censored for being too heretical]`,
        ]
    }
};

npcs.orb = npcs['grog connoisseur'];

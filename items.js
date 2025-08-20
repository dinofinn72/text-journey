var items = {
    lithium: {
        name: `lithium`,
        inspectDescription: `Helps with the visions.`,
    },
    shovel: {
        name: `a shovel`,
        inspectDescription: `An old shovel.`,
        lookDescription: undefined,
    },
    corpse: {
        name: `a corpse`,
        inspectDescription: `Morally dubious bargaining chip.`,
        lookDescription: `a particulary well-preserved corpse`
    },
    cactus: {
        name: `a cactus`,
        inspectDescription: `Small cactus (small (cactus)).`,
        lookDescription: `a small potted cactus on the windowsill`
    },
    knife: {
        name: `a knife`,
        inspectDescription: `A butcher's knife.`,
        lookDescription: `a knife on the table`
    },
    meat: {
        name: `meat`,
        inspectDescription: `"MEAT".`,
        lookDescription: `some dubious looking meat`
    },
    coin: {
        name: `a coin`,
        inspectDescription: `One metric dubloon.`,
        lookDescription: `a small blue coin on the table`,
        pickUpNeeded: true,
    },
    "tray of food": {
        name: `a tray of food`,
        inspectDescription: `A tray of prison food. It doesn't look appetising... apart from the potatoes.`,
        lookDescription: `a tray of food next to the bars (untouched... except for the potatoes)`,
    },
    leeches: {
        name: `a jar of leeches`,
        inspectDescription: `A jar of leeches supposedly helps with deep vein thrombosis.`,
        lookDescription: `a jar of leeches among the medicine`,
        isNailedDown: true
    },
    cheese: {
        name: `cheese`,
        inspectDescription: `Particularly hard cheese.`,
        lookDescription: `a cheese wheel on the counter`,
        isNailedDown: true
    },
    "cell key": {
        name: `a cell key`,
        inspectDescription: `Found in the cell. Smells faintly of potatoes.`,
        lookDescription: undefined
    },
    "metal detector": {
        name: `a "metal detector"`,
        inspectDescription: `A stick with a magnet on the end.`,
        lookDescription: `a metal detector lying against the wall`
    },
    "wooden stake": {
        name: `a wooden stake`,
        inspectDescription: `A pointy, medium rare, wooden stake.`,
        lookDescription: `a wooden stake in the lockbox`
    },
    binoculars: {
        name: `binoculars`,
        inspectDescription: `The old-fashionedness of these binoculars is up to the player's interpretation. There is a coin slot on the side.`,
        lookDescription: `an old-fashioned pair of binoculars attached to the railing`,
        isNailedDown: true
    },
    lockbox: {
        name: `a lockbox`,
        inspectDescription: `A rusty lockbox.`,
        lookDescription: `a rusty lockbox among the corn`,
        isNailedDown: true
    },
    "iron bars": {
        name: `iron bars`,
        inspectDescription: `8.627 iron bars.`,
        lookDescription: undefined
    },
    tea: {
        name: `seven kilos of tea`,
        inspectDescription: `To satiate the british.`,
        lookDescription: `sixteen crates of tea`,
        isNailedDown: true
    },
    sign: {
        name: `a sign`,
        inspectDescription: `A sign, which reads: "Sorry, we are out of raw materials. If you have any to spare, I will buy them for a very fair rate."`,
        lookDescription: `a sign atop the counter`,
        isNailedDown: true
    },
    "sledgehammer": {
        name: `a sledgehammer`,
        inspectDescription: `A very mediocre sledgehammer.`,
        lookDescription: `an old sledgehammer leaning against the wall`
    },
    safe: {
        name: `a safe`,
        inspectDescription: `The safe looks like it has been in that wall for a very long time.`,
        lookDescription: `a dusty safe in the hole in the wall`,
        isNailedDown: true
    },
    grog: {
        name: `grog`,
        inspectDescription: `You look into the mug, and wonder what it's made of. A very fast voice promptly says: "ingredients may include: kerosene, propylene glycol, sulphuric acid, artifical sweeteners, red dye no. 2, rum, acetone, battery acid, scumm, axle grease, and/or pepperoni."`,
        lookDescription: `a particulary reinforced barrel marked 'grog' behind the counter (it is leaking)`,
        isNailedDown: true
    },
    "safe key": {
        name: `a safe key`,
        inspectDescription: `An iron key wearing a bullet proof vest.`,
        lookDescription: `key in cheese`,
    },
    "miniature shipwreck": {
        name: `a miniature shipwreck`,
        inspectDescription: `A miniature shipwreck, in multiple pieces held together by an unseen force. There is a marking of the apothecary's logo on one of the pieces. The name plate reads: "HMS tax expense".`,
        lookDescription: `a miniature shipwreck in the safe`
    },
    "gaol key": {
        name: `a gaol key`,
        inspectDescription: `Not found in cell; opens cell. No particular aroma.`,
        lookDescription: `a key on a pedestal in the centre of the room`,
        isNailedDown: true,
        nailedText: `You go to take the key, but the apothecary stops you and says: "I said no touching!" They seeth comprehensibly, before returning to their patrol.`
    },
    "glass bottle": {
        name: `a glass bottle`,
        inspectDescription: `An extraordinarily fragile glass bottle.`,
        lookDescription: `an out-of-place glass bottle on the floor`,
        pickUpNeeded: true,
    },
    "blood thinners": {
        name: `blood thinners`,
        inspectDescription: `An extremly rusty, stained can. It is labelled 'paint thinners', but the word 'paint' has been crossed out with a Sharpie, and 'blood' has been written above it.`,
        lookDescription: `a can of blood thinners on the shelf`
    },
    sack: {
        name: `a sack`,
        inspectDescription: `An unusually heavy sack; you dont know what is inside of it.`,
        lookDescription: `a large sack in the corner of the cell`,
        isNailedDown: true,
        nailedText: `You try to reach through the bars, but you are not long enough.`
    },
    "fuckload of money": {
        name: `a fuckload of money`,
        inspectDescription: `A ludicrous amount of various currencies.`,
        lookDescription: `money`
    }
};

var hallucinatableItems = [
    'a seven-foot-tall plastic flamingo',
    `a Gromit mug`,
    `a pile of teeth`,
    `Blorganhorgan`,
    `a cubic meter of gold`,
    `T-Posing Jim (half clipped into the floor)`,
    `the holy hand grenade`,
    `CHEESE`,
    `a nailed-down nail`,
    `a non-nailed-down railroad spike`,
    `lithium`,
    `real bedrock (not clickbait)`,
    `the one piece`,
    `a lemon`,
    `a money laundering cat`,
    `a sad clown`,
    `a pigeon (you suspect it's not real)`,
    `a pigeon (you suspect it's real)`,
    `a pigeon (it may be real)`,
    `a black chihuahua`,
];

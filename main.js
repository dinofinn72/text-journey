var insanityThresholds = [20, 50];

var playLocation = places.apothecary;
var inventory = [items.lithium, items.cactus, items.meat, items.leeches, items["sledge hammer"], items.shovel, items["metal detector"], items["cell key"], items.tea, items["miniature shipwreck"], items["fuckload of money"]];
var insanity = 0;

var app = new ConsoleApp({
    onCommand: function (text) {
        if (text === `look`) {
            var place = playLocation;
            if (hallucinate(1)) {
                place = chooseRandom(hallucinatablePlaces);
            }
            app.println(place.description);
            var descriptions = place.npcs
                .concat(place.items)
                .map(obj => obj.lookDescription)
                .filter(description => description !== undefined);

            if (hallucinate(0)) {
                descriptions.push(chooseRandom(hallucinatableItems));
            }
            if (descriptions.length > 0) {
                app.print(`There is `);
                printList(descriptions);
            }
        } else if (text === `inventory`) {
            if (inventory.length === 0) {
                app.println(`You have NOTHING!`);
            } else {
                var names = inventory.map(item => item.name);
                app.print(`You have `);
                printList(names);
            }
        } else if (text.startsWith(`inspect `)) {
            var name = text.substring(8);
            var item = items[name];
            var npc = npcs[name];
            if (hasItem(item)) {
                app.println(item.inspectDescription);
            } else if (playLocation.npcs.includes(npc)) {
                app.println(npc.inspectDescription);
            } else {
                app.println(`There is no ${name} here.`);
            }

        } else if (text.startsWith(`walk `)) {
            var direction = text.substring(5);
            var placeName = playLocation.connections[direction];

            if (placeName !== undefined) {
                playLocation = places[placeName];
                app.println(playLocation.arriveMessage);
                insanity++;
                if (!hallucinatablePlaces.includes(playLocation)) {
                    hallucinatablePlaces.push(playLocation);
                }
            } else {
                app.println(`My feet hurt.`);
            }
        } else if (text.startsWith(`take `)) {
            var name = text.substring(5);
            var item = items[name];
            if (!playLocation.items.includes(item)) {
                app.println(`There is no ${name} to take.`);
            } else if (item.isNailedDown) {
                app.println(item.nailedText || `You cant get that!`);
            } else {
                removeFromArray(playLocation.items, item);
                inventory.push(item);
                app.println(`You obtained ` + name);
            }
        } else if (text.startsWith(`talk to `)) {
            var npcName = text.substring(8);
            var npc = npcs[npcName];
            if (!playLocation.npcs.includes(npc)) {
                app.println(`There is no ${npcName} to talk to.`);
            } else if (npc.sayAlways !== undefined) {
                app.println(npc.sayAlways);
            } else if (npc.sayOnce !== undefined) {
                app.println(npc.sayOnce);
                npc.sayOnce = undefined;
            } else {
                var say = chooseRandom(npc.smallTalk);
                app.println(say);
            }
        } else {
            var action = actions[text];
            if (action === undefined) {
                app.println(`I DONT UNDERSTAND.`);
            } else if (!action.allowMultiple && action.beenDone) {
                app.println(action.ifAlreadyDone);
            } else if (action.items !== undefined && !action.items.every(item => hasItem(item))) {
                action.ifNoItem();
            } else if (action.place !== undefined && playLocation !== action.place) {
                app.println(action.ifWrongPlace);
            } else if (action.npc !== undefined && !playLocation.npcs.includes(action.npc)) {
                app.println(action.ifNoNpc);
            } else {
                action.ifSuccess();
                action.beenDone = true;
            }
        }
    }
});
//conshusnustou
app.println(`"You! You're finally awake, you were trying to cross the corn field."`);
app.println("As you fully regain consciousness you realise that the person talking to you was corn and you feel mildly ashamed.");
app.println(`"You should find some blood thinner soon", you think to yourself.`);
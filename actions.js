var actions = {
    "use lithium": {
        items: [
            items.lithium
        ],
        ifNoItem() {
            app.println(`It is mounting.`);
        },
        allowMultiple: true,
        ifSuccess() {
            insanity = 0;
            removeFromArray(inventory, items.lithium);
            app.println(`You consume the lithium in one bite. You feel less mad.`);
        }
    },
    dig: {
        items: [
            items.shovel,
        ],
        place: places.cornField,
        ifNoItem() {
            app.println(`You dont have a shovel.`);
        },
        ifWrongPlace: `You can't dig here.`,
        ifAlreadyDone: `You don't find anything.`,
        ifSuccess() {
            playLocation.items.push(items.corpse);
            app.println(`You dig in the corn field and find a corpse.`);
        }
    },
    "throw corpse": {
        items: [
            items.corpse,
        ],
        place: places.farmHouseOutside,
        ifNoItem() {
            app.println("???");
        },
        ifWrongPlace: `You can't use corpse here.`,
        ifAlreadyDone: `You already did that.`,
        ifSuccess() {
            app.println(`You throw the corpse at the door.`);
            app.println(`You hear many latches unlatching, and the door creaks open.`);
            app.println(`And the farmer says: "alright I guess you can come in then."`);
            places.farmHouseOutside.connections["inside"] = "farmHouseInside";
            places.farmHouseOutside.isDoorOpen = true;
        }
    },
    "give cactus": {
        items: [
            items.cactus,
        ],
        npc: npcs.guard,
        ifNoItem() {
            if (playLocation === places.cityGate) {
                app.println(`You try to give the guard a cactus. The guard is unimpressed with your lack of cacti.`);
            } else {
                app.println(`You no cactus.`);
            }
        },
        ifNoNpc: `You place the cactus on the floor, wait ten secends, then pick it up.\n`
            + `The cactus having been on the floor fills you with determination.`,
        ifAlreadyDone: `They are gone.`,
        ifSuccess() {
            app.println(`You offer the small cactus to the guard. The guard takes the cactus and says: "finally I have all thirteen cacti. Now I can challenge the cactus lord."`);
            app.println(`The guard promptly runs away, and the gate follows.`);
            removeFromArray(inventory, items.cactus);
            places.cityGate.description = `The gate is gone.`;
            places.cityGate.connections["inside"] = "citySquare";
            removeFromArray(places.cityGate.npcs, npcs.guard);
            places.cornFieldCentre.npcs.push(npcs.guard);
            places.cornFieldCentre.items.push(items["city gate"]);
            npcs.guard.sayAlways = `You try to talk to the guard but their rapturous concentration on fighting the Cactus Lord does not waver.`;
            places.cornFieldCentre = `You are in a large clearing in the centre of the corn field. The guard is having an epic battle with the Cactus Lord; it appears they are evenly matched.`;
        }
    },
    "buy leeches": {
        items: [
            items.coin,
        ],
        place: places.apothecary,
        ifNoItem() {
            if (playLocation === places.apothecary) {
                app.println(`You ask how much it is for the leeches. The cashier says: "one metric dubloon please." You promptly remember that you don't have any money.`);
            } else {
                app.println("You are neither in a store, nor have any money.");
            }
        },
        ifWrongPlace: `You hold up your coin and ask for a jar of leeches. The air says: "no."`,
        ifAlreadyDone: `The apothecary says: "sorry, I'm out of stock."`,
        ifSuccess() {
            app.println(`You ask how much it is for the leeches. The cashier says "one metric dubloon please." You hand over your money and take the leeches.`);
            removeFromArray(inventory, items.coin);
            removeFromArray(places.apothecary.items, items.leeches);
            inventory.push(items.leeches);
        }
    },
    "use leeches": {
        items: [
            items.leeches,
        ],
        place: undefined,
        ifNoItem() {
            app.println(`Why would you do that?`);
        },
        ifSuccess() {
            app.println(`As you try to unscrew the lid of the jar you spontaneously combust.`);
            app.println(`A voice from the heathens says: "I guess the blood thinners watched duck tales. So sad."`);
            app.println(`YOU DIED`, `color: red;`);
            app.disable();
        }
    },
    "suffer not the heretic to live": {
        items: undefined,
        place: places.citySquare,
        ifWrongPlace: `What heretic?`,
        allowMultiple: true,
        ifSuccess() {
            app.println(`The Emperor protects!`);
        }
    },
    "knock on door": {
        items: undefined,
        place: places.farmHouseOutside,
        ifWrongPlace: `You tell a knock knock joke to the air.`,
        allowMultiple: true,
        ifSuccess() {
            if (places.farmHouseOutside.isDoorOpen) {
                app.println(`You knock on the open door. The farmer gives you a look.`);
            } else if (this.beenDone) {
                app.println(`You knock on the door. There is no response.`);
            } else {
                app.println(`The farmer says: "I won't let you in! Not over my dead body!"`);
                if (places.farmHouseOutside.items.includes(items.shovel)) {
                    app.println(`Upon further inspection, you notice a shovel.`);
                    items.shovel.lookDescription = `a visible shovel`;
                }
            }
        }
    },
    "buy cheese": {
        items: [
            items.meat,
        ],
        place: places.shop,
        ifNoItem() {
            if (playLocation === places.shop) {
                app.println(`"You want this cheese here kid, I'll trade ya for it," says the cashier. "One piece of meat will do."`);
                app.println(`You dont have any meat so you walk away.`);
            } else {
                app.println(`Even if there was cheese here, you have nothing to trade for it.`);
            }
        },
        ifWrongPlace: `There's no cheese here.`,
        ifAlreadyDone: `The shopkeeper says: "sorry kid, that was my last cheese wheel."`,
        ifSuccess() {
            app.println(`"You want this cheese here kid, I'll trade ya for it," says the cashier. "One piece of meat will do."`);
            app.println(`You hand over your piece of meat. "Pleasure doing business." You take the wheel of cheese... but it was the hard cheese.`);
            removeFromArray(inventory, items.meat);
            removeFromArray(places.shop.items, items.cheese);
            inventory.push(items.cheese);
        }
    },
    "use binoculars": {
        items: [
            items.binoculars,
            items.coin,
        ],
        place: places.farmHouseRoof,
        allowMultiple: true,
        ifWrongPlace: `There are no binoculars here - never have been.`,
        ifNoItem() {
            app.println(`The lens caps open and a message appears: "you are too poor."`);
        },
        ifSuccess() {
            app.println(`You insert the dubloon into the machine. The gears whirr and the lens caps open; you look through them and see a city in the distance.`);
            removeFromArray(inventory, items.coin);
        }
    },
    "eat potatoes": {
        items: [
            items["tray of food"],
        ],
        place: undefined,
        ifNoItem() {
            app.println(`Your hankering for potatoes is left unanswered.`);
        },
        ifAlreadyDone: `Your hankering for potatoes is unmatched but unanswered.`,
        ifSuccess() {
            app.println(`You sit down and start to eat the prison potatoes. Midway through, you find a key in the potatoes, then you continue to eat. 6/10, above average.`);
            inventory.push(items["cell key"]);
            items["tray of food"].inspectDescription = `A tray of prison food. It doesn't look appetising, and it has a distinct lack of potatoes.`;
            items["tray of food"].lookDescription = `a tray of food (it is touched)`;
        },
    },
    "use metal detector": {
        items: [
            items["metal detector"],
        ],
        place: places.cornField,
        ifWrongPlace: `You move your metal detector around, but you dont find anything.`,
        ifNoItem() {
            if (playLocation === places.cornField) {
                app.println(`You grab a random stick and move it around, but you dont find anything.`);
            } else {
                app.println(`You want to use a metal detector, but you dont have one.`);
            }
        },
        ifAlreadyDone: `There is nothing more to find.`,
        ifSuccess() {
            app.println(`You move your metal detector around and it latches on to the ground. You pull it up and it brings a rusty lockbox with it.`);
            places.cornField.items.push(items.lockbox);
        }
    },
    "use cell key": {
        items: [
            items["cell key"],
            items.lockbox
        ],
        ifNoItem() {
            if (hasItem(items.lockbox)) {
                app.println(`You try to open the box, but it's locked.`);
            } else if (playLocation === places.gaol && hasItem(items["cell key"])) {
                app.println(`You try to insert the key in to the lock, but it does not fit.`);
                items["cell key"].inspectDescription = `Found in the cell. Does not open cell. Smells faintly of potatoes.`;
            } else if (hasItem(items["cell key"])) {
                app.println(`You insert the cell key into a non-existent lock.`);
            } else {
                app.println(`You have no key and there is nothing to unlock.`);
            }
        },
        ifAlreadyDone: `The box is already open.`,
        ifSuccess() {
            app.println(`You insert the key into the lock on the box. It swings open, revealing a wooden stake.`);
            removeFromArray(inventory, items["cell key"]);
            places.cornField.items.push(items["wooden stake"]);
            items.lockbox.inspectDescription = `An open, rusty lockbox.`;
        }
    },
    "buy tea": {
        place: places.shop,
        items: [
            items["wooden stake"],
            items.tea
        ],
        ifNoItem() {
            if (playLocation === places.shop) {
                app.println(`The shopkeeper says: "I don't accept air kid."`);
            } else {
                app.println(this.ifWrongPlace);
            }
        },
        ifWrongPlace: `You would love a cuppa but sadly there is no tea.`,
        ifAlreadyDone: `The shopkeeper says: "I ain't got no more tea."`,
        ifSuccess() {
            app.println(`You hand over the wooden stake. The shopkeeper reaches out to take it, then he says: "thanks for the stake kid, here's the tea you wanted. Don't drink it all in one place now."`);
            removeFromArray(places.shop.items, items.tea);
            removeFromArray(inventory, items["wooden stake"]);
            inventory.push(items.tea);
        }
    },
    "give tea": {
        place: places.tavern,
        items: [
            items.tea
        ],
        ifNoItem() {
            if (playLocation === places.tavern) {
                app.println(`You would like to help with the barman's tea problem, but you lack the resources.`);
            } else {
                app.println(`You feel as if the air would like a cuppa, but you are not in a position to facilitate.`);
            }
        },
        ifWrongPlace: `You feel as if the air would like a cup of tea, so you pour it one.`,
        ifAlreadyDone: `The barman does not need more tea.`,
        ifSuccess() {
            app.println("You muscle your way through the crowd and silently hand the barman the crates of tea. He quickly makes the ravenous crowd their tea, so the bar returns to its normal state. Afterwards, he thanks you profusely and gives you 8.627 iron bars as repayment.");
            inventory.push(items["iron bars"]);
            npcs.barman.sayAlways = undefined;
            places.tavern.isBusy = false;
            places.tavern.description = `You are in the tavern. There are a couple of regulars sitting at the bar, and remnants of the mob drinking tea now.`;
            removeFromArray(inventory, items.tea);
        }
    },
    "give iron": {
        places: places.smithy,
        items: [
            items["iron bars"]
        ],
        ifNoItem() {
            if (playLocation === places.smithy) {
                app.println(`You wish you could help with the smith's material problem, but you lack any meaningful may to help.`);
            } else {
                app.println(`The air does not need iron, and you lack any to give it.`);
            }
        },
        ifWrongPlace: `The air does not need iron.`,
        ifAlreadyDone: this.ifNoItem,
        ifSuccess() {
            app.println(`You get the attention of the smith, and tell her you have some iron to trade. She walks up to the counter and says: "sorry, I'm running low on cash, but I will gladly trade you for it." You look around the shop and see a sledgehammer in the corner. You walk up to it and bring it back to the counter. She says: "so you want the old sledge? A very mediocre choice. Anyway thanks for the iron."`);
            removeFromArray(inventory, items["iron bars"]);
            inventory.push(items["sledgehammer"]);
        },

    },
    "use sledgehammer": {
        place: places.alley,
        items: [
            items["sledgehammer"]
        ],
        ifNoItem() {
            if (playLocation === places.alley) {
                app.println(`You look at the wall and think: "I really want to break that wall."`);
            } else {
                app.println(`Your urge for property damage is strong.`);
            }
        },
        ifWrongPlace: `You probably shouldn't go around breaking walls.`,
        ifAlreadyDone: `The safe is too powerful.`,
        ifSuccess() {
            app.println(`You strike the wall with the sledgehammer, and hear the sound of bone cracking and tendons splitting as the stone wall crumbles to dust, revealing a safe.`);
            places.alley.items.push(items.safe);
            places.alley.description = `You are in the alley. The sides of buildings loom overhead, and there is a dead end in front of you. The left wall is caved in.`;
        }
    },
    "buy grog": {
        place: places.tavern,
        allowMultiple: true,
        ifWrongPlace: `"Sorry but I don't sell grog" says the sky.`,
        ifAlreadyDone: `The barman says: "sorry but after you bought that pint, it ate through the barrel."`,
        ifSuccess() {
            if (!places.tavern.isBarrelFull) {
                app.println(this.ifAlreadyDone);
            } else if (places.tavern.isBusy) {
                app.println(`The bar is too busy to buy anything.`);
            } else {
                inventory.push(items.grog);
                app.println(`You go up to the bar and order pint of grog. The barman says: "sure thing bud. For you it's on the house, for saving me from those ruffians."`);
                places.tavern.isBarrelFull = false;
            }
        }
    },
    "use grog": {
        items: [
            items.grog,
            items.cheese
        ],
        ifNoItem() {
            if (inventory.includes(items.grog)) {
                app.println(`You go to drink the grog, but think better of it when you see it.`);
            } else if (inventory.includes(items.cheese)) {
                app.println(`You want to eat the cheese, but it is the hard cheese.`);
            } else {
                app.println(`None of your plans for dinner panned out.`);
            }
        },
        ifAlreadyDone: `The cheese is gone.`,
        ifSuccess() {
            removeFromArray(inventory, items.grog);
            removeFromArray(inventory, items.cheese);
            inventory.push(items["safe key"]);
            app.println(`You pour the grog on the cheese. The cheese is eviscerated, and inside is a key.`);
        }
    },
    "use safe key": {
        items: [
            items["safe key"],
            items.safe
        ],
        ifWrongPlace: `You dont know why but that wall really looks like it needs unlocking.`,
        ifNoItem() {
            if (playLocation.items.includes(items.safe)) {
                app.println(`You try really hard to manifest a key for the safe, but no matter how hard you think about it, one does not appear.`);
            } else {
                app.println(`If you really want to unlock a safe that does not exist with a key that does not exist, then fine. A spectral safe and key appear in front of you. You unlock the safe, it proceeds to disappear, and you have gained nothing.`);
            }
        },
        ifAlreadyDone: `You already did that, you pillock.`,
        ifSuccess() {
            removeFromArray(inventory);
            items.safe.inspectDescription = `An open safe. It looks like it has been in that wall for a very long time.`;
            places.alley.items.push(items["miniature shipwreck"]);
            app.println(`You insert the key into the keyhole, and the door creaks open.`);
        }
    },
    "give miniature shipwreck": {
        items: [
            items["miniature shipwreck"]
        ],
        npc: npcs.apothecary,
        ifNoNpc: `A tiny pirate appears above the shipwreck, and drops a barrel on it before disappearing.`,
        ifNoItem() {
            if (playLocation === places.apothecary) {
                app.println(`The apothecary says: "how did you know I collect miniature shipwrecks? Also, you don't even have any."`);
            } else {
                app.println(`Rowboat gaming.`);
            }
        },                      //gegex
        ifAlreadyDone: `No ship, no shirt, no service.`,
        ifSuccess() {
            places.apothecary.connections["upstairs"] = "apothecaryUpstairs";
            removeFromArray(places.apothecary.npcs, npcs.apothecary);
            places.apothecaryUpstairs.npcs.push(npcs.apothecary);
            npcs.apothecary.sayAlways = `"Thanks for returning my shipwreck. Feel free to look around my collection but don't touch anything."`;
            app.println(`The apothecary says: "thanks for finding my shipwreck! I am going to put with the others. Feel free to come up and admire my collection."`);
            npcs.apothecary.lookDescription = `a shady apothecary wearing a plague mask walking back and forth`;
            removeFromArray(inventory, items["miniature shipwreck"]);
        }
    },
    "throw glass bottle": {
        items: [
            items["glass bottle"]
        ],
        place: places.apothecaryUpstairs,
        npc: npcs.apothecary,
        ifNoItem() {
            if (playLocation === places.apothecaryUpstairs) {
                app.println(`How?`);
            } else {
                app.println(`Give up.`);
            };
        },
        ifNoNpc: `Again how?`,
        ifWrongPlace: `I don't think you should.`,
        ifAlreadyDone: `It is done.`,
        ifSuccess() {
            places.apothecaryUpstairs.isPushable = true;
            removeFromArray(inventory, items["glass bottle"]);
            app.println(`You throw the bottle down the stairs. The apothecary walks to stand at the top of the stairs, dumbfounded.`);
        }
    },
    "push down stairs": {
        place: places.apothecaryUpstairs,
        npc: npcs.apothecary,
        ifWrongPlace: `The stairs are too far away.`,
        ifNoNpc: `He is downstairs.`,
        allowMultiple: true,
        ifSuccess() {
            if (places.apothecaryUpstairs.isPushable) {
                removeFromArray(places.apothecaryUpstairs.npcs, npcs.apothecary);
                places.apothecary.npcs.push(npcs.apothecary);
                items["gaol key"].isNailedDown = false;
                app.println(`You push the apothecary down the stairs. He looks like a starfish while falling, and hits his head hard on the floor. After several seconds of nerve-wracking silence, he stands up, and goes back to manning the counter without a word.`);
                npcs.apothecary.sayAlways = undefined;
                npcs.apothecary.lookDescription = `a shady apothecary wearing a plague mask behind the counter`;
            } else {
                app.println(`You try too push the apothecary down the stairs, but they are currently nowhere near the stairs; so you just end up pushing them into the wall.`);
            }

        }
    },
    "use gaol key": {
        place: places.gaol,
        items: [
            items["gaol key"]
        ],
        ifWrongPlace: `It doesn't budge.`,
        ifNoItem() {
            if (playLocation === places.gaol) {
                app.println(`Which key is that again?`);
            } else {
                app.println(`It wouldn't budge even if you had a key.`);
            }
        },
        ifSuccess() {
            removeFromArray(inventory, items["gaol key"]);
            items.sack.isNailedDown = false;
            places.gaol.description = `You are in a small wooden building with an open, stone gaol cell. The cell contains a lone table with a candlestick still smoking on its top. The floor is covered in a thin layer of straw.`;
            app.println(`You insert the key into the lock, and it turns, followed by a click as the door swings open.`);
        }
    },
    "open sack": {
        items: [
            items.sack
        ],
        ifNoItem() {
            app.println(`What sack?`);
        },
        ifAlreadyDone: `The sack is but a husk.`,
        ifSuccess() {
            removeFromArray(inventory, items.sack);
            inventory.push(items["fuckload of money"]);
            app.println(`You pry open the sack to find too many various currencies to count.`);
        }
    },
    "buy blood thinners": {
        items: [
            items["fuckload of money"]
        ],
        place: places.apothecary,
        npc: npcs.apothecary,
        ifNoItem() {
            if (playLocation === places.apothecary && playLocation.npcs.includes(npcs.apothecary)) {
                app.println(`The apothecary says: "sorry bud but those are a rare commodity in these parts, and you don't look like you got the cash."`);
            } else {
                app.println(`A spectral kiosk apears in front of you and shouts "you're poor", before exploding.`);
            }
        },
        ifAlreadyDone: `It is done - leave.`,
        ifSuccess() {
            removeFromArray(inventory, items["fuckload of money"]);
            inventory.push(items["blood thinners"]);
            removeFromArray(places.apothecary.items, items["blood thinners"]);
            app.println(`You go up to the apothecary, and slap down the blood thinners and money with a smug. The apothecary looks at the money and at you, and decides in that moment that the amount of money you have offered is indeed the exact amount the blood thinners cost. They swiftly take the money, and hand over the blood thinners triumphantly.`);
        }
    },
    "use blood thinners": {
        items: [
            items["blood thinners"]
        ],
        ifNoItem() {
            app.println(`Not yet, play the game first.`);
        },
        ifAlreadyDone: `How did you find this?`,
        ifSuccess() {
            app.disable();
            app.println(`You open the can and find a gritty liquid inside. You look at it for a moment before deciding it's probably fine, and downing the entire thing. Your blood promptly becomes so thin that it leaks out of your pores. You transcend into an eldritch god of blood, and seep into the floor.`);
            app.println(`YOU WIN!`);
        }
    },
    "kill cactus lord": {
        items: [
            items.knife
        ],
        npc: npcs["cactus lord"],
        ifNoNpc: `Your murderous tendencies are getting out of hand.`,
        ifNoItem() {
            if (playLocation.npcs.includes(npcs["cactus lord"])) {
                app.println(`You wish you could join the battle, but you have not the means.`);
            } else {
                app.println(`Who?`);
            }
        },
        ifAlreadyDone: `That's overkill.`,
        ifSuccess() {
            removeFromArray(playLocation.npcs, npcs["cactus lord"]);
            app.println(`You stab the Cactus Lord. He turns to face you, and laughs at your meagre attempt at his life; he moves to crush you, but while his back is turned the guard shouts: "never turn your knees on an opponent!" They rush in and defenestrate the Cactus Lord with extreme prejudice.`);
            app.println(`As the Cactus Lord falls, the guard turns and says: "that was some quick thinking there, pal! I am going to need people like you if I'm going to rebuild the cactus court... so will you join me as an adviser?" You agree, and walk into the ground.`);
            app.println(`GREAT ENEMY FELLED`, `color: yellow;`);
            app.disable();
        }
    }
};

actions["use shovel"] = actions.dig;
actions["use corpse"] = actions["throw corpse"];
actions["use cactus"] = actions["give cactus"];
actions["open lockbox"] = actions["use cell key"];
actions["break wall"] = actions["use sledgehammer"];

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
            app.println(`You consume the lithium in one bite.`);
        }
    },
    dig: {
        items: [
            items.shovel,
        ],
        place: places.cornField,
        ifNoItem() {
            app.println(`You dont have shovel.`);
        },
        ifWrongPlace: `You cant dig here.`,
        ifAlreadyDone: `You dont find anything.`,
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
        ifWrongPlace: `You cant use corpse here.`,
        ifAlreadyDone: `You already did that.`,
        ifSuccess() {
            app.println(`You throw the corpse at the door.`);
            app.println(`You hear many latches unlatching and the door creaks open.`);
            app.println(`And the farmer says: "alright i guess you can come in then."`);
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
        ifNoNpc: `You place the cactus on the floor, wait ten secends, then pick it up\n`
            + `the cactus having been on the floor fills you with determination.`,
        ifAlreadyDone: `he is gone.`,
        ifSuccess() {
            app.println(`You offer the small cactus to the guard. The guard takes the cactus and says: "finally i have all thirteen cacti now i can challenge the cactus lord."`);
            app.println(`The guard promptly runs away and the gate follows.`);
            removeFromArray(inventory, items.cactus);
            places.cityGate.description = `The gate is gone.`;
            places.cityGate.connections["inside"] = "citySquare";
            removeFromArray(places.cityGate.npcs, npcs.guard);
            places.cornFieldCentre.npcs.push(npcs.guard);
            places.cornFieldCentre.items.push(items["city gate"]);
            npcs.guard.sayAlways = `You try to talk to the guard but their rapturous concentration on fighting the Cactus Lord does not waver.`;
            places.cornFieldCentre = `You are in a large clearing in the centre corn field. the gard is having an epic battel with the cactus lord it appears they are evenly matched.`;
        }
    },
    "buy leeches": {
        items: [
            items.coin,
        ],
        place: places.apothecary,
        ifNoItem() {
            if (playLocation === places.apothecary) {
                app.println(`you ask how much it is for the leeches the cashier says "one metric dubloon pelase" you promptly remember that you dont have any money`);
            } else {
                app.println("you are both not in a store and have no money");
            }
        },
        ifWrongPlace: `you hold up your coin and ask for a jar of leeches. the air says "no"`,
        ifAlreadyDone: `"sorry i'm out of stock"`,
        ifSuccess() {
            app.println(`you ask how much it is for the leeches. the cashier says "one metric dubloon pelase" you hand over your money and take the leeches`);
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
            app.println(`why would you do that?`);
        },
        ifSuccess() {
            app.println(`as you try to unscrew the lid of the jar you spontaneously combust`);
            app.println(`a voice from the hethens says "i gess the blood thiners wathed duck tales so sad"`);
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
        ifWrongPlace: `you tell a knock knock joke to the air`,
        allowMultiple: true,
        ifSuccess() {
            if (places.farmHouseOutside.isDoorOpen) {
                app.println(`You knock on the open door. The farmer gives you a look.`);
            } else if (this.beenDone) {
                app.println(`you knock on the door, there is no response.`);
            } else {
                app.println(`"I wont let you in not over my dead body." Said the farmer.`);
                if (places.farmHouseOutside.items.includes(items.shovel)) {
                    app.println(`Upon further inspection you notice a shovel.`);
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
                app.println(`"You want this cheese here kid, i'll trade ya for it." Says the cashier. "One piece of meat will do." You dont have any meat so you walk away.`);
            } else {
                app.println(`even if there was cheese here, you have nothing to trade for it.`);
            }
        },
        ifWrongPlace: `there's no cheese here.`,
        ifAlreadyDone: `"sorry kid that was my last cheese wheel."`,
        ifSuccess() {
            app.println(`"You want this cheese here kid, i'll trade ya for it." Says the cashier. "one piece of meat will do." you hand over your piece of meat. "Pleasure doing business." you take the wheel of cheese... but it was the hard cheese.`);
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
        ifWrongPlace: `There are no binoculars here, never have been.`,
        ifNoItem() {
            app.println(`A message appears on the lenses: "you are too poor."`);
        },
        ifSuccess() {
            app.println(`You insert the dubloon into the machine, the gears whirr and the lens caps open, you look through them and see a city in the distance.`);
            removeFromArray(inventory, items.coin);
        }
    },
    "eat potatoes": {
        items: [
            items["tray of food"],
        ],
        place: undefined,
        ifNoItem() {
            app.println(`Your hankering for potatoes is left unanswered`);
        },
        ifAlreadyDone: `Your hankering for potatoes is unmatched but unanswered`,
        ifSuccess() {
            app.println(`You sit down and start to eat the prison potatoes, mid way through you find a key in the potatoes then you continue to eat, 6/10 abuve avrege`);
            inventory.push(items["cell key"]);
            items["tray of food"].inspectDescription = `A tray of prison food, it doesn't look appetising and it has a distinct lack of potatoes.`;
            items["tray of food"].lookDescription = `a tray of food, it is touched`;
        },
    },
    "use metal detector": {
        items: [
            items["metal detector"],
        ],
        place: places.cornField,
        ifWrongPlace: `You move your metal detector around, you dont find anything.`,
        ifNoItem() {
            if (playLocation === places.cornField) {
                app.println(`You grab a random stick and move it around, you dont find anything.`);
            } else {
                app.println(`You want to use a metal detector, but you dont have one.`);
            }
        },
        ifAlreadyDone: `there is nothing more to find.`,
        ifSuccess() {
            app.println(`You move your metal detector around and it latches on to the ground, you pull it up and it brings a rusty lockbox with it.`);
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
                app.println(`You try to open the box but it's locked.`);
            } else if (playLocation === places.gaol && hasItem(items["cell key"])) {
                app.println(`you try to insert the key in to the lock but it does not fit.`);
                items["cell key"].inspectDescription = `Found in the cell. Does not open cell. Smells faintly of potatoes.`;
            } else if (hasItem(items["cell key"])) {
                app.println(`You insert the cell key into a non-existent lock.`);
            } else {
                app.println(`You have no key and there is nothing to unlock.`);
            }
        },
        ifAlreadyDone: `the box is already open.`,
        ifSuccess() {
            app.println(`You insert the key into the lock on the box and it swings open revealing a wooden stake.`);
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
                app.println(`"I don't accept air kid."`);
            } else {
                app.println(this.ifWrongPlace);
            }
        },
        ifWrongPlace: `You would love a cuppa but sadly there is no tea.`,
        ifAlreadyDone: `"I ain't got no more tea."`,
        ifSuccess() {
            app.println(`You hand over the wooden stake and the shopkeeper reaches out to take it, then he says: "thanks for the stake kid, here's the tea you wanted. Don't drink it all in one place now.”`);
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
                app.println(`you would like to help with the barman's tea problem but you lack the resourczes `);
            } else {
                app.println(`you feel as if the air would like a cup of tea but you are not in a position to facilitate`);
            }
        },
        ifWrongPlace: `you feel as if the air would like a cup of tea so you pour it one`,
        ifAlreadyDone: `the barman does not need more teas`,
        ifSuccess() {
            app.println("you muscle your way through the crowd and silently hand the barman the crates of tea. He quickly makes the ravenous crowd their tea so the bar returns to its normal state. Aftarwards he thanks you profusely and gives you 8.627 iron bars as repayment.");
            inventory.push(items["iron bars"]);
            npcs.barman.sayAlways = undefined;
            places.tavern.description = `you are in the tavern. there are a couple regulars sitting at the bar and remanants of the mob drinking tea now "`;
            removeFromArray(inventory, items.tea);
        }
    },
    "give iron": {
        places: places.smithy,
        items: [
            items.tea
        ],
        ifNoItem() {
            if (playLocation === places.smithy) {
                app.println(`You wish you could help with the smiths material problem but but you lack any meaningful may to help`);
            } else {
                app.println(`The air does not need iron and you lack any to give it`);
            }
        },
        ifWrongPlace: `The air does not need iron`,
        ifAlreadyDone: this.ifNoItem,
        ifSuccess() {
            app.println(`You get the attention of the smith and tell her you have some iron to trade she walks up to the conter and says "sorry but i'm running low on cash but i will gladly trade you for it" you look around the shop and see a sledge hammer in the corner you walk up to it and bring it back to the counter "so you want the old sledge a very mediocre choice any way thanks for the iron."`);
            removeFromArray(inventory, items["iron bars"]);
            inventory.push(items["slege hammer"]);
        },

    },
    "use sledge hammer": {
        place: places.alley,
        items: [
            items["sledge hammer"]
        ],
        ifNoItem() {
            if (playLocation === places.alley) {
                app.println(`you look at the wall and think "i realy want to break that wall"`);
            } else {
                app.println(`your urge for property damage is strong`);
            }
        },
        ifWrongPlace: `you probably shouldn't go around breaking walls`,
        ifAlreadyDone: `the safe is too powerful`,
        ifSuccess() {
            app.println(`you strike the wall with the slege hammer and hear the sound of bone cracking and tendens spliting as the stone wall crumbles to dust to reveal a safe`);
            places.alley.items.push(items.safe);
            places.alley.description = `You are in the alley. The sides of buildings loom over head and there is a dead end in front of you. The left wall is caved in.`;
        }
    },
    "buy grog": {
        place: places.tavern,
        allowMultiple: true,
        ifWrongPlace: `"sorry but i dont sell grog" says the sky`,
        ifAlreadyDone: `sorry but affter you bought that pint it ate thru the barrel`,
        ifSuccess() {
            if (places.tavern.isBarrelFull !== true) {
                app.println(this.ifAlreadyDone);
            } else if (npcs.barman.sayAlways !== undefined) {
                app.println(`The bar is too busy to buy anething.`);
            } else {
                inventory.push(items.grog);
                app.println(`you go up to the bar and order pint of grog the barman says "shure thing bud and for you it's on the house for saving me from those ruffians"`);
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
                app.println(`you go to drink the grog but think better of it when you see it`);
            } else if (inventory.includes(items.cheese)) {
                app.println(`you want to eat the cheese but it is the hard cheese`);
            } else {
                app.println(`none of your plans for dinner paned out`);
            }
        },
        ifAlreadyDone: `the cheese is gone`,
        ifSuccess() {
            removeFromArray(inventory, items.grog);
            removeFromArray(inventory, items.cheese);
            inventory.push(items["safe key"]);
            app.println(`you pour the grog on the cheese. The cheese is eviscerated and inside is a key`);
        }
    },
    "use safe key": {
        items: [
            items["safe key"],
            items.safe
        ],
        ifWrongPlace: `You dont know why but that wall really looks like it needs unlocking.`,
        ifNoItem() {
            if (playLocation.includes(items.safe)) {
                app.println(`you try rely hard to manefest a key for the safe but no mater haw hard you think abute it one does not appear.`);
            } else {
                app.println(`if you realy want to unlock a safe that deas not exest with a key that does not exest then fine. a spectrel safe and key apere in frunt of you and you unlock the safe it proseeds to disapear and you have gaend nothing`);
            }
        },
        ifAlreadyDone: `You already did that you pillock.`,
        ifSuccess() {
            removeFromArray(inventory);
            items.safe.inspectDescriptiondescription.push(`An open safe. It looks like it has been in that wall for a very long time.`);
            places.alley.items.push(items["miniature shipwreck"]);
            app.println(`You insert the key into the keyhole and the door creaks open.`);
        }
    },
    "give miniature shipwreck": {
        items: [
            items["miniature shipwreck"]
        ],
        place: places.apothecary,
        ifWrongPlace: `a tiny pirate appears above the shipwreck and drops a barrel on it before disapearing.`,
        ifNoItem() {
            if (playLocation === places.apothecary) {
                app.println(`"how did you know i colect miniature shiprecks also you dont even have any"`);
            } else {
                app.println(`rowboet gaming`);
            }
        },                      //gegex
        ifAlreadyDone: `No ship, no shirt, no service.`,
        ifSuccess() {
            places.apothecary.connections["upstairs"] = "apothecaryUpstairs",
                removeFromArray(places.apothecary.npcs, npcs.apothecary),
                places.apothecaryUpstairs.npcs.push(npcs.apothecary),
                npcs.apothecary.sayAlways = `thanck for reterning my shipwreack. Feel free to look around my collection but dont touch anything`;
            app.println(`"thanks for finding my ship wreke i am going to put with the othors feel free to come up and admire my coletion"`);
            npcs.apothecary.lookDescription = `a shady apothecary wearing a plague mask walking back and fourth`;
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
                app.println(`how?`);
            } else {
                app.println(`give up`);
            };
        },
        ifNoNpc: `agan how?`,
        ifWrongPlace: `i dont think you should`,
        ifAlreadyDone: `is done`,
        ifSuccess() {
            places.apothecaryUpstairs.isPushable = true,
                removeFromArray(inventory, items["glass bottle"]);
            removeFromArray(places.apothecaryUpstairs.items, items["glass bottle"]);
            app.println(`you throw the bottle down the stairs. the apothecary wallks to the top of the stairs and stands there dumdfounded`);
        }
    },
    "push down stairs": {
        place: places.apothecaryUpstairs,
        npc: npcs.apothecary,
        ifWrongPlace: `the stairs are too far away`,
        ifNoNpc: `he is downstairs`,
        allowMultiple: true,
        ifSuccess() {
            if (places.apothecaryUpstairs.isPushable === true) {
                removeFromArray(places.apothecaryUpstairs.npcs, npcs.apothecary);
                places.apothecary.npcs.push(npcs.apothecary);
                items["gaol key"].isNailedDown = false;
                app.println(`you push the apothecary down the stairs, he looks like a star fish while falling and hits his head hard on the floor. after sevral secends of nerve racking silence they stand up and go back to maning the counter without a word`);
                npcs.apothecary.sayAlways = undefined,
                    npcs.apothecary.lookDescription = `a shady apothecary wearing a plague mask behind the counter.`;
            } else {
                app.println(`you try too push the apothecary down the stairs but they are curantly nowhere near the stairs so you just end up pushing them into the wall`);
            }

        }
    },
    "use gaol key": {
        place: places.gaol,
        items: [
            items["gaol key"]
        ],
        ifWrongPlace: `it dosent budge`,
        ifNoItem() {
            if (playLocation === places.gaol) {
                app.println(`wich key is that again`);
            } else {
                app.println(`it wouldn't budge if you had a key`);
            }
        },
        ifSuccess() {
            removeFromArray(inventory, items["gaol key"]);
            items.sack.isNailedDown = false;
            places.gaol.description = `You are in a small wooden building with an open, stone gaol cell. The cell contains a lone table with a candlestick still smoking on its top, The floor is covered in a thin layer of straw.`;
            app.println(`you insert the key into lock the and it turns folowed by a click as the door swings open`);
        }
    },
    "open sack": {
        items: [
            items.sack
        ],
        ifNoItem() {
            app.println(`what sack?`);
        },
        ifAlreadyDone: `the sack is but a husk`,
        ifSuccess() {
            removeFromArray(inventory, items.sack);
            inventory.push(items["fuckload of money"]);
            app.println(`you pry open the sack and find too many varrius curencys to count`);
        }
    },
    "buy blood thinners": {
        items: [
            items["fuckload of money"]
        ],
        place: places.apothecary,
        ifNoItem() {
            if (playLocation === places.apothecary) {
                app.println(`Sorry bud but those are a rare comedety in these parts and you dont look like you got the cash.`);
            } else {
                app.println(`A spectral kiosk apears infront of you and shouts "your poor" befoer exploding.`);
            }
        },
        ifAlreadyDone: `It is done, leave.`,
        ifSuccess() {
            removeFromArray(inventory, items["fuckload of money"]);
            inventory.push(items["blood thinners"]);
            removeFromArray(places.apothecary.items, items["blood thinners"]);
            app.println(`you go up to the apothecary and slap down the blood thinners and money with a smug  the apothecary looks at the money and at you and desides in that moment that the amont of monye you have is the exacet amuont the bllodthiners cost and swiftly takes the money and handes over the blood thinners absentmindedly`);
        }
    },
    "use blood thinners": {
        items: [
            items["blood thinners"]
        ],
        ifNoItem() {
            app.println(`not yet play the game first`);
        },
        ifAlreadyDone: `How did you find this?`,
        ifSuccess() {
            app.disable();
            app.println(`you open the can and find a grity liqid inside you look at it for a moment befor desideing its propebly fine and downing the entire thiing your blood promptly becomes so thin that it leaks out fo your pours and you transend into an edrich god of blood and seep into the floor.`);
            app.println(`YOU WIN!.`);
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
                app.println(`You wish you could join the battle but you have not the means.`);
            } else {
                app.println(`Who?`);
            }
        },
        ifAlreadyDone: `That'a overkill.`,
        ifSuccess() {
            removeFromArray(playLocation.npcs, npcs["cactus lord"]);
            app.println(`you stab the cactus lord and he turns to face you and laughs at your meger atempt at his life and moves to crush you but wihe his back is turnd the gard shouts "never turn your knees on an aponent" befor rushing in and defenistrating him with extreme pregedis as the cactus lord falls the gard turns and says "that was some quick thinking ther pal i am going need peaple like you if a im going to rebild the caccourt so will you join me as an adviser" you agry and walk into the flroor`);
            app.println(`Great enemy felled`, `color: yellow;`);
            app.println(`YOU WIN!`);
            app.disable();
        }
    }
};


actions["use shovel"] = actions.dig;
actions["use corpse"] = actions["throw corpse"];
actions["use cactus"] = actions["give cactus"];
actions["open lockbox"] = actions["use cell key"];
actions["break wall"] = actions["use sledge hammer"];
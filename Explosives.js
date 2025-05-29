 enabledMods = enabledMods || [];
enabledMods.push("mods/Explosives.js");

runAfterLoad(function() {
    if (!Object.keys(categories).includes("explosives")) {
        categories.explosives = {
            name: "Explosives",
            color: "#ff4444"
        };
    }

    elements.hexamine = {
        color: "#cfcfcf",
        behavior: behaviors.POWDER,
        state: "solid",
        category: "explosives",
        burn: 70,
        burnTime: 90,
        burnInto: "fire",
        tempHigh: 400,
        stateHigh: "gas",
        density: 850,
        reactions: {
            "nitric_acid": { tempMin: 20, chance: 0.5, elem1: "RDX", elem2: null },
            "oxygen": { chance: 0.1, elem1: "fire", elem2: null }
        }
    };

    elements.RDX = {
        color: "#ffff99",
        behavior: behaviors.POWDER,
        state: "solid",
        category: "explosives",
        burn: 100,
        burnTime: 20,
        explosiveness: 10,
        tempHigh: 210,
        burnInto: ["fire", "smoke", "pressure_gas"],
        density: 1800
    };

    elements.tnt = {
        color: "#ffcc00",
        behavior: behaviors.POWDER,
        state: "solid",
        category: "explosives",
        burn: 80,
        burnTime: 30,
        tempHigh: 180,
        explosiveness: 9,
        burnInto: ["fire", "smoke", "pressure_gas"],
        reactions: {
            "fire": { chance: 1, tempMin: 100, elem1: "explosion", elem2: "fire" }
        },
        density: 1650
    };

    elements.tatp = {
        color: "#ffffff",
        behavior: behaviors.POWDER,
        state: "solid",
        category: "explosives",
        burn: 100,
        burnTime: 5,
        explosiveness: 12,
        tempHigh: 80,
        burnInto: ["fire", "pressure_gas"],
        density: 1100
    };

    elements.kno3 = {
        name: "Potassium Nitrate",
        color: "#e0e0ff",
        behavior: behaviors.POWDER,
        category: "explosives",
        state: "solid",
        density: 2110,
        reactions: {
            "sugar": { elem1: "smoke", elem2: "fire", tempMin: 150, chance: 0.9 },
            "charcoal": { elem1: "gunpowder", elem2: null }
        }
    };

    elements.charcoal = {
        color: "#222222",
        behavior: behaviors.POWDER,
        category: "explosives",
        state: "solid",
        burn: 60,
        burnTime: 90,
        burnInto: "smoke",
        density: 180,
        tempHigh: 700,
        stateHigh: "gas"
    };

    elements.aluminum_powder = {
        color: "#b8b8b8",
        behavior: behaviors.POWDER,
        category: "explosives",
        state: "solid",
        density: 2700,
        burn: 50,
        burnTime: 50
    };

    elements.thermite = {
        color: "#ff5500",
        behavior: behaviors.POWDER,
        state: "solid",
        category: "explosives",
        burn: 100,
        burnTime: 100,
        explosiveness: 5,
        reactions: {
            "fire": { chance: 1, tempMin: 200, elem1: "molten_iron", elem2: "fire" }
        },
        density: 3900
    };

    elements.gunpowder = {
        color: "#3c3c3c",
        behavior: behaviors.POWDER,
        category: "explosives",
        state: "solid",
        burn: 100,
        burnTime: 30,
        explosiveness: 7,
        burnInto: ["fire", "smoke", "pressure_gas"],
        tempHigh: 500,
        density: 1700
    };

    elements.explosion = {
        color: "#ffcc99",
        behavior: [
            "M2|M1|M2",
            "M1|DL|M1",
            "M2|M1|M2"
        ],
        category: "special",
        state: "gas",
        density: 1,
        reactions: {},
        temp: 1200,
        tempLow: 200,
        stateLow: "fire",
        tick: function(pixel) {
            explodeAt(pixel.x, pixel.y, 12);
            deletePixel(pixel.x, pixel.y);
        }
    };
});

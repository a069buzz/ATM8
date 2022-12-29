ServerEvents.highPriorityData(event => {
    // Small ships (has recipes for types not yet in 1.19, keep an eye out for new types)
    let ships = ['dhow', 'galley', 'rowboat', 'war_galley', 'drakkar']
    let woods = ['acacia', 'oak', 'dark_oak', 'jungle', 'spruce', 'birch']
    ships.forEach(ship => {
        woods.forEach(wood => {
            event.addJson(`smallships:recipes/${wood}_${ship}`, {
                type: "minecraft:crafting_shaped",
                conditions: [
                    { type: "forge:false" }
                ]
            })
        })
    });
    // Create compat for BYG Mangrove Logs (removed due to MC adding mangrove)
    ['mangrove_log', 'mangrove_wood', 'stripped_mangrove_log', 'stripped_mangrove_wood'].forEach(wood => {
        event.addJson(`create:recipes/cutting/compat/byg/${wood}`, {
            type: "create:cutting",
            conditions: [
                { type: "forge:false" }
            ]
        })
    });
    // ATC recipe for energizing compress blaze rods in powah
    ['block', '1x', '2x', '3x'].forEach(tier => {
        event.addJson(`powah:recipes/energizing/allthecompressed/blazing_crystal/${tier}`, {
            type: "powah:energizing",
            conditions: [
                { type: "forge:false" }
            ]
        })
    });
    event.addJson('ftbic:recipes/shapeless/sulfur_from_hammer', {
        type: "minecraft:crafting_shapeless",
        conditions: [
            { type: "forge:false" }
        ]
    })
    event.addJson('biggerreactors:recipes/compat/mekanism/rotary/superheated_sodium', {
        type: "mekanism:rotary",
        conditions: [
            { type: "forge:false" }
        ]
    })
    // wrong recipe type
    event.addJson('croptopia:recipes/banana_cream_pie', {
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "tag": "forge:bananas"
            },
            {
                "tag": "forge:vanilla"
            },
            {
                "item": "minecraft:sugar"
            },
            {
                "item": "minecraft:egg"
            },
            {
                "tag": "forge:milks"
            },
            {
                "item": "croptopia:frying_pan"
            }
        ],
        "result": {
            "item": "croptopia:banana_cream_pie",
            "count": 1
        }
    })
    // item doesn't seem to exist yet, add a check
    event.addJson('advgenerators:recipes/modules/gas_input', {
        "type": "minecraft:crafting_shaped",
        "conditions": [
            {
                "type": "forge:mod_loaded",
                "modid": "mekanism"
            },
            {
                "type": "forge:item_exists",
                "item": "advgenerators:gas_input"
            }
        ],
        "pattern": [
            "S S",
            "FPF",
            " W "
        ],
        "key": {
            "S": {
                "tag": "forge:ingots/steel"
            },
            "F": {
                "item": "advgenerators:iron_frame"
            },
            "W": {
                "item": "advgenerators:iron_tubing"
            },
            "P": {
                "item": "minecraft:piston"
            }
        },
        "result": {
            "item": "advgenerators:gas_input"
        }
    })
    // add check for mod to be loaded
    event.addJson('deeperdarker:recipes/sculk_affinity', {
        "type": "jeed:effect_provider",
        "effect": {
            "idi": "deeperdarker:sculk_affinity"
        },
        "providers": [
            {
                "item": "deeperdarker:soul_dust"
            }
        ],
        "conditions": [
            {
                "type": "forge:mod_loaded",
                "modid": "jeed"
            }
        ]
    })
    // Fix farmers delight / botany pot recipes
    // TODO
})
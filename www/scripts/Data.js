
function LoadItems() {

    //Loading Items
    var Items = [];

    Items.push(new Item("Stone", RARITY.COMMON));
    Items.push(new Item("Coal", RARITY.UNCOMMON));
    Items.push(new Item("Iron", RARITY.RARE));
    Items.push(new Item("Steel", RARITY.VERY_RARE));
    Items.push(new Item("Emerald", RARITY.ULTRA_RARE));
    Items.push(new Item("Gold", RARITY.EPIC));
    Items.push(new Item("Diamond", RARITY.LEGENDARY));

    return Items;
}

function LoadModules(){

    //Loading Modules
    var Modules = [];

    //Loading Module 1
    var Module_1 = [];   
    Module_1.push(CreateSegment(1, 600, RARITY.COMMON)); // 60%
    Module_1.push(CreateSegment(601, 900, RARITY.UNCOMMON)); //30%
    Module_1.push(CreateSegment(901, 1000, RARITY.RARE)); //10%
    Modules.push(Module_1);

    //Loading Module 2
    var Module_2 = [];   
    Module_2.push(CreateSegment(1, 500, RARITY.COMMON)); // 50%
    Module_2.push(CreateSegment(501, 750, RARITY.UNCOMMON)); // 25%
    Module_2.push(CreateSegment(751, 850, RARITY.RARE)); // 10%
    Module_2.push(CreateSegment(851, 920, RARITY.VERY_RARE)); // 7%
    Module_2.push(CreateSegment(921, 970, RARITY.ULTRA_RARE)); // 5%
    Module_2.push(CreateSegment(971, 995, RARITY.EPIC)); // 2.5%
    Module_2.push(CreateSegment(996, 1000, RARITY.LEGENDARY)); // 0.5%
    Modules.push(Module_2);

    return Modules;
}

function CreateSegment(min, max, rarity){   
    return { Min: min, Max: max, Rarity: rarity};
}
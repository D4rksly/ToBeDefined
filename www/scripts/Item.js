
var Item = function(name, rarity) {
    this.Name = name;
    this.Rarity = rarity;
}

Item.prototype = {
    getRarity: function(){
        return this.Rarity;
    },
    setRarity: function(rarity){
        this.Rarity = rarity;
    },
    getName: function(){
        return this.Name;
    },
    setName: function(name){
        this.Name = name;
    }
}
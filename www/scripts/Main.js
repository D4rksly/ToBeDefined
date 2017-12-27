
    var Items = LoadItems();
    var Modules = LoadModules();

    function GetRandomItem() {   

        //random between 1 and 1000
        var probability = Math.floor(Math.random() * 1000) + 1;
        console.log(probability);

        //Evaluate the item sorted
        var rarity = EvaluateRarity(probability, Modules[1]);

        switch (rarity.code){
            case "C":
            var elem = document.getElementById("common_count");
            elem.innerHTML++;
            break;

            case "N":
            var elem = document.getElementById("uncommon_count");
            elem.innerHTML++;
            break;

            case "R":
            var elem = document.getElementById("rare_count");
            elem.innerHTML++;
            break;

            case "V":
            var elem = document.getElementById("vrare_count");
            elem.innerHTML++;
            break;

            case "U":
            var elem = document.getElementById("urare_count");
            elem.innerHTML++;
            break;

            case "E":
            var elem = document.getElementById("epic_count");
            elem.innerHTML++;
            break;

            case "L":
            var elem = document.getElementById("legendary_count");
            elem.innerHTML++;
            break;
        }
        console.log(rarity.name);
    }

    function EvaluateRarity(result, module){
        for(var i = 0; i < module.length; i++){
            if(module[i].Min <= result && module[i].Max >= result){
                return module[i].Rarity;
                break;
            }
        }
    }
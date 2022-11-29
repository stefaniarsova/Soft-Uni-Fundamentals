function plantDiscovery(array) {
    let n = +array.shift();
   
    let list = {};
    for (let i = 0; i < n; i++) { 
   
      let [plant, rarity] = array.shift().split(`<->`);
      rarity = +rarity;
   
      if (list.hasOwnProperty(plant) == false) {
        list[plant] = { rarity: 0, rating: [] };
      }
      list[plant].rarity += rarity;
    }
    console.log(list);
}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
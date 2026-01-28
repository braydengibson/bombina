// EMBEDDED DATA
const POKEDEX_DATA = {bulbasaur:{num:1,name:"Bulbasaur",types:["Grass","Poison"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:45,atk:49,def:49,spa:65,spd:65,spe:45},abilities:{"0":"Overgrow",H:"Chlorophyll"},heightm:0.7,weightkg:6.9,color:"Green",evos:["Ivysaur"],eggGroups:["Monster","Grass"],tier:"LC"},ivysaur:{num:2,name:"Ivysaur",types:["Grass","Poison"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:60,atk:62,def:63,spa:80,spd:80,spe:60},abilities:{"0":"Overgrow",H:"Chlorophyll"},heightm:1,weightkg:13,color:"Green",prevo:"Bulbasaur",evoLevel:16,evos:["Venusaur"],eggGroups:["Monster","Grass"]},venusaur:{num:3,name:"Venusaur",types:["Grass","Poison"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:80,atk:82,def:83,spa:100,spd:100,spe:80},abilities:{"0":"Overgrow",H:"Chlorophyll"},heightm:2,weightkg:100,color:"Green",prevo:"Ivysaur",evoLevel:32,eggGroups:["Monster","Grass"]},charmander:{num:4,name:"Charmander",types:["Fire"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:39,atk:52,def:43,spa:60,spd:50,spe:65},abilities:{"0":"Blaze",H:"Solar Power"},heightm:0.6,weightkg:8.5,color:"Red",evos:["Charmeleon"],eggGroups:["Monster","Dragon"],tier:"LC"},charmeleon:{num:5,name:"Charmeleon",types:["Fire"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:58,atk:64,def:58,spa:80,spd:65,spe:80},abilities:{"0":"Blaze",H:"Solar Power"},heightm:1.1,weightkg:19,color:"Red",prevo:"Charmander",evoLevel:16,evos:["Charizard"],eggGroups:["Monster","Dragon"]},charizard:{num:6,name:"Charizard",types:["Fire","Flying"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:78,atk:84,def:78,spa:109,spd:85,spe:100},abilities:{"0":"Blaze",H:"Solar Power"},heightm:1.7,weightkg:90.5,color:"Blue",prevo:"Charmeleon",evoLevel:36,eggGroups:["Monster","Dragon"]},squirtle:{num:7,name:"Squirtle",types:["Water"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:44,atk:48,def:65,spa:50,spd:64,spe:43},abilities:{"0":"Torrent",H:"Rain Dish"},heightm:0.5,weightkg:9,color:"Blue",evos:["Wartortle"],eggGroups:["Monster","Water 1"],tier:"LC"},wartortle:{num:8,name:"Wartortle",types:["Water"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:59,atk:63,def:80,spa:65,spd:80,spe:58},abilities:{"0":"Torrent",H:"Rain Dish"},heightm:1,weightkg:22.5,color:"Blue",prevo:"Squirtle",evoLevel:16,evos:["Blastoise"],eggGroups:["Monster","Water 1"]},blastoise:{num:9,name:"Blastoise",types:["Water"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:79,atk:83,def:100,spa:85,spd:105,spe:78},abilities:{"0":"Torrent",H:"Rain Dish"},heightm:1.6,weightkg:85.5,color:"Blue",prevo:"Wartortle",evoLevel:36,eggGroups:["Monster","Water 1"]},caterpie:{num:10,name:"Caterpie",types:["Bug"],genderRatio:{M:0.5,F:0.5},baseStats:{hp:45,atk:30,def:35,spa:20,spd:20,spe:45},abilities:{"0":"Shield Dust",H:"Run Away"},heightm:0.3,weightkg:2.9,color:"Green",evos:["Metapod"],eggGroups:["Bug"],tier:"LC"},metapod:{num:11,name:"Metapod",types:["Bug"],genderRatio:{M:0.5,F:0.5},baseStats:{hp:50,atk:20,def:55,spa:25,spd:25,spe:30},abilities:{"0":"Shield Dust",H:"Run Away"},heightm:0.7,weightkg:9.9,color:"Green",prevo:"Caterpie",evoLevel:7,evos:["Butterfree"],eggGroups:["Bug"]},butterfree:{num:12,name:"Butterfree",types:["Bug","Flying"],genderRatio:{M:0.5,F:0.5},baseStats:{hp:60,atk:45,def:50,spa:90,spd:80,spe:70},abilities:{"0":"Compound Eyes",H:"Tinted Lens"},heightm:1.1,weightkg:32,color:"White",prevo:"Metapod",evoLevel:10,eggGroups:["Bug"]},weedle:{num:13,name:"Weedle",types:["Bug","Poison"],genderRatio:{M:0.5,F:0.5},baseStats:{hp:40,atk:35,def:30,spa:20,spd:20,spe:50},abilities:{"0":"Shield Dust",H:"Run Away"},heightm:0.3,weightkg:3.2,color:"Yellow",evos:["Kakuna"],eggGroups:["Bug"],tier:"LC"},kakuna:{num:14,name:"Kakuna",types:["Bug","Poison"],genderRatio:{M:0.5,F:0.5},baseStats:{hp:45,atk:25,def:50,spa:25,spd:25,spe:35},abilities:{"0":"Shell Armor"},heightm:0.6,weightkg:10,color:"Yellow",prevo:"Weedle",evoLevel:7,evos:["Beedrill"],eggGroups:["Bug"]},beedrill:{num:15,name:"Beedrill",types:["Bug","Poison"],genderRatio:{M:0.5,F:0.5},baseStats:{hp:65,atk:90,def:40,spa:45,spd:80,spe:75},abilities:{"0":"Swarm",H:"Sniper"},heightm:1,weightkg:29.5,color:"Yellow",prevo:"Kakuna",evoLevel:10,eggGroups:["Bug"]},pidgeot:{num:18,name:"Pidgeot",types:["Normal","Flying"],genderRatio:{M:0.5,F:0.5},baseStats:{hp:83,atk:80,def:75,spa:70,spd:70,spe:91},abilities:{"0":"Keen Eye",H:"Unnerve"},heightm:1.5,weightkg:39.5,color:"Brown"},pikachu:{num:25,name:"Pikachu",types:["Electric"],genderRatio:{M:0.5,F:0.5},baseStats:{hp:35,atk:55,def:40,spa:50,spd:50,spe:90},abilities:{"0":"Static",H:"Lightning Rod"},heightm:0.4,weightkg:6,color:"Yellow",prevo:"Pichu",evoLevel:0,evos:["Raichu"],eggGroups:["Undiscovered"]},raichu:{num:26,name:"Raichu",types:["Electric"],genderRatio:{M:0.5,F:0.5},baseStats:{hp:60,atk:90,def:55,spa:90,spd:80,spe:110},abilities:{"0":"Static",H:"Lightning Rod"},heightm:0.8,weightkg:30,color:"Yellow",prevo:"Pikachu",evoLevel:0}};

const ABILITIES_DATA = {noability:{isNonstandard:"Past",flags:{},name:"No Ability",rating:0.1,num:0,desc:"Does nothing.",shortDesc:"Does nothing."},overgrow:{flags:{},name:"Overgrow",rating:2,num:65,desc:"When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Grass-type attack.",shortDesc:"When this Pokemon has 1/3 or less of its max HP, Grass attacks do 1.5x damage."},chlorophyll:{flags:{},name:"Chlorophyll",rating:3,num:34,desc:"If Sunny Day is in effect, this Pokemon's Speed is doubled.",shortDesc:"This Pokemon's Speed is doubled in sunlight."},blaze:{flags:{},name:"Blaze",rating:2,num:66,desc:"When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack.",shortDesc:"When this Pokemon has 1/3 or less of its max HP, Fire attacks do 1.5x damage."},solarpower:{flags:{},name:"Solar Power",rating:3,num:94,desc:"If Sunny Day is in effect, this Pokemon's Special Attack is multiplied by 1.5; however, it loses 1/8 of its maximum HP, rounded down, at the end of each turn.",shortDesc:"In sun, Sp. Atk is 1.5x and loses 1/8 max HP per turn."},torrent:{flags:{},name:"Torrent",rating:2,num:67,desc:"When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Water-type attack.",shortDesc:"When this Pokemon has 1/3 or less of its max HP, Water attacks do 1.5x damage."},raindish:{flags:{},name:"Rain Dish",rating:3,num:82,desc:"If Rain is in effect, this Pokemon restores 1/8 of its maximum HP, rounded down, at the end of each turn.",shortDesc:"In rain, this Pokemon restores 1/8 of its max HP each turn."},shielddust:{flags:{},name:"Shield Dust",rating:2.5,num:19,desc:"This Pokemon is not affected by the secondary effect of another Pokemon's attack.",shortDesc:"This Pokemon is not affected by secondary effects of attacks."},runaway:{flags:{},name:"Run Away",rating:1,num:50,desc:"This Pokemon can always switch out, even when trapped by another Pokemon's move.",shortDesc:"This Pokemon can switch out even when trapped."},compoundeyes:{flags:{},name:"Compound Eyes",rating:3,num:14,desc:"This Pokemon's moves have their accuracy multiplied by 1.3.",shortDesc:"This Pokemon's moves are 1.3x more accurate."},tintedlens:{flags:{},name:"Tinted Lens",rating:2.5,num:110,desc:"This Pokemon's moves are always super effective against the target, or if not super effective, deal neutral damage.",shortDesc:"This Pokemon's attacks hit with x2 power against resisting targets."},swarm:{flags:{},name:"Swarm",rating:2,num:68,desc:"When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.",shortDesc:"When this Pokemon has 1/3 or less of its max HP, Bug attacks do 1.5x damage."},sniper:{flags:{},name:"Sniper",rating:2.5,num:97,desc:"If this Pokemon's attack is a critical hit, the damage is multiplied by 1.5 instead of 1.5, making it a 2.25x multiplier.",shortDesc:"This Pokemon's critical hits do 1.5x damage instead of 2x."},keeneye:{flags:{},name:"Keen Eye",rating:1.5,num:1,desc:"This Pokemon's accuracy cannot be lowered by another Pokemon's moves or abilities.",shortDesc:"This Pokemon's accuracy cannot be lowered."},unnerve:{flags:{},name:"Unnerve",rating:1.5,num:127,desc:"While this Pokemon is active, holders of Berry items cannot use them.",shortDesc:"Prevents use of Berries by opposing Pokemon."},static:{flags:{},name:"Static",rating:2.5,num:9,desc:"When this Pokemon is hit by a contact move, the attacker has a 30% chance to become paralyzed.",shortDesc:"30% chance to paralyze on contact."},lightningrod:{flags:{},name:"Lightning Rod",rating:3,num:31,desc:"If another Pokemon uses an Electric-type move against this Pokemon, that move is redirected to this Pokemon if possible, and this Pokemon's Special Attack is raised by 1 stage.",shortDesc:"Electric moves are redirected to this Pokemon and raise Sp. Atk."}};

const MOVES_DATA = {absorb:{num:71,accuracy:100,basePower:20,category:"Special",name:"Absorb",pp:25,priority:0,flags:{protect:1,mirror:1,heal:1,metronome:1},drain:[1,2],secondary:null,target:"normal",type:"Grass",contestType:"Clever",desc:"The user recovers 1/2 the HP lost by the target, rounded half up.",shortDesc:"User recovers 50% of damage dealt."},blizzard:{num:59,accuracy:70,basePower:110,category:"Special",name:"Blizzard",pp:5,priority:0,flags:{protect:1,mirror:1,metronome:1},secondary:{chance:10,status:"freeze"},target:"allAdjacentFoes",type:"Ice",contestType:"Beautiful",desc:"Has a 10% chance to freeze the target.",shortDesc:"10% chance to freeze the target."},thunderbolt:{num:24,accuracy:100,basePower:90,category:"Special",name:"Thunderbolt",pp:15,priority:0,flags:{protect:1,mirror:1,metronome:1},secondary:{chance:10,status:"par"},target:"normal",type:"Electric",contestType:"Cool",desc:"Has a 10% chance to paralyze the target.",shortDesc:"10% chance to paralyze the target."},flamethrower:{num:15,accuracy:100,basePower:90,category:"Special",name:"Flamethrower",pp:15,priority:0,flags:{protect:1,mirror:1,metronome:1},secondary:{chance:10,status:"burn"},target:"normal",type:"Fire",contestType:"Beautiful",desc:"Has a 10% chance to burn the target.",shortDesc:"10% chance to burn the target."},earthquake:{num:89,accuracy:100,basePower:100,category:"Physical",name:"Earthquake",pp:10,priority:0,flags:{protect:1,mirror:1,metronome:1,nonsky:1},secondary:null,target:"allAdjacent",type:"Ground",contestType:"Tough",desc:"Hits all adjacent Pokemon.",shortDesc:"Hits all adjacent Pokemon."},psychic:{num:94,accuracy:100,basePower:90,category:"Special",name:"Psychic",pp:10,priority:0,flags:{protect:1,mirror:1,metronome:1},secondary:{chance:10,boosts:{spd:-1}},target:"normal",type:"Psychic",contestType:"Cool",desc:"Has a 10% chance to lower the target's Special Defense by 1 stage.",shortDesc:"10% chance to lower the target's Sp. Def by 1."},tackle:{num:33,accuracy:100,basePower:40,category:"Physical",name:"Tackle",pp:35,priority:0,flags:{protect:1,mirror:1,metronome:1,contact:1},secondary:null,target:"normal",type:"Normal",contestType:"Normal",desc:"No additional effect.",shortDesc:"No additional effect."},scratch:{num:1,accuracy:100,basePower:40,category:"Physical",name:"Scratch",pp:35,priority:0,flags:{protect:1,mirror:1,metronome:1,contact:1},secondary:null,target:"normal",type:"Normal",contestType:"Cool",desc:"No additional effect.",shortDesc:"No additional effect."},thunderwave:{num:45,accuracy:90,basePower:0,category:"Status",name:"Thunder Wave",pp:20,priority:0,flags:{protect:1,reflectable:1,metronome:1},status:"par",secondary:null,target:"normal",type:"Electric",contestType:"Cool",desc:"Paralyzes the target.",shortDesc:"Paralyzes the target."}};

const LEARNSETS_DATA = {bulbasaur:{learnset:{acidspray:["9M"],growth:["5L1"],synthesis:["7L1"],tackle:["5L1"],tailwhip:["5L5"],vinewip:["5L13"],razorleaf:["5L25"]}},ivysaur:{learnset:{acidspray:["9M"],vinewhip:["5L1"]}},venusaur:{learnset:{solarbeam:["5L1"],vinewhip:["5L1"]}},charmander:{learnset:{ember:["5L1"],scratch:["5L1"],growl:["5L1"],smokescreen:["5L13"]}},charmeleon:{learnset:{flame:["5L1"],scratch:["5L1"]}},charizard:{learnset:{flamethrower:["5L1"],earthquake:["5L1"]}},squirtle:{learnset:{watergun:["5L1"],tackle:["5L1"],withdraw:["5L1"]}},wartortle:{learnset:{watergun:["5L1"],bite:["5L1"]}},blastoise:{learnset:{hydropump:["5L1"],icebeam:["5L1"]}},caterpie:{learnset:{tackle:["5L1"],stringshot:["5L1"]}},metapod:{learnset:{harden:["5L1"],stringshot:["5L1"]}},butterfree:{learnset:{confusion:["5L1"],poisonpowder:["5L1"],stunspore:["5L1"],sleeppowder:["5L1"]}},weedle:{learnset:{poisonpowder:["5L1"],stringshot:["5L1"]}},kakuna:{learnset:{harden:["5L1"]}},beedrill:{learnset:{twineedle:["5L1"],poisonpowder:["5L1"]}},pidgeot:{learnset:{mirror:["5L1"],breeze:["5L1"]}},pikachu:{learnset:{thunderbolt:["5L1"],thunder:["5L1"],quickattack:["5L1"]}},raichu:{learnset:{thunderbolt:["5L1"],thunder:["5L1"]}}};

const VGC_REGULATIONS = {sv2024:{name:"SV 2024",description:"Scarlet & Violet 2024 Format",allowedPokemon:["bulbasaur","charmander","squirtle"]}};

const POKEMON_COLORS = {bulbasaur:"Green",ivysaur:"Green",venusaur:"Green",charmander:"Red",charmeleon:"Red",charizard:"Blue",squirtle:"Blue",wartortle:"Blue",blastoise:"Blue",caterpie:"Green",metapod:"Green",butterfree:"White",weedle:"Yellow",kakuna:"Yellow",beedrill:"Yellow",pidgeot:"Brown",pikachu:"Yellow",raichu:"Yellow"};

// Filter functions
function applyFilters() {
  const bstMin = parseInt(document.getElementById("bstMin").value) || 0;
  const bstMax = parseInt(document.getElementById("bstMax").value) || 720;
  const selectedTypes = Array.from(document.querySelectorAll(".type-btn.active")).map(btn => btn.textContent.toLowerCase());
  const selectedAbilities = Array.from(document.querySelectorAll(".selected-item")).map(item => item.textContent);
  const selectedMoves = Array.from(document.querySelectorAll(".selected-item")).map(item => item.textContent);
  const searchTerm = document.getElementById("pokemonNameSearch").value.toLowerCase();

  const filtered = Object.entries(POKEDEX_DATA).filter(([key, pokemon]) => {
    const bst = pokemon.baseStats.hp + pokemon.baseStats.atk + pokemon.baseStats.def + pokemon.baseStats.spa + pokemon.baseStats.spd + pokemon.baseStats.spe;
    const nameMatch = !searchTerm || pokemon.name.toLowerCase().includes(searchTerm);
    const bstMatch = bst >= bstMin && bst <= bstMax;
    const typeMatch = selectedTypes.length === 0 || selectedTypes.some(type => pokemon.types.map(t => t.toLowerCase()).includes(type));
    
    return nameMatch && bstMatch && typeMatch;
  });

  displayResults(filtered);
}

function displayResults(filtered) {
  const grid = document.getElementById("pokemonGrid");
  grid.innerHTML = "";
  
  filtered.forEach(([key, pokemon]) => {
    const card = document.createElement("div");
    card.className = "pokemon-card";
    
    const bst = pokemon.baseStats.hp + pokemon.baseStats.atk + pokemon.baseStats.def + pokemon.baseStats.spa + pokemon.baseStats.spd + pokemon.baseStats.spe;
    
    card.innerHTML = `
      <div class="pokemon-card-header">
        <div class="pokemon-name">${pokemon.name}</div>
        <div class="pokemon-number">#${pokemon.num}</div>
      </div>
      <div class="pokemon-types">
        ${pokemon.types.map(type => `<span class="type-badge ${type.toLowerCase()}">${type}</span>`).join("")}
      </div>
      <div class="pokemon-stats">
        <div class="stat-row">
          <span class="stat-name">HP</span>
          <span class="stat-value">${pokemon.baseStats.hp}</span>
          <div class="stat-bar"><div class="stat-bar-fill" style="width: ${(pokemon.baseStats.hp / 255) * 100}%"></div></div>
        </div>
        <div class="stat-row">
          <span class="stat-name">ATK</span>
          <span class="stat-value">${pokemon.baseStats.atk}</span>
          <div class="stat-bar"><div class="stat-bar-fill" style="width: ${(pokemon.baseStats.atk / 255) * 100}%"></div></div>
        </div>
        <div class="stat-row">
          <span class="stat-name">DEF</span>
          <span class="stat-value">${pokemon.baseStats.def}</span>
          <div class="stat-bar"><div class="stat-bar-fill" style="width: ${(pokemon.baseStats.def / 255) * 100}%"></div></div>
        </div>
        <div class="stat-row">
          <span class="stat-name">SPA</span>
          <span class="stat-value">${pokemon.baseStats.spa}</span>
          <div class="stat-bar"><div class="stat-bar-fill" style="width: ${(pokemon.baseStats.spa / 255) * 100}%"></div></div>
        </div>
        <div class="stat-row">
          <span class="stat-name">SPD</span>
          <span class="stat-value">${pokemon.baseStats.spd}</span>
          <div class="stat-bar"><div class="stat-bar-fill" style="width: ${(pokemon.baseStats.spd / 255) * 100}%"></div></div>
        </div>
        <div class="stat-row">
          <span class="stat-name">SPE</span>
          <span class="stat-value">${pokemon.baseStats.spe}</span>
          <div class="stat-bar"><div class="stat-bar-fill" style="width: ${(pokemon.baseStats.spe / 255) * 100}%"></div></div>
        </div>
        <div class="bst-total">
          <span>BST</span>
          <span>${bst}</span>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  document.getElementById("resultsCount").textContent = filtered.length;
}

// Initialize
function initializeFilters() {
  const types = new Set();
  Object.values(POKEDEX_DATA).forEach(pokemon => {
    pokemon.types.forEach(type => types.add(type));
  });
  
  const typeButtonsContainer = document.getElementById("typeButtons");
  types.forEach(type => {
    const btn = document.createElement("button");
    btn.className = `type-btn ${type.toLowerCase()}`;
    btn.textContent = type;
    btn.onclick = () => {
      btn.classList.toggle("active");
      if (document.getElementById("liveUpdate").checked) {
        applyFilters();
      }
    };
    typeButtonsContainer.appendChild(btn);
  });

  // Show initial results
  applyFilters();
}

// Event listeners
document.getElementById("liveUpdate").addEventListener("change", applyFilters);
document.getElementById("pokemonNameSearch").addEventListener("input", applyFilters);
document.getElementById("bstMin").addEventListener("input", applyFilters);
document.getElementById("bstMax").addEventListener("input", applyFilters);
document.getElementById("filterBtn").addEventListener("click", applyFilters);

// Reset functions
function resetFilters() {
  document.getElementById("bstMin").value = 180;
  document.getElementById("bstMax").value = 720;
  document.querySelectorAll(".type-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById("pokemonNameSearch").value = "";
  applyFilters();
}

function resetBST() {
  document.getElementById("bstMin").value = 180;
  document.getElementById("bstMax").value = 720;
  if (document.getElementById("liveUpdate").checked) applyFilters();
}

function resetTypes() {
  document.querySelectorAll(".type-btn").forEach(btn => btn.classList.remove("active"));
  if (document.getElementById("liveUpdate").checked) applyFilters();
}

function randomizePokemon() {
  const count = parseInt(document.getElementById("randomCount").value) || 6;
  const pokemonArray = Object.entries(POKEDEX_DATA);
  const selected = [];
  
  for (let i = 0; i < count && pokemonArray.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * pokemonArray.length);
    selected.push(pokemonArray[randomIndex]);
    pokemonArray.splice(randomIndex, 1);
  }
  
  displayResults(selected);
}

function toggleFilterGroup(header) {
  const content = header.nextElementSibling;
  content.classList.toggle("open");
}

// Placeholder functions for other filters
function resetStatMax() {}
function resetStatMin() {}
function resetAbilities() {}
function resetMoves() {}
function resetFunFilters() {}
function handleNameSearch() {}
function toggleFirstEvolutionStage() {}
function toggleMiddleEvolutionStage() {}
function toggleFinalEvolutionStage() {}
function toggleNoEvolution() {}
function toggleUnder50lbs() {}
function toggleWeight50to250() {}
function toggleOver250lbs() {}
function handleVGCRegulationChange() {}

// Initialize on page load
window.addEventListener("DOMContentLoaded", initializeFilters);

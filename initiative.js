const test = document.querySelector('.test');
let roll = 0,
    result = 0,
    partName ='',
    partRes= 0;
const playerInfo = [{
        id: 1,
        name: 'Axeman',
        modifier: +2,
        result: 0,
    },
    {
        id: 2,
        name: 'Borgis',
        modifier: +8,
        result: 0
    },
    {
        id:3,
        name: 'Gwaen',
        modifier: +2,
        result: 0
    },
    {
        id:4,
        name: 'Keeso',
        modifier: 0
,
result: 0    },
    {
        id:5,
        name: 'Plippy',
        modifier: +5,
        result: 0
    },
    {
        id:6,
        name: 'Thom',
        modifier: +2,
        result: 0
    },
    {
        id:7,
        name: 'Vivek',
        modifier: +7,
        result: 0
    }
], //playerInfo
    enemyInfo = [
    {
        id: 1,
        name: 'Group 1',
        modifier: +2,
        result: 0
    },
    {
        id: 2,
        name: 'Group 2',
        modifier: +2,
        result: 0
    },
    {
        id: 3,
        name: 'Group 3',
        modifier: +2,
        result: 0
    },
    {
        id: 4,
        name: 'Group 4',
        modifier: +2,
        result: 0
    },

    ],//enemyInfo
    participants = [...playerInfo, ...enemyInfo];

function rollDice(amt,num,mod) {
  let result =[];
  let total;
  for(let i=0;i<amt;i++){
   result.push(Math.floor(Math.random() * num + 1));
  }
  total = result.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue;
  },0) + mod;
  return total;
}

function outputPlayers() {

    const playerOutput =
     playerInfo.map(player => 
      `<div class="player">
            <p class="player-name item">${player.name}</p>
            <p class="player-modifier item">${player.modifier}</p>
        </div>`).join('');
     
    document.querySelector('.players').innerHTML = playerOutput;
}

function outputEnemies() {

    const enemyOutput =
     enemyInfo.map(enemy => 
      `<div class="enemy">
            <p class="enemy-name item">${enemy.name}</p>
            <p class="enemy-modifier item">${enemy.modifier}</p>
        </div>`).join('');
     
    document.querySelector('.enemies').innerHTML = enemyOutput;
}

function getInitiative() {

    let newArray = [];
    participants.map(participant => {
        partName = participant.name;
        partRes = rollDice(1,20,participant.modifier);
        
        newArray.push({partName, partRes})
    })
    let initiative = newArray.sort(function(a, b){
            const lastParticipant = a.partRes;
            const nextParticipant = b.partRes;
            return lastParticipant > nextParticipant ? -1 : 1;
        })
   
    console.log(initiative);
    initiativeMarkup = initiative.map(position => 
    `<div class="position">
        <p class="position-name">${position.partName}</p>
        <p class="position-name">${position.partRes}</p>

    </div>` ).join('');

    document.querySelector('.initiative').innerHTML = initiativeMarkup;
    
}





function testButton() {
    getInitiative()

   console.log(participants);
}

test.addEventListener('click', testButton);

   outputPlayers();
   outputEnemies();

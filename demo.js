let roboHealth = 100
let roboAttack = 20

let robo2Health = 100
let robo2Attack = 25

if (roboAttack > robo2Attack){
    console.log('robo has a higher attack than robo2')
} else {
    console.log('robo2 has higher attack than robo')
}

roboHealth -= robo2Attack


console.log(`robo2 attacked robo and robo's health is now ${roboHealth}`)

while(roboHealth > 30){
    roboHealth -= robo2Attack
    console.log(`robo2 attacks robo. Robo's health is now ${roboHealth}`)
}

for(let i = 0; i< 2; i++){
    if (roboHealth + 50 > 100){
        roboHealth = 100
    } else {
        roboHealth += 50
    }
}

console.log(roboHealth)

let roboDefense = 15

roboHealth -= robo2Attack - roboDefense

console.log(roboHealth)

let attacks = 0

while(roboHealth > 30){
    roboHealth -= robo2Attack - roboDefense
    console.log(`robo2 attacks robo. Robo's health is now ${roboHealth}`)
    attacks ++
}

console.log(`It took robo2 ${attacks} attacks to disable robo`)

//this is an added message
function solution(bandage, health, attacks) {
    const maxHealth = health;
    let continueSuccess = 0;
    let time = 0;
    const [castingTime,recoveryPerSec,additionalRecovery] = bandage;
    const endTime = attacks[attacks.length-1][0];
    const attacksObj = Object.fromEntries(attacks);

    while(time<=endTime){
        if(attacksObj[time]){
            health-=attacksObj[time];
            continueSuccess = 0;
            time++;
        }else{
            continueSuccess++;
            if(continueSuccess===castingTime){
                health = health+recoveryPerSec+additionalRecovery>=maxHealth ? maxHealth : health+recoveryPerSec+additionalRecovery;
                continueSuccess = 0;
            }else{
                health = health+recoveryPerSec>=maxHealth ? maxHealth : health+recoveryPerSec;
            }
            time++;
        }
        
        if(health<=0) return -1;
    }
    return health;
}
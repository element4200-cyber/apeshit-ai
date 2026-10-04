export const POSITIVE = ['thumbs','dance','clap','flip','fistpump','salute','cheers'] as const;
export const NEGATIVE = ['tantrum','swing','poop','peel','rude','stare','facepalm'] as const;
export const REACTIONS:Record<string,{frame:number;pose:string;label:string;line:string;duration:number}> = {
 thumbs:{frame:0,pose:'smile',label:'TWO THUMBS UP',line:'Approved. Monkey gives this one a thumbs up.',duration:3200},
 dance:{frame:1,pose:'smile',label:'VICTORY DANCE',line:'Approved! Activate the jungle shuffle.',duration:3800},
 clap:{frame:2,pose:'smile',label:'SLOW CLAP',line:'Approved. A round of applause from the jungle.',duration:3400},
 flip:{frame:3,pose:'smile',label:'CELEBRATION FLIP',line:'Approved! Doing a flip for those market signals.',duration:3500},
 fistpump:{frame:4,pose:'smile',label:'FIST PUMP',line:'Approved! Monkey is pumped.',duration:3200},
 salute:{frame:5,pose:'smile',label:'BANANA SALUTE',line:'Approved. The golden banana salute is yours.',duration:3600},
 cheers:{frame:6,pose:'smile',label:'CHEERS',line:'Approved. Cheers to the jungle!',duration:3600},
 tantrum:{frame:7,pose:'angry',label:'FULL TANTRUM',line:'Disapproved! These signals make monkey furious.',duration:3800},
 swing:{frame:8,pose:'angry',label:'VINE RAMPAGE',line:'Disapproved! Monkey is leaving by vine.',duration:4300},
 poop:{frame:9,pose:'angry',label:'POOP ATTACK',line:'Disapproved. Here comes the poop report.',duration:3500},
 peel:{frame:10,pose:'angry',label:'PEEL ATTACK',line:'Disapproved! Watch out for flying banana peels.',duration:3500},
 rude:{frame:11,pose:'angry',label:'RUDE VERDICT',line:'Disapproved. Here is my one-finger technical analysis.',duration:3400},
 stare:{frame:12,pose:'angry',label:'DEATH STARE',line:'Disapproved. Monkey is staring straight through this contract.',duration:3800},
 facepalm:{frame:13,pose:'angry',label:'FACEPALM',line:'Disapproved. Monkey needs a moment.',duration:3500},
 banana:{frame:14,pose:'banana',label:'SNACK BREAK',line:'Hold on. Monkey needs some potassium.',duration:4200},
 beer:{frame:15,pose:'beer',label:'BEER BREAK',line:'Just a little jungle happy hour.',duration:4200},
};
export function chooseReaction(pool:readonly string[],previous?:string,random=Math.random){const available=pool.filter(x=>x!==previous);return available[Math.floor(random()*available.length)]??pool[0];}
export function spritePosition(frame:number){return `${(frame%4)*100/3}% ${Math.floor(frame/4)*100/3}%`;}

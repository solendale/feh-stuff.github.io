module.exports = [
  {
    name: "Armored Boots",
    icon: "37-6",
    include: [{moveType: "Armored"}],
    effect: "If unit's HP = 100% at start of turn, unit can move 1 extra space. (That turn only; does not stack.)"
  },
  {
    name: "Atk Ploy 1",
    icon: "18-12",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-3 until the end of foe's next action."
  },
  {
    name: "Atk Ploy 2",
    icon: "19-0",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-4 until the end of foe's next action."
  },
  {
    name: "Atk Ploy 3",
    icon: "19-1",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-5 until the end of foe's next action."
  },
  {
    name: "Attack +1",
    icon: "0-7",
    stats: {atk: 1},
    effect: "Grants Atk+1."
  },
  {
    name: "Attack +2",
    icon: "0-8",
    stats: {atk: 2},
    effect: "Grants Atk+2."
  },
  {
    name: "Attack +3",
    icon: "0-9",
    stats: {atk: 3},
    effect: "Grants Atk+3."
  },
  {
    name: "Atk Smoke 1",
    icon: "26-8",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk-3 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Atk Smoke 2",
    icon: "26-9",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk-5 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Atk Smoke 3",
    icon: "26-10",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk-7 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Brash Assault 1",
    icon: "6-0",
    effect: "Unit automatically makes a follow-up when at HP ≤ 30% and attacking a foe that can counter."
  },
  {
    name: "Brash Assault 2",
    icon: "6-1",
    effect: "Unit automatically makes a follow-up when at HP ≤ 40% and attacking a foe that can counter."
  },
  {
    name: "Brash Assault 3",
    icon: "6-2",
    effect: "Unit automatically makes a follow-up when at HP ≤ 50% and attacking a foe that can counter."
  },
  {
    name: "Breath of Life 1",
    icon: "10-2",
    effect: "If unit initiates attack, adjacent allies recover 3 HP after combat."
  },
  {
    name: "Breath of Life 2",
    icon: "10-3",
    effect: "If unit initiates attack, adjacent allies recover 5 HP after combat."
  },
  {
    name: "Breath of Life 3",
    icon: "10-4",
    effect: "If unit initiates attack, adjacent allies recover 7 HP after combat."
  },
  {
    name: "Close Def 1",
    icon: "19-10",
    effect: "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+2 during combat."
  },
  {
    name: "Close Def 2",
    icon: "19-11",
    effect: "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+4 during combat."
  },
  {
    name: "Close Def 3",
    icon: "19-12",
    effect: "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+6 during combat."
  },
  {
    name: "Def Ploy 1",
    icon: "20-2",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-3 until the end of foe's next action."
  },
  {
    name: "Def Ploy 2",
    icon: "20-3",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-4 until the end of foe's next action."
  },
  {
    name: "Def Ploy 3",
    icon: "20-4",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-5 until the end of foe's next action."
  },
  {
    name: "Defense +1",
    icon: "1-0",
    stats: {def: 1},
    effect: "Grants Def+1."
  },
  {
    name: "Defense +2",
    icon: "1-1",
    stats: {def: 2},
    effect: "Grants Def+2."
  },
  {
    name: "Defense +3",
    icon: "1-2",
    stats: {def: 3},
    effect: "Grants Def+3."
  },
  {
    name: "Deflect Magic 1",
    icon: "29-4",
    effect: "If unit receives consecutive attacks from a foe using magic, damage from second attack onward reduced by 30%."
  },
  {
    name: "Deflect Magic 2",
    icon: "29-5",
    effect: "If unit receives consecutive attacks from a foe using magic, damage from second attack onward reduced by 50%."
  },
  {
    name: "Deflect Magic 3",
    icon: "29-6",
    effect: "If unit receives consecutive attacks from a foe using magic, damage from second attack onward reduced by 80%."
  },
  {
    name: "Deflect Melee 1",
    icon: "28-11",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    effect: "If unit receives consecutive attacks from a foe using a sword, lance, or axe, damage from second attack onward reduced by 30%."
  },
  {
    name: "Deflect Melee 2",
    icon: "28-12",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    effect: "If unit receives consecutive attacks from a foe using a sword, lance, or axe, damage from second attack onward reduced by 50%."
  },
  {
    name: "Deflect Melee 3",
    icon: "29-0",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    effect: "If unit receives consecutive attacks from a foe using a sword, lance, or axe, damage from second attack onward reduced by 80%."
  },
  {
    name: "Deflect Missile 1",
    icon: "29-1",
    effect: "If unit receives consecutive attacks from a foe using a bow or dagger, damage from second attack onward reduced by 30%."
  },
  {
    name: "Deflect Missile 2",
    icon: "29-2",
    effect: "If unit receives consecutive attacks from a foe using a bow or dagger, damage from second attack onward reduced by 50%."
  },
  {
    name: "Deflect Missile 3",
    icon: "29-3",
    effect: "If unit receives consecutive attacks from a foe using a bow or dagger, damage from second attack onward reduced by 80%."
  },
  {
    name: "Distant Def 1",
    icon: "16-10",
    effect: "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+2 during combat."
  },
  {
    name: "Distant Def 2",
    icon: "16-11",
    effect: "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+4 during combat."
  },
  {
    name: "Distant Def 3",
    icon: "16-12",
    effect: "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+6 during combat."
  },
  {
    name: "Drive Def 1",
    icon: "18-10",
    effect: "Grants allies within 2 spaces Def+2 during combat."
  },
  {
    name: "Drive Def 2",
    icon: "18-11",
    effect: "Grants allies within 2 spaces Def+3 during combat."
  },
  {
    name: "Embla's Ward",
    icon: "16-9",
    include: [{name: "Veronica"}],
    effect: "Unit receives 0 damage."
  },
  {
    name: "Fortify Def 1",
    icon: "12-6",
    effect: "Grants adjacent allies Def+2 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Def 2",
    icon: "12-7",
    effect: "Grants adjacent allies Def+3 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Def 3",
    icon: "12-8",
    effect: "Grants adjacent allies Def+4 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Res 1",
    icon: "12-9",
    effect: "Grants adjacent allies Res+2 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Res 2",
    icon: "12-10",
    effect: "Grants adjacent allies Res+3 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Res 3",
    icon: "12-11",
    effect: "Grants adjacent allies Res+4 through their next actions at the start of each turn."
  },
  {
    name: "Fortress Res 1",
    icon: "25-0",
    stats: {atk: -3, res: 3},
    effect: "Grants Res+3. Inflicts Atk-3."
  },
  {
    name: "Fortress Res 2",
    icon: "25-1",
    stats: {atk: -3, res: 4},
    effect: "Grants Res+4. Inflicts Atk-3."
  },
  {
    name: "Fortress Res 3",
    icon: "25-2",
    stats: {atk: -3, res: 5},
    effect: "Grants Res+5. Inflicts Atk-3."
  },
  {
    name: "Guidance 1",
    icon: "25-8",
    include: [{moveType: "Flying"}],
    effect: "If unit has 100% HP, infantry and armored allies within 2 spaces can move to a space adjacent to unit."
  },
  {
    name: "Guidance 2",
    icon: "25-9",
    include: [{moveType: "Flying"}],
    effect: "If unit has ≥ 50% HP, infantry and armored allies within 2 spaces can move to a space adjacent to unit."
  },
  {
    name: "Guidance 3",
    icon: "25-10",
    include: [{moveType: "Flying"}],
    effect: "Infantry and armored allies within 2 spaces can move to a space adjacent to unit."
  },
  {
    name: "Hardy Bearing 1",
    icon: "24-8",
    effect: "Disables skills that change unit's attack priority. If unit has 100% HP at start of battle, enemy skills that change attack priority are also disabled."
  },
  {
    name: "Hardy Bearing 2",
    icon: "24-9",
    effect: "Disables skills that change unit's attack priority. If unit has ≥ 50% HP at start of battle, enemy skills that change attack priority are also disabled."
  },
  {
    name: "Hardy Bearing 3",
    icon: "24-10",
    effect: "Disables skills that change unit's attack priority. Enemy skills that change attack priority are also disabled."
  },
  {
    name: "Heavy Blade 1",
    icon: "15-11",
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Atk - foe's Atk ≥ 5, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Heavy Blade 2",
    icon: "15-12",
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Atk - foe's Atk ≥ 3, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Heavy Blade 3",
    icon: "16-0",
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Atk - foe's Atk ≥ 1, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Hone Atk 1",
    icon: "12-0",
    effect: "Grants adjacent allies Atk+2 through their next actions at the start of each turn."
  },
  {
    name: "Hone Atk 2",
    icon: "12-1",
    effect: "Grants adjacent allies Atk+3 through their next actions at the start of each turn."
  },
  {
    name: "Hone Atk 3",
    icon: "12-2",
    effect: "Grants adjacent allies Atk+4 through their next actions at the start of each turn."
  },
  {
    name: "Hone Spd 1",
    icon: "12-3",
    effect: "Grants adjacent allies Spd+2 through their next actions at the start of each turn."
  },
  {
    name: "Hone Spd 2",
    icon: "12-4",
    effect: "Grants adjacent allies Spd+3 through their next actions at the start of each turn."
  },
  {
    name: "Hone Spd 3",
    icon: "12-5",
    effect: "Grants adjacent allies Spd+4 through their next actions at the start of each turn."
  },
  {
    name: "HP +3",
    icon: "0-4",
    stats: {"hp": 3},
    effect: "Grants +3 to max HP."
  },
  {
    name: "HP +4",
    icon: "0-5",
    stats: {"hp": 4},
    effect: "Grants +4 to max HP."
  },
  {
    name: "HP +5",
    icon: "0-6",
    stats: {"hp": 5},
    effect: "Grants +5 to max HP."
  },
  {
    name: "Initiate Seal Atk 1",
    icon: "0-7",
    stats: {atk: 1},
    effect: "Grants Atk+1."
  },
  {
    name: "Initiate Seal Atk 2",
    icon: "0-8",
    stats: {atk: 2},
    effect: "Grants Atk+2."
  },
  {
    name: "Initiate Seal Atk 3",
    icon: "0-9",
    stats: {atk: 3},
    effect: "Grants Atk+3."
  },
  {
    name: "Initiate Seal Def 1",
    icon: "1-0",
    stats: {def: 1},
    effect: "Grants Def+1."
  },
  {
    name: "Initiate Seal Def 2",
    icon: "1-1",
    stats: {def: 2},
    effect: "Grants Def+2."
  },
  {
    name: "Initiate Seal Def 3",
    icon: "1-2",
    stats: {def: 3},
    effect: "Grants Def+3."
  },
  {
    name: "Initiate Seal HP 1",
    icon: "0-4",
    stats: {"hp": 3},
    effect: "Grants +3 to max HP."
  },
  {
    name: "Initiate Seal HP 2",
    icon: "0-5",
    stats: {"hp": 4},
    effect: "Grants +4 to max HP."
  },
  {
    name: "Initiate Seal HP 3",
    icon: "0-6",
    stats: {"hp": 5},
    effect: "Grants +5 to max HP."
  },
  {
    name: "Initiate Seal Res 1",
    icon: "1-3",
    stats: {res: 1},
    effect: "Grants Res+1."
  },
  {
    name: "Initiate Seal Res 2",
    icon: "1-4",
    stats: {res: 2},
    effect: "Grants Res+2."
  },
  {
    name: "Initiate Seal Res 3",
    icon: "1-5",
    stats: {res: 3},
    effect: "Grants Res+3."
  },
  {
    name: "Initiate Seal Spd 1",
    icon: "0-10",
    stats: {spd: 1},
    effect: "Grants Spd+1."
  },
  {
    name: "Initiate Seal Spd 2",
    icon: "0-11",
    stats: {spd: 2},
    effect: "Grants Spd+2."
  },
  {
    name: "Initiate Seal Spd 3",
    icon: "0-12",
    stats: {spd: 3},
    effect: "Grants Spd+3."
  },
  {
    name: "Iote's Shield",
    icon: "4-4",
    include: [{moveType:"Flying"}],
    effect: "Neutralizes \"effective against\" bonuses."
  },
  {
    name: "Múspellflame",
    icon: "33-6",
    include: [{"name": "Surtr"}],
    effect: "Unit receives 0 damage."
  },
  {
    name: "Panic Ploy 1",
    icon: "19-2",
    effect: "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 5 or more lower than unit through foe's next action."
  },
  {
    name: "Panic Ploy 2",
    icon: "19-3",
    effect: "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 3 or more lower than unit through foe's next action."
  },
  {
    name: "Panic Ploy 3",
    icon: "19-4",
    effect: "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 1 or more lower than unit through foe's next action."
  },
  {
    name: "Phantom Spd 1",
    icon: "20-11",
    effect: "When any skill compares this unit's Spd stat to another unit's, this unit's Spd stat is counted as +5 over actual value."
  },
  {
    name: "Phantom Spd 2",
    icon: "20-12",
    effect: "When any skill compares this unit's Spd stat to another unit's, this unit's Spd stat is counted as +8 over actual value."
  },
  {
    name: "Phantom Spd 3",
    icon: "21-0",
    effect: "When any skill compares this unit's Spd stat to another unit's, this unit's Spd stat is counted as +10 over actual value."
  },
  {
    name: "Poison Strike 1",
    icon: "6-9",
    exclude: [{weaponType: "Staff"}],
    effect: "Inflicts 4 damage to foe after any combat this unit initiates."
  },
  {
    name: "Poison Strike 2",
    icon: "6-10",
    exclude: [{weaponType: "Staff"}],
    effect: "Inflicts 7 damage to foe after any combat this unit initiates."
  },
  {
    name: "Poison Strike 3",
    icon: "6-11",
    exclude: [{weaponType: "Staff"}],
    effect: "Inflicts 10 damage to foe after any combat this unit initiates."
  },
  {
    name: "Quick Riposte 1",
    icon: "6-3",
    effect: "Unit automatically makes a follow-up attack if attacked at HP ≥ 90%."
  },
  {
    name: "Quick Riposte 2",
    icon: "6-4",
    effect: "Unit automatically makes a follow-up attack if attacked at HP ≥ 80%."
  },
  {
    name: "Quick Riposte 3",
    icon: "6-5",
    effect: "Unit automatically makes a follow-up attack if attacked at HP ≥ 70%."
  },
  {
    name: "Quickened Pulse",
    icon: "18-4",
    effect: "Special cooldown count -1 at start of Turn 1."
  },
  {
    name: "Resistance +1",
    icon: "1-3",
    stats: {res: 1},
    effect: "Grants Res+1."
  },
  {
    name: "Resistance +2",
    icon: "1-4",
    stats: {res: 2},
    effect: "Grants Res+2."
  },
  {
    name: "Resistance +3",
    icon: "1-5",
    stats: {res: 3},
    effect: "Grants Res+3."
  },
  {
    name: "Savage Blow 1",
    icon: "10-5",
    effect: "If unit initiates attack, foes within 2 spaces of target take 3 damage after combat."
  },
  {
    name: "Savage Blow 2",
    icon: "10-6",
    effect: "If unit initiates attack, foes within 2 spaces of target take 5 damage after combat."
  },
  {
    name: "Savage Blow 3",
    icon: "10-7",
    effect: "If unit initiates attack, foes within 2 spaces of target take 7 damage after combat."
  },
  {
    name: "Seal Atk 1",
    icon: "7-5",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Atk-3 through its next action."
  },
  {
    icon: "7-6",
    name: "Seal Atk 2",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Atk-5 through its next action."
  },
  {
    icon: "7-7",
    name: "Seal Atk 3",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Atk-7 through its next action."
  },
  {
    name: "Speed +1",
    icon: "0-10",
    stats: {spd: 1},
    effect: "Grants Spd+1."
  },
  {
    name: "Speed +2",
    icon: "0-11",
    stats: {spd: 2},
    effect: "Grants Spd+2."
  },
  {
    name: "Speed +3",
    icon: "0-12",
    stats: {spd: 3},
    effect: "Grants Spd+3."
  },
  {
    name: "Spur Atk 1",
    icon: "10-8",
    effect: "Grants adjacent allies Atk+2 during combat."
  },
  {
    name: "Spur Atk 2",
    icon: "10-9",
    effect: "Grants adjacent allies Atk+3 during combat."
  },
  {
    name: "Spur Atk 3",
    icon: "10-10",
    effect: "Grants adjacent allies Atk+4 during combat."
  },
  {
    name: "Spur Def 1",
    icon: "11-1",
    effect: "Grants adjacent allies Def+2 during combat."
  },
  {
    name: "Spur Def 2",
    icon: "11-2",
    effect: "Grants adjacent allies Def+3 during combat."
  },
  {
    name: "Spur Def 3",
    icon: "11-3",
    effect: "Grants adjacent allies Def+4 during combat."
  },
  {
    name: "Spur Res 1",
    icon: "11-4",
    effect: "Grants adjacent allies Res+2 during combat."
  },
  {
    name: "Spur Res 2",
    icon: "11-5",
    effect: "Grants adjacent allies Res+3 during combat."
  },
  {
    name: "Spur Res 3",
    icon: "11-6",
    effect: "Grants adjacent allies Res+4 during combat."
  },
  {
    name: "Spur Spd 1",
    icon: "10-11",
    effect: "Grants adjacent allies Spd+2 during combat."
  },
  {
    name: "Spur Spd 2",
    icon: "10-12",
    effect: "Grants adjacent allies Spd+3 during combat."
  },
  {
    name: "Spur Spd 3",
    icon: "11-1",
    effect: "Grants adjacent allies Spd+4 during combat."
  },
  {
    name: "Squad Ace A 1",
    icon: "21-1",
    stats: {"hp": 3},
    effect: "Grants HP+3."
  },
  {
    name: "Squad Ace A 2",
    icon: "21-2",
    stats: {"hp": 4},
    effect: "Grants HP+4."
  },
  {
    name: "Squad Ace A 3",
    icon: "21-3",
    stats: {"hp": 5},
    effect: "Grants HP+5."
  },
  {
    name: "Squad Ace B 1",
    icon: "21-4",
    stats: {def: 1},
    effect: "Grants Def+1."
  },
  {
    name: "Squad Ace B 2",
    icon: "21-5",
    stats: {def: 2},
    effect: "Grants Def+2."
  },
  {
    name: "Squad Ace B 3",
    icon: "21-6",
    stats: {def: 3},
    effect: "Grants Def+3."
  },
  {
    name: "Squad Ace C 1",
    icon: "21-7",
    stats: {res: 1},
    effect: "Grants Res+1."
  },
  {
    name: "Squad Ace C 2",
    icon: "21-8",
    stats: {res: 2},
    effect: "Grants Res+2."
  },
  {
    name: "Squad Ace C 3",
    icon: "21-9",
    stats: {res: 3},
    effect: "Grants Res+3."
  },
  {
    name: "Squad Ace D 1",
    icon: "21-10",
    stats: {spd: 1},
    effect: "Grants Spd+1."
  },
  {
    name: "Squad Ace D 2",
    icon: "21-11",
    stats: {spd: 2},
    effect: "Grants Spd+2."
  },
  {
    name: "Squad Ace D 3",
    icon: "21-12",
    stats: {spd: 3},
    effect: "Grants Spd+3."
  },
  {
    name: "Squad Ace E 1",
    icon: "22-0",
    stats: {atk: 1},
    effect: "Grants Atk+1."
  },
  {
    name: "Squad Ace E 2",
    icon: "22-1",
    stats: {atk: 2},
    effect: "Grants Atk+2."
  },
  {
    name: "Squad Ace E 3",
    icon: "22-2",
    stats: {atk: 3},
    effect: "Grants Atk+3."
  },
  {
    name: "Squad Ace F 1",
    icon: "21-1",
    stats: {"hp": 3},
    effect: "Grants HP+3."
  },
  {
    name: "Squad Ace F 2",
    icon: "21-2",
    stats: {"hp": 4},
    effect: "Grants HP+4."
  },
  {
    name: "Squad Ace F 3",
    icon: "21-3",
    stats: {"hp": 5},
    effect: "Grants HP+5."
  },
  {
    name: "Squad Ace G 1",
    icon: "21-4",
    stats: {def: 1},
    effect: "Grants Def+1."
  },
  {
    name: "Squad Ace G 2",
    icon: "21-5",
    stats: {def: 2},
    effect: "Grants Def+2."
  },
  {
    name: "Squad Ace G 3",
    icon: "21-6",
    stats: {def: 3},
    effect: "Grants Def+3."
  },
  {
    name: "Squad Ace H 1",
    icon: "21-7",
    stats: {res: 1},
    effect: "Grants Res+1."
  },
  {
    name: "Squad Ace H 2",
    icon: "21-8",
    stats: {res: 2},
    effect: "Grants Res+2."
  },
  {
    name: "Squad Ace H 3",
    icon: "21-9",
    stats: {res: 3},
    effect: "Grants Res+3."
  },
  {
    name: "Squad Ace I 1",
    icon: "21-10",
    stats: {spd: 1},
    effect: "Grants Spd+1."
  },
  {
    name: "Squad Ace I 2",
    icon: "21-11",
    stats: {spd: 2},
    effect: "Grants Spd+2."
  },
  {
    name: "Squad Ace I 3",
    icon: "21-12",
    stats: {spd: 3},
    effect: "Grants Spd+3."
  },
  {
    name: "Squad Ace J 1",
    icon: "22-0",
    stats: {atk: 1},
    effect: "Grants Atk+1."
  },
  {
    name: "Squad Ace J 2",
    icon: "22-1",
    stats: {atk: 2},
    effect: "Grants Atk+2."
  },
  {
    name: "Squad Ace J 3",
    icon: "22-2",
    stats: {atk: 3},
    effect: "Grants Atk+3."
  },
  {
    name: "Threaten Atk 1",
    icon: "13-5",
    effect: "Inflicts Atk-3 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Atk 2",
    icon: "13-6",
    effect: "Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Atk 3",
    icon: "13-7",
    effect: "Inflicts Atk-5 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Spd 1",
    icon: "13-8",
    effect: "Inflicts Spd-3 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Spd 2",
    icon: "13-9",
    effect: "Inflicts Spd-4 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Spd 3",
    icon: "13-10",
    effect: "Inflicts Spd-5 on foes within 2 spaces through their next actions at the start of each turn."
  },

];

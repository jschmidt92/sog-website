---
title: 'Knowledge Base - Medical'
---

# Medical Function

## Description
This function adds support for ACE 3 medical training.

The mission maker must define dummy units and objects, the framework will monitor the status of those units as well as spawn the units on specified object.

A wound type must be set, specifying the type of wound the dummy spawns with.

## Usage
### Setup Medical Area
1. Setup the Medical set
2. Place down the dummy unit(s) and object(s)
3. Call the `SOG_fnc_spawnVictim` and `SOG_fnc_victimCheck` function within the dummys' init field that links the dummy to the function

```js
Arguments:
	0: OBJECT - The AI unit
	1: OBJECT - The Object

Example:
	[unitName, objectName] call SOG_fnc_spawnVictim;
```

```js
Arguments:
	0: OBJECT - The AI unit
	1: STRING - The Type of wound

Example:
	// Wound Types Can Be: CA, randomWound, explosionWound, gunshotWound, impactWound, stabWound
	[unitName, "woundType"] call SOG_fnc_victimCheck;
```

```js
Expected Example:
	[unitName, objectName] call SOG_fnc_spawnVictim; [unitName, "woundType"] call SOG_fnc_victimCheck;
```

## Links
[Home](/knowledgebase/functions) |
[Ambient FNC](/knowledgebase/functions/ambient) |
[Briefing FNC](/knowledgebase/functions/briefing) |
[Medical FNC](/knowledgebase/functions/medical) |
[Service FNC](/knowledgebase/functions/service)
---
title: 'Knowledge Base - Ambient'
---

# Ambient

## Description
This functions adds support to create a sound source that plays an ambient sfx sound.

The mission maker must define the object for the sound source, the function will then play the ambient sfx sound.

## Usage
### Setup Mission Ambients
1. Setup Ambient Environment
2. Place down the object
3. Call the `SOG_fnc_ambientSound` function within the object's init field to create the sound source for the specified ambient fx sound

```js
Arguments:
	0: OBJECT - The object that creates the sound source
	1: STRING - SFX sound that will play at object location
	2: NUMBER - Amount of time the SFX sound will play (Optional, default: null)

Example:
	[object, "NameOfSFXSound"] call SOG_fnc_ambientSound;
	[object, "NameOfSFXSound", NumberOfSec] spawn SOG_fnc_ambientSound;
```

## Links
[Home](/knowledgebase/functions) |
[Ambient FNC](/knowledgebase/functions/ambient) |
[Briefing FNC](/knowledgebase/functions/briefing) |
[Medical FNC](/knowledgebase/functions/medical) |
[Service FNC](/knowledgebase/functions/service)
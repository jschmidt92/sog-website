---
title: 'Knowledge Base - Briefing'
---

# Briefing

## Description
This function adds support to create a Briefing with a Lecture/Slideshow.

The mission maker must define the unit for the briefing, the function will then play the briefing.

An object can then be set, specifying the different slides to cycle through.

## Usage
### Setup Unit
1. Setup the Lecture/Briefing set
2. Place down the unit
3. Call the `SOG_fnc_spawnLecture` function within the unit's init field that links the unit to the Lecture/Briefing

```js
Arguments:
	0: OBJECT - The unit that will play given lecture
	1: STRING - The topic of the lecture
	2: STRING - The sentence of the lecture

Example:
	[unitName, "topicName", "sentenceName"] call SOG_fnc_spawnLecture;
```

### Setup Object(s)
4. Place down the object(s) _(Optional)_
5. Call the `SOG_fnc_spawnPresentation` function within the objects' init field that links the object to the Lecture/Briefing _(Optional, **Object(s) Must Be Placed**)_

```js
Arguments:
	0: OBJECT - The object that will display the presentation
	1: ARRAY - The slides that will be used for the presentation
	1-0: STRING - The texture of the slide
	1-1: NUMBER - Amount of time the slide will be displayed

Example:
	[unitName, "topicName", "sentenceName"] call SOG_fnc_spawnLecture;
	_arrayName = [["filePath\fileName.paa", NumberOfSec],["filePath\fileName.paa", NumberOfSec]];
	[object, _arrayName] spawn SOG_fnc_spawnPresentation;
```

### Setup Script
6. Create a script for briefing _(Optional)_

```js
Example:
	[unitName, "topicName", "sentenceName"] call SOG_fnc_spawnLecture;

	_arrayName = [
		["filePath\fileName.paa", NumberOfSec],
		["filePath\fileName.paa", NumberOfSec],
		["filePath\fileName.paa", NumberOfSec]
	];

	[object, _arrayName] spawn SOG_fnc_spawnPresentation;
```

7. Call the script using an addAction function within an object's or item's init field that creates the Lecture/Briefing _(Optional, **Object(s) Must Be Placed**)_

```js
Example:
this addAction ["Start Briefing", "scriptName.sqf"];
```

## Links
[Home](/knowledgebase/functions) |
[Ambient FNC](/knowledgebase/functions/ambient) |
[Briefing FNC](/knowledgebase/functions/briefing) |
[Medical FNC](/knowledgebase/functions/medical) |
[Service FNC](/knowledgebase/functions/service)
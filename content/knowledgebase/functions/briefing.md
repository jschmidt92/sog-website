---
title: 'Knowledge Base - Briefing'
---

# Briefing

## Description
This function adds support to create a Briefing with a Lecture/Slideshow.

The mission maker can define the unit for the briefing, the function will then play the briefing.

An object(s) and controller(s) can then be set, specifying the different slides to cycle through.

## Usage
### Setup Unit
1. Setup the Lecture/Briefing set
2. Place down the screen object(s)
3. Place down the controller object(s)
4. Place down the unit _(Optional)_

### Setup Script
5. Create a script for briefing/lecture

```js
Example:
	_arrayName = [
		["filePath\fileName.paa", numberOfSec],
		["filePath\fileName.paa", numberOfSec],
		["filePath\fileName.paa", numberOfSec]
	];

	[[object(s)], [controller(s)], _arrayName] call SOG_fnc_initSlideShow;
```

```js
Example:
	_arrayName = [
		["filePath\fileName.paa", numberOfSec],
		["filePath\fileName.paa", numberOfSec],
		["filePath\fileName.paa", numberOfSec]
	];

	[[object(s)], [controller(s)], _arraName, true, [unitName], "topicName", "sentenceName"] remoteExecCall ["SOG_fnc_initSlideShow", 2, false];
```

6. Call the script from `initServer.sqf`_

```js
Example:
[] execVM "filePath\scriptName.sqf";
```

## Links
[Home](/knowledgebase/functions) |
[Ambient FNC](/knowledgebase/functions/ambient) |
[Briefing FNC](/knowledgebase/functions/briefing) |
[Medical FNC](/knowledgebase/functions/medical) |
[Service FNC](/knowledgebase/functions/service)
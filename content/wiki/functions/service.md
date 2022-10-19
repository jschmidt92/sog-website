---
title: 'Knowledge Base - Service'
---

# Service

## Description
This function adds support for Vehicle Services.

The mission maker must create a trigger, the framework will monitor the trigger activation.

## Usage
### Setup Service Area
1. Setup the Service Area set
2. Place down a trigger
3. Set the type of vehicle within the trigger's condition field

```js
Example:
	call { {_x iskindof "vehicleKind" && speed _x < 1} count thisList > 0; };
```

4. Call the `SOG_fnc_serviceVehicle` function within the trigger's onActivation field that links the trigger to the function

```js
Example:
	call { _handle = [(thisList select 0), "vehicleKind"] spawn SOG_fnc_serviceVehicle; };
```

## Links
[Home](/knowledgebase/functions) |
[Ambient FNC](/knowledgebase/functions/ambient) |
[Briefing FNC](/knowledgebase/functions/briefing) |
[Medical FNC](/knowledgebase/functions/medical) |
[Service FNC](/knowledgebase/functions/service)
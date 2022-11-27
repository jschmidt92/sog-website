<script setup>
import { useBriefingStore } from '@/stores/briefing'

const briefingStore = useBriefingStore()

defineProps({
	briefingObject: { type: Object, required: true }
})

function removeBriefing(id) {
	briefingStore.deleteBriefing(id)
}

function copyToClipboard() {
	var copyText = document.getElementById("outputText")
	
	copyText.select()
	copyText.setSelectionRange(0, 99999)

	navigator.clipboard.writeText(copyText.value)
}

function convertLineBreaks(str) {
	return str.split("\n").join("\n<br/>")
}
</script>

<template>
	<div class="card">
		<div class="card-body">
			<div class="card-header">
				<div>
					<h3>Navigate to SOGFramework\config\briefing\ and paste the following into the .sqf file based on the players' side.</h3>
					<p class="card-meta">// This briefing file was created with the Briefing Generator Tool</p>
				</div>
				<div class="btn-group">
					<button class="btn btn-primary-outline" @click="copyToClipboard()">Copy to Clipboard</button>
					<button class="btn btn-danger" @click="removeBriefing(briefingObject.id)">Delete</button>
				</div>
			</div>
			
			<div class="card-meta-child">
				<textarea rows="25" readonly="true" id="outputText" class="card-meta-code">NEWTAB("I. Organisation")
					<br/><font color='{{ briefingObject.side }}' size='18' face='PuristaBold'>BLUFOR ORBAT</font>
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>{{ convertLineBreaks(briefingObject.faction) }}</font>
					<br/>{{ convertLineBreaks(briefingObject.groups) }}
					ENDTAB;

					NEWTAB("II. Situation")
					<br/><font color='{{ briefingObject.side }}' size='18' face='PuristaBold'>SUMMARY</font>
					<br/>{{ convertLineBreaks(briefingObject.summary) }}
					<br/>
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='18' face='PuristaBold'>AREA OF OPERATIONS</font>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>Terrain</font>
					<br/>{{ convertLineBreaks(briefingObject.terrain) }}
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>Weather</font>
					<br/><font size='12' face='PuristaMedium'>Current:</font>
					<br/>{{ convertLineBreaks(briefingObject.weather_current) }}
					<br/>
					<br/><font size='12' face='PuristaMedium'>Forecast:</font>
					<br/>{{ convertLineBreaks(briefingObject.weather_forecast) }}
					<br/>
					<br/><font size='12' face='PuristaMedium'>Visibility:</font>
					<br/>{{ convertLineBreaks(briefingObject.weather_visibility) }}
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>Civilian presence</font>
					<br/>{{ convertLineBreaks(briefingObject.civilians) }}
					<br/>
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='18' face='PuristaBold'>ENEMY FORCES</font>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>Composition and Strength</font>
					<br/>{{ convertLineBreaks(briefingObject.composition) }}
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>Capabilities:</font>
					<br/><font size='12' face='PuristaMedium'>Armour:</font>
					<br/>{{ convertLineBreaks(briefingObject.armour) }}
					<br/>
					<br/><font size='12' face='PuristaMedium'>Air:</font>
					<br/>{{ convertLineBreaks(briefingObject.air) }}
					<br/>
					<br/><font size='12' face='PuristaMedium'>Artillery:</font>
					<br/>{{ convertLineBreaks(briefingObject.artillery) }}
					<br/>
					<br/><font size='12' face='PuristaMedium'>Explosives:</font>
					<br/>{{ convertLineBreaks(briefingObject.explosives) }}
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>Rules of engagement:</font>
					<br/>{{ convertLineBreaks(briefingObject.roe) }}
					ENDTAB;

					NEWTAB("III. Mission:")
					<br/><font color='{{ briefingObject.side }}' size='18' face='PuristaBold'>MISSION INTENT</font>
					<br/>{{ convertLineBreaks(briefingObject.intent) }}
					ENDTAB;

					NEWTAB("IV. Support & Logistics:")
					<br/><font color='{{ briefingObject.side }}' size='18' face='PuristaBold'>SUPPORT</font>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>Available supports:</font>
					<br/>{{ convertLineBreaks(briefingObject.supports) }}
					<br/>
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='18' face='PuristaBold'>LOGISTICS</font>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>Maintenance:</font>
					<br/>{{ convertLineBreaks(briefingObject.maintenance) }}
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>Transportation:</font>
					<br/>{{ convertLineBreaks(briefingObject.transportation) }}
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>Resupplies:</font>
					<br/>{{ convertLineBreaks(briefingObject.resupplies) }}
					<br/>
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='18' face='PuristaBold'>SIGNALS</font>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>Radio frequencies</font>
					<br/>{{ convertLineBreaks(briefingObject.frequencies) }}
					<br/>
					ENDTAB;

					NEWTAB("V. Notes:")
					<br/><font color='{{ briefingObject.side }}' size='18' face='PuristaBold'>RESPAWNS</font>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>Player respawn</font>
					<br/>{{ convertLineBreaks(briefingObject.player_respawn) }}
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>Asset respawn</font>
					<br/>{{ convertLineBreaks(briefingObject.asset_respawn) }}
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>Reinsertion</font>
					<br/>{{ convertLineBreaks(briefingObject.reinsertion) }}
					<br/>
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='18' face='PuristaBold'>END CONDITIONS</font>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>Success</font>
					<br/>{{ convertLineBreaks(briefingObject.success) }}
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='14' face='PuristaSemiBold'>Failure</font>
					<br/>{{ convertLineBreaks(briefingObject.failure) }}
					<br/>
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='18' face='PuristaBold'>RESTRICTIONS</font>
					<br/>{{ convertLineBreaks(briefingObject.restrictions) }}
					<br/>
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='18' face='PuristaBold'>JIP</font>
					<br/>{{ convertLineBreaks(briefingObject.jip) }}
					<br/>
					<br/>
					<br/><font color='{{ briefingObject.side }}' size='18' face='PuristaBold'>Mission maker's notes</font>
					<br/>{{ convertLineBreaks(briefingObject.notes) }}
					ENDTAB;
				</textarea>
			</div>
		</div>
	</div>
</template>

<style scoped>
.btn {
	@apply px-4 py-2 mb-2;
}
.btn-danger {
	@apply bg-red-600 border border-red-600 ml-2 text-white hover:bg-red-800;
}
.btn-group {
	@apply flex flex-row items-center;
}
.btn-primary-outline {
	@apply bg-white border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white;
}
.card {
	@apply border-r border-b drop-shadow-sm bg-white p-4;
}
.card-body {
	@apply w-full max-w-none p-2;
}
.card-header {
	@apply flex justify-between items-center;
}
.card-meta {
	@apply text-gray-300 text-sm;
}
.card-meta-child {
	@apply flex justify-between items-center;
}
.card-meta-code {
	@apply bg-gray-100 border border-sky-400 whitespace-pre-line w-full;
}
</style>

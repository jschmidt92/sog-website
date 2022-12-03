<script setup>
import { useBriefingStore } from '@/stores/briefing'

const briefingStore = useBriefingStore()
const isOpen = ref(false)
const briefingObject = ref({
	faction: '',
	groups: '',
	summary: '',
	terrain: '',
	weather_current: '',
	weather_forecast: '',
	weather_visibility: '',
	civilians: '',
	composition: '',
	armour: '',
	air: '',
	artillery: '',
	explosives: '',
	roe: '',
	intent: '',
	supports: '',
	maintenance: '',
	transportation: '',
	resupplies: '',
	frequencies: '',
	player_respawn: '',
	asset_respawn: '',
	reinsertion: '',
	success: '',
	failure: '',
	restrictions: '',
	jip: '',
	notes: '',
	side: ''
})

function scrollToTop() {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

function addBriefing() {
	if (!briefingObject.value.faction || !briefingObject.value.groups || !briefingObject.value.summary || !briefingObject.value.roe || !briefingObject.value.intent || !briefingObject.value.frequencies || !briefingObject.value.success || !briefingObject.value.failure || !briefingObject.value.restrictions || !briefingObject.value.side) {
		isOpen.value = !isOpen.value
		scrollToTop()
		return {}
	}

	briefingStore.addBriefing(briefingObject.value)

	briefingObject.value = {
		faction: '',
		groups: '',
		summary: '',
		terrain: '',
		weather_current: '',
		weather_forecast: '',
		weather_visibility: '',
		civilians: '',
		composition: '',
		armour: '',
		air: '',
		artillery: '',
		explosives: '',
		roe: '',
		intent: '',
		supports: '',
		maintenance: '',
		transportation: '',
		resupplies: '',
		frequencies: '',
		player_respawn: '',
		asset_respawn: '',
		reinsertion: '',
		success: '',
		failure: '',
		restrictions: '',
		jip: '',
		notes: '',
		side: ''
	}
}
</script>

<template>
	<template v-if="isOpen">
		<Alert type="warning" head="Holy guacamole!" msg="You should check in on some of those fields below." @close="isOpen = false" />
	</template>

	<form class="card" @submit.prevent="addBriefing">
		<div class="card-body">
			<h1>Create Briefing</h1>
			<div>
				<div class="h4">I. ORGANIZATION</div>
				<ul>
					<li>
						<div class="card-subtitle h5">ORBAT</div>
						<label for="faction">Player Faction</label>
						<input type="text" name="faction" id="faction" class="input-text" placeholder="The players' faction (e.g. 101st Airborne Division, US Army)" v-model="briefingObject.faction">
					</li>
					<li>
						<label for="groups">List of Groups</label>
						<textarea name="groups" id="groups" rows="5" class="input-text" placeholder="A list of the player groups, their size and callsign (e.g. 1xAH-64E Apache - Callsign: RAPTOR etc.)" v-model="briefingObject.groups"></textarea>
					</li>
				</ul>
			</div>

			<div>
				<div class="h4">II. Situation</div>
				<ul>
					<div class="card-subtitle h5">Background</div>
					<li>
						<label for="summary">Summary</label>
						<textarea name="summary" id="summary" rows="3" class="input-text" placeholder="A short background story for the mission" v-model="briefingObject.summary"></textarea>
					</li>

					<div class="card-subtitle h5">Area of Operations</div>
					<div class="card-meta">Terrain</div>
					<li>
						<label for="terrain">Description</label>
						<input type="text" name="terrain" id="terrain" class="input-text" placeholder="Description of the terrain (e.g. big open fields with some forest patches etc.)" v-model="briefingObject.terrain">
					</li>

					<div class="card-meta">Weather</div>
					<li>
						<label for="weather_current">Current</label>
						<input type="text" name="weather_current" id="weather_current" class="input-text" placeholder="The current weather conditions (e.g. heavy fog, rain and etc.)" v-model="briefingObject.weather_current">
					</li>
					<li>
						<label for="weather_forecast">Forecast</label>
						<input type="text" name="weather_forecast" id="weather_forecast" class="input-text" placeholder="The forecasted weather conditions (e.g. no change in weather was forecasted)" v-model="briefingObject.weather_forecast">
					</li>
					<li>
						<label for="weather_visibility">Visibility</label>
						<input type="text" name="weather_visibility" id="weather_visibility" class="input-text" placeholder="Current visibility and light conditions (e.g. visibility is reduced to 200m due to the fog, daytime operation etc.)" v-model="briefingObject.weather_visibility">
					</li>

					<div class="card-meta">Civilian Presence</div>
					<li>
						<label for="civilians">Summary</label>
						<input type="text" name="civilians" id="civilians" class="input-text" placeholder="If there are any civilians in the AO, how they should be handled etc." v-model="briefingObject.civilians">
					</li>

					<div class="card-subtitle h5">Enemy Forces</div>
					<div class="card-meta">Composition and Strength</div>
					<li>
						<label for="composition">Description</label>
						<textarea type="text" name="composition" id="composition" rows="3" class="input-text" placeholder="Description of the enemy composition, strength and weaponry" v-model="briefingObject.composition"></textarea>
					</li>

					<div class="card-meta">Capabilities</div>
					<li>
						<label for="armour">Armour</label>
						<input type="text" name="armour" id="armour" class="input-text" placeholder="Maximum armour threat (e.g. up to BMP-2's)" v-model="briefingObject.armour">
					</li>
					<li>
						<label for="air">Air</label>
						<input type="text" name="air" id="air" class="input-text" placeholder="Maximum air thread (e.g. up to transport Mi-8's)" v-model="briefingObject.air">
					</li>
					<li>
						<label for="artillery">Artillery</label>
						<input type="text" name="artillery" id="artillery" class="input-text" placeholder="Artillery presence (e.g. they have access to mortars etc.)" v-model="briefingObject.artillery">
					</li>
					<li>
						<label for="explosives">Explosives</label>
						<input type="text" name="explosives" id="explosives" class="input-text" placeholder="Presence of mines, IED's, UXO's or other explosives" v-model="briefingObject.explosives">
					</li>
					
					<div class="card-meta">Rules of Engagement</div>
					<li>
						<label for="roe">Description</label>
						<textarea type="text" name="roe" id="roe" rows="3" class="input-text" placeholder="Summary of the ROE" v-model="briefingObject.roe"></textarea>
					</li>
				</ul>
			</div>

			<div>
				<div class="h4">III. Mission</div>
				<ul>
					<div class="card-subtitle h5">Mission Intent</div>
					<li>
						<label for="intent">Description</label>
						<textarea name="intent" id="intent" rows="3" class="input-text" placeholder="Intent of the mission and the objectives (e.g. your objective is to capture...)" v-model="briefingObject.intent"></textarea>
					</li>
				</ul>
			</div>

			<div>
				<div class="h4">IV. Support and Logistics</div>
				<ul>
					<div class="card-subtitle h5">Support</div>
					<li>
						<label for="supports">Available</label>
						<textarea name="supports" id="supports" rows="3" class="input-text" placeholder="Available friendly supports (e.g. CAS by RAPTOR, artillery fire support by HAMMER etc.)" v-model="briefingObject.supports"></textarea>
					</li>


					<div class="card-subtitle h5">Logistics</div>
					<li>
						<label for="maintenance">Maintenance</label>
						<textarea name="maintenance" id="maintenance" rows="3" class="input-text" placeholder="Information about RRR (e.g. RRR is available at the friendly FOB etc.)" v-model="briefingObject.maintenance"></textarea>
					</li>
					<li>
						<label for="transportation">Transportation</label>
						<textarea name="transportation" id="transportation" rows="3" class="input-text" placeholder="Available infantry transport (e.g. each squad will recieve 2x HMMWV etc.)" v-model="briefingObject.transportation"></textarea>
					</li>
					<li>
						<label for="resupplies">Resupplies</label>
						<textarea name="resupplies" id="resupplies" rows="3" class="input-text" placeholder="Available resupplies (e.g. 1x medical resupply crate is available, to be requested by the CO)" v-model="briefingObject.resupplies"></textarea>
					</li>

					<div class="card-subtitle h5">Signals</div>
					<li>
						<label for="frequencies">Radio Frequencies</label>
						<textarea name="frequencies" id="frequencies" rows="3" class="input-text" placeholder="The radio net structure used in the mission" v-model="briefingObject.frequencies"></textarea>
					</li>
				</ul>
			</div>

			<div>
				<div class="h4">V. Notes</div>
				<ul>
					<div class="card-subtitle h5">Respawns</div>
					<li>
						<label for="player_respawn">Player Respawn</label>
						<textarea name="player_respawn" id="player_respawn" rows="3" class="input-text" placeholder="Player respawn info (e.g. unlimited, rolling respawns, 5-minute respawn timer etc.)" v-model="briefingObject.player_respawn"></textarea>
					</li>
					<li>
						<label for="asset_respawn">Asset Respawn</label>
						<textarea name="asset_respawn" id="asset_respawn" rows="3" class="input-text" placeholder="Asset respawn info (e.g. 1x respawn for the Apache etc.)" v-model="briefingObject.asset_respawn"></textarea>
					</li>
					<li>
						<label for="reinsertion">Reinsertion</label>
						<textarea name="reinsertion" id="reinsertion" rows="3" class="input-text" placeholder="How the respawned players will get back to the AO (e.g. teleport via squad rally point system, transported with heli etc.)" v-model="briefingObject.reinsertion"></textarea>
					</li>
					<div class="card-subtitle h5">End Conditions</div>
					<li>
						<label for="success">Success</label>
						<textarea name="success" id="success" rows="3" class="input-text" placeholder="Mission Success conditions" v-model="briefingObject.success"></textarea>
					</li>
					<li>
						<label for="failure">Failure</label>
						<textarea name="failure" id="failure" rows="3" class="input-text" placeholder="Mission Failure conditions" v-model="briefingObject.failure"></textarea>
					</li>

					<div class="card-subtitle h5">Restrictions</div>
					<li>
						<label for="restrictions">Rules</label>
						<textarea name="restrictions" id="restrictions" rows="3" class="input-text" placeholder="Additional rules for the mission (e.g. don't take enemy vehicles etc.)" v-model="briefingObject.restrictions"></textarea>
					</li>

					<div class="card-subtitle h5">JIP</div>
					<li>
						<label for="jip">Available</label>
						<input type="text" name="jip" id="jip" class="input-text" placeholder="If Join-In-Progress is supported by the mission (e.g. available, 3-minute timer)" v-model="briefingObject.jip">
					</li>

					<div class="card-subtitle h5">Mission Maker's Notes</div>
					<li>
						<label for="notes">Notes</label>
						<textarea name="notes" id="notes" rows="3" class="input-text" placeholder="Additional notes by the mission maker" v-model="briefingObject.notes"></textarea>
					</li>
				</ul>
			</div>

			<div>
				<ul>
					<div class="card-subtitle h5">Side</div>
					<li>
						<select name="side" id="side" v-model="briefingObject.side">
							<option value="#21749c">BLUFOR</option>
							<option value="#9c2d21">REDFOR</option>
						</select>
					</li>
				</ul>
			</div>
		</div>
	</form>

	<div class="btn-group" role="group" aria-label="Button Group">
		<button type="submit" class="btn btn-outline-primary btn-lg" @click="addBriefing()">Create Briefing</button>
	</div>
</template>

<style scoped>
.h1, .h2, .h4, .h5, .h5, .h6, h1, h2, h4, h5, h5, h6 {
	@apply mt-0 mb-2 font-medium leading-5;
}
.h1, h1 {
	@apply text-4xl;
}
.h4, h4 {
	@apply text-3xl;
}
.h5, h5 {
	@apply text-2xl;
}
.h5, h5 {
	@apply text-xl;
}
li {
	@apply list-none;
}
input, select, textarea {
	@apply border-gray-300 focus:ring-sky-400 my-1 dark:bg-zinc-900 dark:border-black;
}
select {
	@apply w-1/4;
}
input, textarea {
	@apply w-full;
}
.btn {
	@apply inline-block;
}
.btn-lg {
	@apply px-4 py-2 text-xl w-1/4;
}
.btn-group {
	@apply flex flex-row justify-center;
}
.btn-outline-primary {
	@apply bg-white border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white;
}
.card-meta {
	@apply font-semibold text-base;
}
</style>

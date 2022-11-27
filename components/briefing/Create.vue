<script setup>
import { useBriefingStore } from '@/stores/briefing'

const briefingStore = useBriefingStore()
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

function addBriefing() {
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
	<form class="card" @submit.prevent="addBriefing">
		<h2>Create Briefing</h2>
		<div class="card-body">
			<div class="form-category">
				<h3>I. ORGANIZATION</h3>
				<ul>
					<li>
						<h4 class="card-subtitle">ORBAT</h4>
						<label for="faction">Player Faction</label>
						<input type="text" name="faction" id="faction" class="input-text" placeholder="The players' faction (e.g. 101st Airborne Division, US Army)" v-model="briefingObject.faction">
					</li>
					<li>
						<label for="groups">List of Groups</label>
						<textarea name="groups" id="groups" rows="5" class="input-text" placeholder="A list of the player groups, their size and callsign (e.g. 1xAH-64E Apache - Callsign: RAPTOR etc.)" v-model="briefingObject.groups"></textarea>
					</li>
				</ul>
			</div>

			<div class="form-category">
				<h3>II. Situation</h3>
				<ul>
					<h4 class="card-subtitle">Background</h4>
					<li>
						<label for="summary">Summary</label>
						<textarea name="summary" id="summary" rows="3" class="input-text" placeholder="A short background story for the mission" v-model="briefingObject.summary"></textarea>
					</li>

					<h4 class="card-subtitle">Area of Operations</h4>
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

					<h4 class="card-subtitle">Enemy Forces</h4>
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

			<div class="form-category">
				<h3>III. Mission</h3>
				<ul>
					<h4 class="card-subtitle">Mission Intent</h4>
					<li>
						<label for="intent">Description</label>
						<textarea name="intent" id="intent" rows="3" class="input-text" placeholder="Intent of the mission and the objectives (e.g. your objective is to capture...)" v-model="briefingObject.intent"></textarea>
					</li>
				</ul>
			</div>

			<div class="form-category">
				<h3>IV. Support and Logistics</h3>
				<ul>
					<h4 class="card-subtitle">Support</h4>
					<li>
						<label for="supports">Available</label>
						<textarea name="supports" id="supports" rows="3" class="input-text" placeholder="Available friendly supports (e.g. CAS by RAPTOR, artillery fire support by HAMMER etc.)" v-model="briefingObject.supports"></textarea>
					</li>


					<h4 class="card-subtitle">Logistics</h4>
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

					<h4 class="card-subtitle">Signals</h4>
					<li>
						<label for="frequencies">Radio Frequencies</label>
						<textarea name="frequencies" id="frequencies" rows="3" class="input-text" placeholder="The radio net structure used in the mission" v-model="briefingObject.frequencies"></textarea>
					</li>
				</ul>
			</div>

			<div class="form-category">
				<h3>V. Notes</h3>
				<ul>
					<h4 class="card-subtitle">Respawns</h4>
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
					<h4 class="card-subtitle">End Conditions</h4>
					<li>
						<label for="success">Success</label>
						<textarea name="success" id="success" rows="3" class="input-text" placeholder="Mission Success conditions" v-model="briefingObject.success"></textarea>
					</li>
					<li>
						<label for="failure">Failure</label>
						<textarea name="failure" id="failure" rows="3" class="input-text" placeholder="Mission Failure conditions" v-model="briefingObject.failure"></textarea>
					</li>

					<h4 class="card-subtitle">Restrictions</h4>
					<li>
						<label for="restrictions">Rules</label>
						<textarea name="restrictions" id="restrictions" rows="3" class="input-text" placeholder="Additional rules for the mission (e.g. don't take enemy vehicles etc.)" v-model="briefingObject.restrictions"></textarea>
					</li>

					<h4 class="card-subtitle">JIP</h4>
					<li>
						<label for="jip">Available</label>
						<input type="text" name="jip" id="jip" class="input-text" placeholder="If Join-In-Progress is supported by the mission (e.g. available, 3-minute timer)" v-model="briefingObject.jip">
					</li>

					<h4 class="card-subtitle">Mission Maker's Notes</h4>
					<li>
						<label for="notes">Notes</label>
						<textarea name="notes" id="notes" rows="3" class="input-text" placeholder="Additional notes by the mission maker" v-model="briefingObject.notes"></textarea>
					</li>
				</ul>
			</div>

			<div class="form-category">
				<ul>
					<h4 class="card-subtitle">Side</h4>
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

	<div class="btn-group">
		<button class="btn btn-primary-outline" @click="addBriefing()" v-if="briefingStore.isEmpty">Create Briefing</button>
	</div>
</template>

<style scoped>
h2 {
	@apply mb-0 pb-0;
}
li {
	@apply list-none;
}
select {
	@apply border-gray-300 focus:ring-sky-400 my-1 w-1/4;
}
.btn {
	@apply px-4 py-2 mb-2;
}
.btn-group {
	@apply flex flex-col justify-center mt-4 mx-auto w-1/4;
}
.btn-primary-outline {
	@apply bg-white border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white;
}
.card {
	@apply border-r border-b drop-shadow-sm bg-white mb-4 p-4;
}
.card-body {
	@apply w-full max-w-none p-2;
}
.card-meta {
	@apply font-semibold text-sm mt-1;
}
.input-text {
	@apply border-gray-300 focus:ring-sky-400 my-1 w-full;
}
</style>

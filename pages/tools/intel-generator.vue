<script setup>
import { onMounted, ref } from 'vue'
import { useIntelStore } from '@/utils/intel'

const store = useIntelStore()
const intelObject = ref({
	title: '',
	content: '',
	duration: '',
	deleteObject: false,
	shareGlobally: false
})

let intelObjects = ref([])
let showOutput = ref(false)

function generate() {
	showOutput.value = true
}

function addIntel() {
	if (!intelObject.value.title || !intelObject.value.content || !intelObject.value.duration) {
		return alert('Please enter title, content and duration of intel')
	}

	store.addIntel(intelObject.value)

	intelObject.value = {
		title: '',
		content: '',
		duration: '',
		deleteObject: false,
		shareGlobally: false
	}
}

function removeIntel(id) {
	store.deleteIntel(id)
}

function updateIntel(id) {
	store.updateIntel({ id, ...intelObject.value })
}

onMounted(() => {
	intelObjects.value = store.intelObjects
})

definePageMeta ({
  layout: false
})
</script>

<template>
	<div>
		<NuxtLayout name="tools">
			<template #header>
				<Header title="Check Out Our Latest Tools" subtitle="Learn. Share. Grow." meta="Intel Generator" />
			</template>

			<template #tool>
				<form @submit.prevent="addIntel">
					<div class="card">
						<div class="card-body">
							<h2>Add Intel</h2>

							<div class="grid grid-cols-1">
								<label class="font-medium">Title</label>
								<input 
									type="text"
									class="input-text"
									placeholder="Input Title Here"
									v-model="intelObject.title" />
							</div>

							<div>
								<label for="content" class="font-medium">Content</label>
								<div class="mt-1">
									<textarea 
										rows="5"
										class="input-text"
										placeholder="Input Content Here"
										v-model="intelObject.content"></textarea>
								</div>
							</div>

							<div class="flex items-center">
								<label for="duration" class="font-medium">Pick-up duration:</label>
								<input
									type="text"
									class="input-small"
									placeholder="5"
									v-model="intelObject.duration" /> <span class="font-medium">seconds</span>
							</div>

							<div class="flex items-center">
								<input 
									type="checkbox"
									id="deleteObject"
									class="input-checkbox"
									value="true"
									v-model="intelObject.deleteObject" />

								<label for="deleteObject" class="font-medium">Delete object after intel is acquired</label>
							</div>

							<div class="flex items-center">
								<input
									id="shareGlobally"
									type="checkbox"
									class="input-checkbox"
									value="true"
									v-model="intelObject.shareGlobally" />

								<label for="shareGlobally" class="font-medium">Share globally</label>
							</div>
						</div>
					</div>
				</form>
				
				<div class="flex flex-col items-center my-3">
					<button type="submit" class="btn-outline mb-3" @click="addIntel()">Add Intel</button>
					<button class="btn-block" @click="generate">Generate</button>
				</div>

				<template v-for="intel in store.intelObjects" :key="intel.id">
					<form>
						<div class="card">
							<div class="card-body">
								<div class="flex justify-between items-center">
									<h2>Intel <span class="card-title">#{{ intel.id }}</span></h2>
									<button class="btn-delete" @click="removeIntel(intel.id)">Delete</button>
								</div>
	
								<div class="grid grid-cols-1">
									<label class="font-medium">Title</label>
									<input type="text" name="title" id="title" class="input-text" :value="intel.title" />
								</div>
	
								<div>
									<label for="content" class="font-medium">Content</label>
									<div class="mt-1">
										<textarea name="content" id="content" rows="5" class="input-text" :value="intel.content"></textarea>
									</div>
								</div>
	
								<div class="flex items-center">
									<label for="duration" class="font-medium">Pick-up duration:</label>
									<input type="text" name="duration" id="duration" class="input-small" :value="intel.duration" /> <span class="font-medium">seconds</span>
								</div>
	
								<div class="flex items-center">
									<input id="deleteObject" name="delete-object" type="checkbox" class="input-checkbox" :value="intel.deleteObject" />
									<label for="deleteObject" class="font-medium">Delete object after intel is acquired</label>
								</div>
	
								<div class="flex items-center">
									<input id="shareGlobally" name="share-globally" type="checkbox" class="input-checkbox" :value="intel.shareGlobally" />
									<label for="shareGlobally" class="font-medium">Share globally</label>
								</div>
	
								<div class="mt-3 text-center">
									<button type="submit" class="btn-outline hidden">Edit Intel</button>
								</div>
							</div>
						</div>
					</form>
				</template>
			</template>

			<template #output>
				<div class="card" v-if="showOutput">
					<div class="card-body">
						<h3>Navigate to SOGFramework\config\intel\ and paste the following into the intel.sqf file.</h3>
						<p class="meta">// This intel file was created with the Intel Generator Tool</p>
						<div class="flex justify-between items-center">
							<span class="bg-gray-100">EVGAR(intel,intelList) = [<template v-for="(intel, index) in store.intelObjects"><template v-if="index !== 0">, ["{{ intel.title }}", "{{ intel.content }}", {{ intel.duration }}, {{ intel.deleteObject }}, {{ intel.shareGlobally }}]</template><template v-else>["{{ intel.title }}", "{{ intel.content }}", {{ intel.duration }}, {{ intel.deleteObject }}, {{ intel.shareGlobally }}]</template></template>];</span>
						</div>
					</div>
				</div>
			</template>
		</NuxtLayout>
	</div>
</template>

<style scoped>
.btn-block {
	@apply bg-sky-400 text-white hover:bg-sky-500 w-1/4 p-4;
}
.btn-delete {
	@apply bg-red-800 text-white hover:bg-red-900 py-1 px-4;
}
.btn-outline {
	@apply bg-white border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white w-1/4 p-4;
}
.input-checkbox {
	@apply border-gray-300 focus:ring-sky-400 h-4 w-4 mr-1;
}
.input-small {
	@apply border-gray-300 focus:ring-sky-400 p-0 mx-1 text-right w-10;
}
.input-text {
	@apply border-gray-300 focus:ring-sky-400 mt-1 w-full;
}
.meta {
	@apply text-gray-300;
}
textarea {
	@apply border-gray-300 focus:ring-sky-400 mt-1 w-full;
}
</style>
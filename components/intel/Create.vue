<script setup>
import { useIntelStore } from '@/stores/intel'

const intelStore = useIntelStore()
const intelObject = ref({
	title: '',
	content: '',
	duration: '',
	deleteObject: false,
	shareGlobally: false
})

function addIntel() {
	if (!intelObject.value.title || !intelObject.value.content || !intelObject.value.duration) {
		return alert('Please enter title, content and duration of intel')
	}

	intelStore.addIntel(intelObject.value)

	intelObject.value = {
		title: '',
		content: '',
		duration: '',
		deleteObject: false,
		shareGlobally: false
	}
}
</script>

<template>
	<form @submit.prevent="addIntel">
		<div class="card">
			<h2>Add Intel</h2>
			<div class="card-body">
				<div>
					<label for="input-title">Title</label>
					<input type="text" name="input-title" id="input-title" class="input-text" placeholder="Input Title Here" v-model="intelObject.title">
				</div>
				<div>
					<label for="input-title">Content</label>
					<textarea name="input-content" id="input-content" rows="3" class="input-text" placeholder="Input Content Here" v-model="intelObject.content"></textarea>
				</div>
				<div>
					<label for="input-title">Pick-up Duration</label>
					<input type="text" name="input-duration" id="input-duration" class="input-small" placeholder="5" v-model="intelObject.duration">
					<span>seconds</span>
				</div>
				<div>
					<input type="checkbox" name="delete-object" id="delete-object" class="input-checkbox" value="true" v-model="intelObject.deleteObject">
					<label for="delete-object">Delete Object after intel has been acquired</label>
				</div>
				<div>
					<input type="checkbox" name="share-global" id="share-global" class="input-checkbox" value="true" v-model="intelObject.shareGlobally">
					<label for="share-global">Share globally</label>
				</div>
			</div>
		</div>
	</form>
	
	<div class="btn-group">
		<button class="btn btn-primary-outline" @click="addIntel()">Add Intel</button>
	</div>
</template>

<style scoped>
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
.input-checkbox {
	@apply border-gray-300 focus:ring-sky-400 h-4 w-4 mr-1;
}
.input-small {
	@apply border-gray-300 focus:ring-sky-400 p-0 mx-1 text-right w-10;
}
.input-text {
	@apply border-gray-300 focus:ring-sky-400 mt-1 w-full;
}
</style>

<script setup>
import { useIntelStore } from '@/stores/intel'

const intelStore = useIntelStore()
const isOpen = ref(false)
const intelObject = ref({
	title: '',
	content: '',
	duration: '',
	deleteObject: false,
	shareGlobally: false
})

function addIntel() {
	if (!intelObject.value.title || !intelObject.value.content || !intelObject.value.duration) {
		isOpen.value = !isOpen.value
		return {}
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
	<template v-if="isOpen">
		<Alert type="warning" head="Holy guacamole!" msg="You should check in on some of those fields below." @close="isOpen = false" />
	</template>

	<form @submit.prevent="addIntel">
		<div class="card">
			<div class="card-body">
				<h1>Add Intel</h1>
				<div class="h4">INTEL</div>
				<div>
					<label for="input-title">Title</label>
					<input type="text" name="input-title" id="input-title" placeholder="Input Title Here" v-model="intelObject.title">
				</div>
				<div>
					<label for="input-title">Content</label>
					<textarea name="input-content" id="input-content" rows="3" placeholder="Input Content Here" v-model="intelObject.content"></textarea>
				</div>
				<div>
					<label for="input-title">Pick-up Duration</label>
					<input type="text" name="input-duration" id="input-duration" class="small" placeholder="5" v-model="intelObject.duration">
					<span>seconds</span>
				</div>
				<div>
					<input type="checkbox" name="delete-object" id="delete-object" value="true" v-model="intelObject.deleteObject">
					<label for="delete-object">Delete Object after intel has been acquired</label>
				</div>
				<div>
					<input type="checkbox" name="share-global" id="share-global" value="true" v-model="intelObject.shareGlobally">
					<label for="share-global">Share globally</label>
				</div>
			</div>
		</div>
	</form>
	
	<div class="btn-group">
		<button class="btn btn-outline-primary btn-lg" @click="addIntel()">Add Intel</button>
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
	@apply border-gray-300 focus:ring-sky-400 my-1;
}
input[type="checkbox"] {
	@apply mr-1 h-4 w-4;
}
input.small {
	@apply !p-0 !mx-1 !text-right !w-10;
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
</style>

<script setup lang="ts">
import { useIntelStore } from '@/stores/intel'

const intelStore = useIntelStore()

defineProps ({
	intelObject: { type: Object, required: true }
})

function removeIntel(id: number) {
	intelStore.deleteIntel(id)
}
</script>

<template>
	<li class="card">
		<div class="card-body">
			<h3 class="card-subtitle">Intel <NuxtLink to="#">#{{ intelObject.id }}</NuxtLink></h3>
			<div class="card-header">
				<span class="card-title">{{ intelObject.title }}</span>
				<button class="btn btn-danger" @click="removeIntel(intelObject.id)">Delete</button>
			</div>
			<p>{{ intelObject.content }}</p>

			<div class="card-meta">
				<span class="card-meta-child"><span class="card-meta-label">Pick-up duration:</span> {{ intelObject.duration }}</span>
				<span class="card-meta-child"><span class="card-meta-label">Delete object once acquired:</span> {{ intelObject.deleteObject }}</span>
				<span class="card-meta-child"><span class="card-meta-label">Share globally:</span> {{ intelObject.shareGlobally }}</span>
			</div>
		</div>
	</li>
</template>

<style scoped>
p {
	@apply m-0;
}
.btn {
	@apply px-4 py-2;
}
.btn-danger {
	@apply bg-red-600 border border-red-600 text-white hover:bg-red-800;
}
.card-header {
	@apply flex justify-between items-center;
}
.card-subtitle a {
	@apply hover:text-sky-400 hover:cursor-pointer;
}
.card-body {
	@apply w-full max-w-none;
}
.card-meta {
	@apply font-normal text-sm uppercase;
}
.card-meta-child:not(:first-of-type):not(:last-of-type) {
	@apply px-2;
}
.card-meta-label {
	@apply capitalize font-semibold;
}
li {
	@apply list-none;
}
</style>

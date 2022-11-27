<script setup>
import { useIntelStore } from '@/stores/intel'

const intelStore = useIntelStore()

let showOutput = ref(false)

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
				<IntelCreate />
		
				<div class="btn-group">
					<button class="btn btn-primary" @click="showOutput = !showOutput" v-if="!intelStore.isEmpty">Generate</button>
				</div>
		
				<ul>
					<IntelList v-for="intelObject in intelStore.intelObjects" :key="intelObject.id" :intelObject="intelObject" />
				</ul>
			</template>

			<template #output>
				<IntelOutput v-if="showOutput && !intelStore.isEmpty" />
			</template>
		</NuxtLayout>
	</div>
</template>

<style scoped>
.btn {
	@apply px-4 py-2;
}
.btn-group {
	@apply flex flex-col justify-center mb-4 mx-auto w-1/4;
}
.btn-primary {
	@apply bg-sky-400 border border-sky-400 text-white hover:bg-sky-600;
}
</style>

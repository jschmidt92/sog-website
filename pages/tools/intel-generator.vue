<script setup>
import { useIntelStore } from '@/stores/intel'

const intelStore = useIntelStore()

let showOutput = ref(false)

definePageMeta ({
	layout: false
})

useHead ({
	title: 'Intel Generator'
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
					<button class="btn btn-primary btn-lg" @click="showOutput = !showOutput">Generate</button>
				</div>
		
				<ul>
					<IntelList v-for="intelObject in intelStore.intelObjects" :key="intelObject.id" :intelObject="intelObject" />
				</ul>
			</template>

			<template #output>
				<IntelOutput v-if="showOutput" />
			</template>
		</NuxtLayout>
	</div>
</template>

<style scoped>
.btn {
	@apply inline-block;
}
.btn-lg {
	@apply px-4 py-2 text-xl w-1/4;
}
.btn-group {
	@apply flex flex-row justify-center mb-4;
}
.btn-primary {
	@apply bg-sky-400 border border-sky-400 text-white hover:bg-sky-600;
}
</style>

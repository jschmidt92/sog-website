<script setup lang="ts">
import { useBriefingStore } from '@/stores/briefing'

const briefingStore = useBriefingStore()

let showOutput = ref(false)

definePageMeta ({
	layout: false
})
</script>

<template>
	<div>
		<NuxtLayout name="tools">
			<template #header>
				<Header title="Check Out Our Latest Tools" subtitle="Learn. Share. Grow." meta="Briefing Generator" />
			</template>

			<template #tool>
				<BriefingCreate />
		
				<div class="btn-group">
					<button class="btn btn-primary" @click="showOutput = !showOutput" v-if="!briefingStore.isEmpty">Generate</button>
				</div>
			</template>

			<template #output>
				<BriefingOutput v-for="briefingObject in briefingStore.briefingObjects" :key="briefingObject.id" :briefingObject="briefingObject" v-if="showOutput && !briefingStore.isEmpty" />
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

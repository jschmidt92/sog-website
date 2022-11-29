<script setup>
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `SOG | ${titleChunk}` : 'SOG';
	},
	script: ['~/assets/js/all.min.js']
})
</script>

<template>
	<div>
		<Navbar />
		<NuxtPage />
	</div>
</template>

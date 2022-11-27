<script setup>
import { useIntelStore } from '@/stores/intel'

const intelStore = useIntelStore()

function copyToClipboard(id) {
	var copyText = document.createRange()

	copyText.selectNode(document.getElementById(id))
	window.getSelection().removeAllRanges()
	window.getSelection().addRange(copyText)

	navigator.clipboard.writeText(copyText)
	window.getSelection().removeAllRanges()
}
</script>

<template>
	<div class="card">
		<div class="card-body">
			<div class="card-header">
				<div>
					<h3>Navigate to SOGFramework\config\intel\ and paste the following into the .sqf file.</h3>
					<p class="card-meta">// This intel file was created with the Intel Generator Tool</p>
				</div>
				<button class="btn btn-primary-outline" @click="copyToClipboard('outputText')">Copy to Clipboard</button>
			</div>
			<div class="card-meta-child">
<p id="outputText" class="card-meta-code">EVGAR(intel,intelList) = [<template v-for="(intelObject, index) in intelStore.intelObjects">
<template v-if="index !== 0">, ["{{ intelObject.title }}", "{{ intelObject.content }}", {{ intelObject.duration }}, {{ intelObject.deleteObject }}, {{ intelObject.shareGlobally }}]</template>
<template v-else>["{{ intelObject.title }}", "{{ intelObject.content }}", {{ intelObject.duration }}, {{ intelObject.deleteObject }}, {{ intelObject.shareGlobally }}]</template></template>];
</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
p {
	@apply my-2;
}
.btn {
	@apply px-4 py-2;
}
.btn-primary-outline {
	@apply bg-white border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white;
}
.card {
	@apply border-r border-b drop-shadow-sm bg-white p-4;
}
.card-body {
	@apply w-full max-w-none p-2;
}
.card-header {
	@apply flex justify-between items-center;
}
.card-meta {
	@apply text-gray-300 text-sm;
}
.card-meta-child {
	@apply flex justify-between items-center;
}
.card-meta-code {
	@apply bg-gray-100;
}
</style>

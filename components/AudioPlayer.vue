<script setup lang="ts">
const audioPlayer = ref()
const emit = defineEmits<{
	(e: 'goBack', value: boolean): void
	(e: 'next'): void
	(e: 'previous'): void
}>()

let isPlaying = ref(false)

defineProps<{
	isVisible: boolean,
	song: {
		id: number,
		name: string,
		artistName: string,
		albumName: string,
		year: number,
		image: string,
		audio: string
	}
}>()

function setIsVisible(value: boolean) {
	emit('goBack', value)
}

function toggleNext() {
	emit('next')
}

function togglePrevious() {
	emit('previous')
}

function togglePlay() {
	if (isPlaying.value) {
		audioPlayer.value.pause()
	} else {
		audioPlayer.value.play()
	}
	isPlaying.value = !isPlaying.value
	audioPlayer.value.volume = 0.05
}
</script>

<template>
	<div>
		<audio :src="song.audio" preload="auto" ref="audioPlayer"></audio>
		<article class="audio-player">
			<div class="audio-player-brand">
				<img :src="song.image" alt="...">
				<div class="audio-player-ctrl">
					<!-- <button class="toggle-btn" aria-label="Previous" @click="togglePrevious"><i class="fas fa-backward-step fa-2xl"></i></button> -->
					<button class="toggle-btn" aria-label="Play" @click="togglePlay"><i class="fas fa-2x" :class="{'fa-play': !isPlaying, 'fa-pause': isPlaying}"></i></button>
					<!-- <button class="toggle-btn" aria-label="Next" @click="toggleNext"><i class="fas fa-forward-step fa-2xl"></i></button> -->
				</div>
			</div>
			<div class="audio-player-body">
				<p>{{ song.name }}</p>
				<p><span>{{ song.artistName }}</span> - {{ song.albumName }} ({{ song.year }})</p>
			</div>
		</article>
		<!-- <section class="flex flex-row justify-end items-center text-white">
			<button class="toggle-btn" @click="setIsVisible(false)">Back</button>
		</section> -->
	</div>
</template>

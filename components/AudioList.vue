<script setup lang="ts">
const isVisible = ref(true)
const currentSongIndex = ref(0)
const list = [
	{
		id: 1,
		name: 'Guise',
		artistName: 'Avery Alexander',
		albumName: 'Stealth Music',
		year: 2022,
		image: '/images/logo.png',
		audio: '/music/stealth.mp3'
	},
	// {
	// 	id: 2,
	// 	name: 'Example',
	// 	artistName: 'Example Artist',
	// 	albumName: 'Example Album',
	// 	year: 2022,
	// 	image: '/images/logo.png',
	// 	audio: ''
	// }
]

function playSong(index: number) {
	currentSongIndex.value = index
	isVisible.value = true
}

function playNext() {
	if (currentSongIndex.value < list.length -1) {
		currentSongIndex.value++
	} else {
		currentSongIndex.value = 0
	}
}

function playPrevious() {
	if (currentSongIndex.value != 0) {
		currentSongIndex.value--
	} else {
		currentSongIndex.value = list.length -1
	}
}
</script>

<template>
	<div>
		<section class="audio-list" v-if="!isVisible">
			<template v-for="(song, songIndex) in list" :key="song.id">
				<div class="audio-list-body">
					<div class="audio-list-brand">
						<img :src="song.image" alt="...">
					</div>
					<div class="audio-list-ctrl">
						<button aria-label="Play" @click="playSong(songIndex)">{{ song.name }}</button>
						<p><span class="text-gray-200">{{ song.artistName }}</span> - {{ song.albumName }} ({{ song.year }})</p>
					</div>
				</div>
			</template>
		</section>
		<section v-if="isVisible">
			<audio-player :song="list[currentSongIndex]" :is-visible="isVisible" @goBack="(value: any) => isVisible = value" @next="playNext" @previous="playPrevious" />
		</section>
	</div>
</template>

<script setup lang="ts">
defineProps ({
	head: String,
    msg: String,
    type: String
})

defineEmits (['close'])
</script>

<template>
    <div class="vue-modal" :class="type">
        <div class="vue-modal-content">
            <span><strong class="mr-1">{{ head }}</strong> {{ msg }}</span>
            <button class="btn" @click="$emit('close')"><i class="fas fa-times fa-lg"></i></button>
        </div>
	</div>
</template>

<style scoped>
.vue-modal {
    @apply px-4 py-2 mb-3 w-full;
}
.vue-modal-content {
    @apply flex items-center justify-between;
}
.danger {
	@apply bg-red-100 text-red-600;
}
.info {
	@apply bg-sky-100 text-sky-600;
}
.success {
	@apply bg-green-100 text-green-600;
}
.warning {
	@apply bg-yellow-100 text-yellow-600;
}
.btn {
	@apply inline-block;
}
</style>
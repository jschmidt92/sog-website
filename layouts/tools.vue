<template>
	<div class="bg-gray-100 min-h-screen">
		<main class="container mx-auto px-4 pt-8 lg:pt-12">
      <slot name="header"></slot>
			<div class="grid grid-cols-1 pt-12">
        <section>
					<slot name="tool"></slot>
          <slot name="output"></slot>
				</section>
			</div>
		</main>
	</div>
</template>

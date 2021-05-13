<template>

	<div class="w-full h-full fixed bg-black bg-opacity-20 top-0 left-0 text-black">

		<div class="w-auto h-height absolute max-w-2xl bg-white shadow rounded p-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

			<div class="text-2xl text-left">{{ this.title }}</div>

			{{ this.text }}
		</div>

	</div>

</template>

<script>
export default {
	name: "ModalBox",
	props: {
		title: String,
		text: String
	}
}
</script>

<style scoped>

</style>
<template>

	<div class="w-full h-full absolute bg-black bg-opacity-20">

		<div class="w-auto h-height max-w-2xl bg-white shadow rounded">
			{{ this.text }}
		</div>

	</div>

</template>

<script>
export default {
	name: "ModalBox",
	props: {
		text: String
	}
}
</script>

<style scoped>

</style>
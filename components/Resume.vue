<template lang='pug'>
div
	include ../assets/pug/index
	+resume
</template>

<script setup>

const pPanel = {
	root: {
		style: `height: 95dvh;display: flex;flex-flow: column;background: var(--p-zinc-700);`
	},
	body: {},
	header: {
		style: `background: var(--p-zinc-700);border-color: var(--p-zinc-700);`
	},
	content: {
		style: ``
	},
	footer: {
		style: ``
	}
}
</script>

<style lang='sass' scoped>
    div
        display: flex
</style>
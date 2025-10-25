<template lang="pug">
main(:class='{freeze: store.freeze}')
	header
		h1 Jesse Wells
		.intro
			span(v-html='store.isDesign ? store.data.design.intro : store.data.dev.intro')
	section.works
		Card(:pt='pCard' @click='handlePassword')
			template(#header)
			template(#title)
				h1 Recent Work
			template(#subtitle)
				p (2020) => present
			template(#content)
				p(v-html='store.isDesign ? store.data.design.recent : store.data.dev.recent' style='')
			template(#footer)
				Button(:icon='`${store.allowed || store25.allowed ? "pi pi-eye" : "pi pi-lock"}`' size='large' severity='success' v-tooltip.left='{value: `${store.allowed ? "View Work" : "Enter Password" }`}' style='border-width: 3px; text-decoration: none;' rounded outlined @click='handlePassword')
		Card(:pt='pCard' @click='handleLink("jessenwells.com/portfolio")')
			template(#header)
			template(#title)
				h1 Previous Work
			template(#subtitle)
				p (2010) => 2020
			template(#content)
				p(v-html='store.isDesign ? store.data.design.previous : store.data.dev.previous')
			template(#footer)
				Button(icon="pi pi-eye" size='large' severity='success' v-tooltip.left='{value: "View Work"}' style='border-width: 3px; text-decoration: none;' rounded outlined )
	section.details
		article.shot
			Card(:pt='pCardImage')
				template(#content)
					Image(:pt='pImage' src='/img/jnwells.jpg' preview)
			.single 
				p Currently Available for Positions, Projects, and Consultancies.
				Button(:label='store.isDesign ? "jnwellsdsgn@gmail.com" : "jnwellsdev@gmail.com"' severity='success' as='a' :href='store.isDesign ? "mailto:jnwellsdsgn@gmail.com" : "mailto:jnwellsdev@gmail.com"' target="_blank")
		article.resume
			.buttons
				Divider(type='dotted')
				Button(icon="pi pi-search" size='large' severity='info' v-tooltip.top='{value: "View Resume"}' class='info' style='border-width: 3px; text-decoration: none;' target="_blank" @click='store.setResume' rounded outlined )
				Button(icon="pi pi-file" size='large' severity='warn' v-tooltip.top='{value: "Plain Text"}' style='border-width: 3px; text-decoration: none;' as='a' :href='store.isDesign ? "/doc/jnwells-resume--2024.txt" : "/doc/jnwells-resume-2025.txt"' target="_blank" rounded outlined )
				Button(icon="pi pi-file-pdf" size='large' severity='help' v-tooltip.top='{value: "PDF Resume"}' style='border-width: 3px; text-decoration: none;' as='a' :href='store.isDesign ? "/doc/jnwells-resume-print--2024.pdf" : "/doc/jnwells-resume-print-2025.pdf"' target="_blank" rounded outlined )
				Button(icon="pi pi-file-word" size='large' severity='success' v-tooltip.top='{value: "Word Resume"}' style='border-width: 3px; text-decoration: none;' as='a' :href='store.isDesign ? "/doc/jnwells-resume-print--2024.docx" : "/doc/jnwells-resume-print-2025.docx"' target="_blank" rounded outlined )
			Card(:pt='pCardResume' @click='clickResume')
				template(#content v-if='store.isDesign')
					Resume
				template(#footer)
	footer
	Dialog.enter-code(:class='{freeze: store.freeze}' v-model:visible='store.dialog' header='Enter Password' :dismissableMask='true' modal)
		InputOtp(v-model='store.code' :class='[{correct: store.correct}, {incorrect: store.code.length > 3 && !store.correct}]' mask autofocus)
			template(#default)
	Dialog.view-resume(v-model:visible='store.resume' :dismissableMask='true' modal)
		Resume(@click='clickResume')
	Toast(:position='store.mobile ? "bottom-left" : "top-right"' successIcon='pi pi-check-circle')
</template>

<script setup>
import { useStore } from '@/store'
import { useToast } from 'primevue/usetoast'
import { anim } from '~/composables/anim.js'

const store = useStore()
const route = useRoute()
const router = useRouter()
const toast = useToast()
store.allowed && history.pushState('', '', '/2024')
store25.allowed && history.pushState('', '', '/2025')

onMounted(() => {
	anim()
	store.handleMobile(990)
})

const handlePassword = () =>
	store.allowed || store25.allowed
		? router.push('/recent-work')
		: store.setDialog(true)
const handleCorrect = (val) =>
	!val
		? store.setCorrect(val)
		: (store.setCorrect(val),
			setTimeout(() => {
				store.setAllowed(true)
				store25.setAllowed(true)
				store.setDialog(false)
			}, 1250))
const handleFreeze = ([val, time]) => {
	store.setFreeze(val)
	setTimeout(() => store.setFreeze(!val), time)
}
const showToast = () => {
	toast.add({ severity: 'success', summary: 'Password Accepted', life: '3000' })
}

const codeFocus = () =>
	document.querySelectorAll('.p-inputotp-input')[0].focus()

const clickResume = () => store.setResume(!store.resume)

const handleLink = (val) =>
	val.startsWith('/')
		? router.push(val)
		: window.open(`http://${val}`, '_blank')
watch(
	() => store.code,
	(val) =>
		val === store.value || val === store25.value
			? (handleCorrect(true),
				handleFreeze([true, 5000]),
				setTimeout(() => router.push('recent-work'), 1150))
			: handleCorrect(false)
)
watch(
	() => store.correct,
	(val) => val === true && showToast()
)
watch(
	() => store.dialog,
	(val) =>
		val === true &&
		setTimeout(() => {
			codeFocus()
		}, 250)
)

setTimeout(() => {
	store25.allowed ? showToast() : store.allowed && showToast()
}, 1000)

const events = [
	{ status: 'Engineer', date: '2024', color: '#9C27B0' },
	{ status: 'Developer', date: '2020', color: '#673AB7' },
	{ status: 'Designer', date: '2015', color: '#FF9800' },
	{ status: 'Illsutrator', date: '2010', color: '#607D8B' },
]

const pCard = {
	root: {
		style: `--p-card-shadow: 0px 4px 20px -6px rgba(0,0,0,0.025), 0px 3px 20px 6px rgba(0,0,0,0.025), 0px 4px 20px 6px rgba(0,0,0,0.025);
						border: 4px solid rgb(43 48 63 / 90%);
						outline: 2px solid rgb(50 60 78 / 58%);
						margin: 2rem 0;
						background: rgb(43 48 63 / 35%);
						background-image: url(/img/otis-redding2.png);
		`,
	},
	title: {
		style: ` margin: 0; color: var(--p-orange-500);`,
	},
	subtitle: {
		style: `color: var(--p-blue-500); font-style: italic;`,
	},
	body: {
		style: `flex: 1`,
	},
	content: {
		style: `flex: 1`,
	},
	footer: {
		style: `display: flex;justify-content:flex-end;padding-padding-top: 2rem`,
	},
}
const pCardResume = {
	root: {
		style: `--p-card-shadow: 0px 4px 20px -6px rgba(0,0,0,0.025), 0px 3px 20px 6px rgba(0,0,0,0.025), 0px 4px 20px 6px rgba(0,0,0,0.025);
						border: 4px solid rgb(43 48 63 / 90%);
						outline: 2px solid rgb(50 60 78 / 58%);
						background: rgb(43 48 63 / 35%);
						background-image: url(/img/otis-redding2.png);
		`,
	},
	title: {
		style: ` margin: 0; color: var(--p-orange-500);`,
	},
	subtitle: {
		style: `color: var(--p-blue-500); font-style: italic;`,
	},
	body: {
		style: `flex: 1;padding: 0.25rem 0;`,
	},
	content: {
		style: `flex: 1`,
	},
	footer: {
		style: `display: none`,
	},
}
const pCardImage = {
	root: {
		style: `--p-card-shadow: 0px 4px 20px -6px rgba(0,0,0,0.025), 0px 3px 20px 6px rgba(0,0,0,0.025), 0px 4px 20px 6px rgba(0,0,0,0.025);
						border: 4px solid rgb(43 48 63 / 90%);
						outline: 2px solid rgb(50 60 78 / 58%);
						background: rgb(43 48 63 / 35%);
						background-image: url(/img/otis-redding2.png);
						z-index: 100;
		`,
	},
	title: {
		style: ` margin: 0; color: var(--p-orange-500);`,
	},
	subtitle: {
		style: `color: var(--p-blue-500); font-style: italic;`,
	},
	body: {
		style: `flex: 1; padding: 0.3rem 0.3rem 0.25rem 0.3rem;`,
	},
	content: {
		style: `display: flex; flex: 1;`,
	},
	footer: {
		style: `display: flex;justify-content:flex-end;padding-padding-top: 2rem`,
	},
}

const pImage = {
	image: {
		style: `max-width: 100%; height: auto;outline: 6px solid var(--p-gray-500);border-radius: 8px;`,
	},
	previewMask: {
		style: `background: rgb(243 239 121 / 1%);`,
	},
	previewIcon: {
		style: `color: var(--p-blue-500);width:15%;height:15%; opacity: 0;`,
	},
	original: {
		style: `width: 80vw; max-width: 600px;border-radius: 8px;`,
	},
}

const pTline = {
	root: {
		style: `--p-timeline-event-connector-color: var(--p-blue-500); --p-timeline-event-marker-content-background: var(--p-blue-500);`,
	},
}
</script>

<style lang="sass" scoped>
main
	width: 100%
	max-width: 1280px
	header
		padding: 0 1.5rem 0 3rem
		margin-top: 2.25rem
		opacity: 0 //
		@media (max-width: 550px)
			margin-top: 2.25rem
			padding: 0 1.75rem 0 1.75rem
		h1
			margin-top: 0
			font-family: 'Daytona', sans-serif
			font-size: 2.25rem
			font-style: italic
			text-transform: uppercase
			margin-bottom: 1.25rem
			letter-spacing: 0.1rem
			color: var(--p-red-500)
			text-shadow: 0px 0px 22px rgb(232 50 67 / 40%)
			width: 30%
			min-width: 340px
			padding-right: auto
			@media (max-width: 550px)
				font-size: 1.8rem
		.intro
			margin-bottom: 1.5rem
			line-height: 1.5
			font-size: 1.2rem
			@media (max-width: 550px)
				max-width: 100%
			span
				text-shadow: 0px 0px 16px rgb(130 140 180 / 80%)
		.anim-intro
			height: 84px
			@media (max-width: 550px)
				max-width: 100%
				height: 114px
			@media (max-width: 400px)
				max-width: 100%
				height: 134px
			span
				text-shadow: 0px 0px 16px rgb(130 140 180 / 80%)
		p
			text-shadow: 0px 0px 16px rgb(130 140 180 / 80%)
			max-width: 77%
			@media (max-width: 550px)
				max-width: 100%
	section
		display: flex
		justify-content: space-between
		padding: 0 1.5rem 1rem 1.5rem
		opacity: 0 //
		@media (max-width: 880px)
			flex-flow: column
			align-items: center
		@media (max-width: 550px)
			padding: 0 1rem 1rem 1rem
		.p-card
			transition: border-color 0.35s ease
			cursor: pointer
		.p-card:hover
			border-color: var(--p-gray-400) !important
		.p-card
			width: 49%
			@media (max-width: 880px)
				width: 96%
				margin-bottom: 0 !important
			h1
				font-weight: 500
				margin: 0
			p
				margin: 0
		&.details
			margin-top: 0.75rem
			.shot
				width: 24%
				margin-bottom: 3rem
				@media (max-width: 880px)
					width: 96%
					display: flex
					flex-flow: column
					justify-content: center
					align-items: center
					margin-top: 1.75rem
				@media (max-width: 500px)
					margin-top: 1.25rem
				.p-card
					width: 100%
					@media (max-width: 880px)
						width: 44%
						min-width: 250px
				.single
					@media (max-width: 880px)
						width: 38%
						min-width: 250px
						display: flex
						flex-flow: column
						justify-content: flex-end
					p
						color: var(--p-slate-500)
						font-weight: 200
						margin: 2rem 0
					.p-button
						width: 100%
						font-family: Inter
						color: var(--p-zinc-600)
			.resume
				width: 74%
				@media (max-width: 880px)
					width: 96%
				.p-card
					width: 100%
					margin: 0
				.buttons
					display: flex
					justify-content: space-between
					width: 100%
					margin: 0 3% 3rem 0
					@media (max-width: 680px)
						width: 84%
						margin: 0.5rem 8% 3rem 8%
					@media (max-width: 500px)
						width: 64%
						margin: 0.5rem 18% 3rem 18%
					.p-divider
						width: 68%
						margin: 0 1% 0 2%
						@media (max-width: 1080px)
							width: 60%
							margin: 0 1%
						@media (max-width: 680px)
							width: 40%
							margin: 0 1% 0 0
						@media (max-width: 500px)
							display: none
						&:before
							border-color: rgb(37 41 54 / 50%)
							border-width: 30px
							top: calc(50% - 15px)
	footer
		margin-bottom: 6.5rem
.anim-cursor
	display: inline-block
	padding-left: 1.5rem
</style>

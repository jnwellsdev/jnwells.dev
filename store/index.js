import { defineStore } from 'pinia'
import data from '../content/index.yml'

export const useStore = defineStore('2024', {
	state: () => ({
		data,
		allowed: false,
		dialog: false,
		resume: false,
		code: '',
		value: '2024',
		correct: false,
		complete: false,
		mobile: false,
		freeze: false,
		isDesign: false,
	}),
	getters: {},
	actions: {
		setAllowed(val) {
			this.allowed = val
		},
		setDialog(val) {
			this.dialog = val
		},
		setCorrect(val) {
			this.correct = val
		},
		setResume(val) {
			this.resume = val
		},
		setComplete(val) {
			this.complete = val
		},
		setFreeze(val) {
			this.freeze = val
		},
		handleMobile(val) {
			// watch media query
			const mq = window.matchMedia(`(max-width: ${val}px)`)
			const mqMatch = (e) => (this.mobile = e.matches)
			mqMatch(mq)
			mq.addEventListener('change', mqMatch)
		},
		getDomain() {
			this.isDesign = window.location.hostname.includes('design')
		},
	},
})


import { defineStore } from 'pinia'

export interface BriefingObject {
	id: number
	faction: string
	groups: string
	summary: string
	terrain: string
	weather_current: string
	weather_forecast: string
	weather_visibility: string
	civilians: string
	composition: string
	armour: string
	air: string
	artillery: string
	explosives: string
	roe: string
	intent: string
	supports: string
	maintenance: string
	transportation: string
	resupplies: string
	frequencies: string
	player_respawn: string
	asset_respawn: string
	reinsertion: string
	success: string
	failure: string
	restrictions: string
	jip: string
	notes: string
	side: string
}

interface BriefingDetails {
	briefingObjects: BriefingObject[]
	id: number
}

export const useBriefingStore = defineStore('BriefingStore', {
	state: () => {
		return {
			briefingObjects: [],
			id: 0,
		} as BriefingDetails
	},
	actions: {
		addBriefing(briefingObject: BriefingObject) {
			this.briefingObjects.push({
				...briefingObject,
				id: this.id++
			})
		},
		deleteBriefing(id: number) {
			this.briefingObjects = this.briefingObjects.filter((briefingObject) => briefingObject.id !== id)
		}
	},
	getters: {
		count: (state) => state.briefingObjects.length,
		isEmpty: (state) => state.count === 0
	}
})

import { defineStore } from 'pinia'

export interface IntelObject {
	id?: number
	title: string
	content: string
	duration: string
	deleteObject: boolean
	shareGlobally: boolean
}

interface IntelDetails {
	intelObjects: IntelObject[]
	id: number
}

export const useIntelStore = defineStore('IntelStore', {
	state: () => {
		return {
			intelObjects: [],
			id: 0,
		} as IntelDetails
	},
	actions: {
		addIntel(intelObject: IntelObject) {
			this.intelObjects.push({
				...intelObject,
				id: this.id++
			})
		},
		deleteIntel(id: number) {
			this.intelObjects = this.intelObjects.filter((intelObject) => intelObject.id !== id)
		}
	},
	getters: {
		count: (state) => state.intelObjects.length,
		isEmpty: (state) => state.count === 0
	}
})

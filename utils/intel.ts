import { defineStore } from 'pinia'

export interface IntelObject {
  id: number;
  title: string;
  content: string;
  duration: number;
  deleteObject: boolean;
  shareGlobally: boolean;
}

interface IntelDetails {
  intelObjects: IntelObject[]
}

export const useIntelStore = defineStore('intel', {
  state: () => {
    return {
      intelObjects: [],
      id: 0,
    } as IntelDetails
  },
  actions: {
    addIntel(intel: IntelObject) {
      this.intelObjects.push({
        id: this.id++,
        ...intel
      })
    },
    deleteIntel(id: IntelObject) {
      this.intelObjects = this.intelObjects.filter((intel: { id: IntelObject; }) => intel.id !== id)
    },
    updateIntel(intel: IntelObject) {}
  },
  getters: {}
})
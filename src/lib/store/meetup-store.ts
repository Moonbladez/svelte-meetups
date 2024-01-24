import type { IFormData, IMeetup } from '$lib/types'
import { writable } from 'svelte/store'

export const meetups = writable<IMeetup[]>([
	{
		id: 'm1',
		title: 'Coding Bootcamp',
		subtitle: 'Learn to code in 2 hours',
		description: 'In this meetup, we will have some experts that teach you how to code!',
		imageUrl:
			'https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		email: '',
		isFavourite: false
	},
	{
		id: 'm2',
		title: 'Swim Together',
		subtitle: "Let's go for some swimming",
		description: 'We will simply swim some rounds!',
		imageUrl:
			'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		isFavourite: false,
		email: ''
	}
])
const meetupStore = {
	subscribe: meetups.subscribe,
	addMeetup: (meetupData: IFormData) => {
		const newMeetup = {
			...meetupData,
			id: Math.random().toString(),
			isFavourite: false
		}
		meetups.update((items) => {
			return [newMeetup, ...items]
		})
	},
	toggleFavourite: ({ id }: { id: string }) => {
		meetups.update((items) => {
			const updatedMeetup = items.find((m) => m.id === id)
			if (!updatedMeetup) return items
			updatedMeetup.isFavourite = !updatedMeetup.isFavourite
			return [...items]
		})
	}
}

export default meetupStore

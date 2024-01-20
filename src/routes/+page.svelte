<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import Header from '$lib/components/Header.svelte'
	import MeetUpForm from '$lib/components/MeetUpForm.svelte'
	import MeetUpList from '$lib/components/MeetUpList.svelte'
	import type { IMeetup } from '$lib/types'

	let showForm: boolean = false
	let meetups: IMeetup[] = [
		{
			id: 'm1',
			title: 'Coding Bootcamp',
			subtitle: 'Learn to code in 2 hours',
			description: 'In this meetup, we will have some experts that teach you how to code!',
			imageUrl:
				'https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			contact: 'test@test.com',
			isFavourite: false
		},
		{
			id: 'm2',
			title: 'Swim Together',
			subtitle: "Let's go for some swimming",
			description: 'We will simply swim some rounds!',
			imageUrl:
				'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			contact: 'test2@test.com',
			isFavourite: false
		}
	]

	const toggleFavourite = (event: CustomEvent<{ id: string }>): void => {
		const id = event.detail.id

		const updatedMeetup = { ...meetups.find((m) => m.id === id) }
		updatedMeetup.isFavourite = !updatedMeetup.isFavourite
		const meetupIndex = meetups.findIndex((m) => m.id === id)

		const updatedMeetups = [...meetups]
		//@ts-ignore
		updatedMeetups[meetupIndex] = updatedMeetup!
		//@ts-ignore
		meetups[meetupIndex] = updatedMeetup
	}

	const addNewMeetup = (event: CustomEvent<IMeetup>): void => {
		const newMeetup = event.detail

		meetups = [newMeetup, ...meetups]

		showForm = false
	}
</script>

<main id="meetups">
	<Header />
	<section id="meetups">
		<Button
			size="small"
			on:click={() => {
				showForm = !showForm
			}}>{showForm ? 'Hide Form' : 'Show Form'}</Button
		>

		{#if showForm}
			<MeetUpForm on:save={addNewMeetup} />
		{/if}

		<h1>Meetups</h1>
		<MeetUpList {meetups} on:toggleFavourite={toggleFavourite} />
	</section>
</main>

<style>
	#meetups {
		width: 90%;
		margin: 5rem auto;
	}
</style>

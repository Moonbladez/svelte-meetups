<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import Header from '$lib/components/Header.svelte'
	import MeetUpForm from '$lib/components/MeetUpForm.svelte'
	import MeetUpList from '$lib/components/MeetUpList.svelte'
	import meetups from '$lib/store/meetup-store'

	let showForm: boolean = false

	// const toggleFavourite = (event: CustomEvent<{ id: string }>): void => {
	// 	const id = event.detail
	// 	meetups.toggleFavourite(id)
	// }

	const addNewMeetup = (): void => {
		showForm = false
	}

	const cancelEdit = (): void => {
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
			<MeetUpForm on:save={addNewMeetup} on:cancel={cancelEdit} />
		{/if}

		<h1>Meetups</h1>
		<MeetUpList meetups={$meetups} />
	</section>
</main>

<style>
	#meetups {
		width: 90%;
		margin: 5rem auto;
	}
</style>

<script lang="ts">
	import Header from '$lib/components/Header.svelte'
	import MeetUpList from '$lib/components/MeetUpList.svelte'
	import type { IMeetup } from '$lib/types'
	const meetups: IMeetup[] = [
		{
			id: 'm1',
			title: 'Coding Bootcamp',
			subtitle: 'Learn to code in 2 hours',
			description: 'In this meetup, we will have some experts that teach you how to code!',
			imageUrl:
				'https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			address: '27th Nerd Road, 32523 New York',
			contact: 'test@test.com'
		},
		{
			id: 'm1',
			title: 'Swim Together',
			subtitle: "Let's go for some swimming",
			description: 'We will simply swim some rounds!',
			imageUrl:
				'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			address: '27th Nerd Road, 32523 New York',
			contact: 'test2@test.com'
		}
	]
</script>

<main>
	<Header />
	<section id="meetups">
		<h1>Meetups</h1>
		<MeetUpList {meetups} />
	</section>
</main>

<style>
	#meetups {
		width: 90%;
		margin: 5rem auto;
	}
</style>

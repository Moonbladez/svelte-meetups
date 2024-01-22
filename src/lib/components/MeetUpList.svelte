<script lang="ts">
	import MeetUpItem from '$lib/components/MeetUpItem.svelte'
	import type { IMeetup } from '$lib/types'
	export let meetups: IMeetup[] = []
</script>

<ul class="card-container">
	{#each meetups as meetup (meetup.id)}
		<li>
			<MeetUpItem
				id={meetup.id}
				title={meetup.title}
				subtitle={meetup.subtitle}
				description={meetup.description}
				imageUrl={meetup.imageUrl}
				isFavourite={meetup.isFavourite}
				on:toggleFavourite
			/>
		</li>
	{/each}
</ul>

<style>
	.card-container {
		display: grid;
		grid-template-columns: 1fr;
		list-style: none;
		gap: 2rem;
	}

	@media (min-width: 768px) {
		.card-container {
			grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
		}
	}
</style>

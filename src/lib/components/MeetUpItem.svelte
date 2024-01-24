<script lang="ts">
	import Badge from '$lib/components/Badge.svelte'
	import Button from '$lib/components/Button.svelte'
	import meetups from '$lib/store/meetup-store'

	export let id: string
	export let title: string
	export let subtitle: string
	export let description: string
	export let imageUrl: string
	export let isFavourite: boolean

	const toggleFavourite = (): void => {
		meetups.toggleFavourite({ id: id })
	}
</script>

<article>
	<header>
		<h2>
			{title}
			{#if isFavourite}
				<Badge>Favourite</Badge>
			{/if}
		</h2>
		<h3>{subtitle}</h3>
	</header>
	<div class="image">
		<img src={imageUrl} alt={title} />
	</div>
	<div class="content">
		<p>{description}</p>
	</div>
	<footer>
		<div class="actions">
			<Button size="small" outline color="secondary">Show Details</Button>
			<Button size="small" on:click={toggleFavourite}
				>{isFavourite ? 'Remove Favourite' : 'Add Favourite'}</Button
			>
		</div>
	</footer>
</article>

<style>
	article {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		border-radius: 5px;
		background: white;
		margin: 1rem;
	}

	header,
	.content,
	footer {
		padding: 1rem;
	}

	.image {
		width: 100%;
		height: 14rem;
	}

	.image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.actions {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	h2 {
		font-size: 1.25rem;
		margin: 0.5rem 0;
		font-family: 'Roboto Slab', sans-serif;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h3 {
		font-size: 1rem;
		color: #808080;
		margin: 0.5rem 0;
	}

	p {
		font-size: 1.25rem;
		margin: 0;
	}

	div {
		text-align: right;
	}
</style>

<script lang="ts">
	export let title: string
	export let subtitle: string
	export let description: string
	export let imageUrl: string
	export let address: string
</script>

<article>
	<header>
		<h2>{title}</h2>
		<h3>{subtitle}</h3>
		<address>{address}</address>
	</header>
	<div class="image">
		<img src={imageUrl} alt={title} />
	</div>
	<div class="content">
		<p>{description}</p>
	</div>
	<footer>
		<button>Show Details</button>
		<button>Favorite</button>
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

	h2 {
		font-size: 1.25rem;
		margin: 0.5rem 0;
		font-family: 'Roboto Slab', sans-serif;
	}

	h2.is-favorite {
		background: #01a129;
		color: white;
		padding: 0 0.5rem;
		border-radius: 5px;
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

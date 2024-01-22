<script>
	import Button from '$lib/components/Button.svelte'
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	const handleClose = () => {
		dispatch('cancel')
	}
</script>

<div class="modal-backdrop" />

<div class="modal">
	<slot name="header" />

	<div class="content">
		<slot />
	</div>
	<footer>
		<slot name="footer">
			<Button on:click={handleClose}>Close</Button>
			<footer></footer></slot
		>
	</footer>
</div>

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.75);
		z-index: 10;
	}

	.modal {
		position: fixed;
		top: 10vh;
		left: 10%;
		width: 80%;
		max-height: 80vh;
		background: white;
		border-radius: 5px;
		z-index: 100;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
	}

	@media (min-width: 768px) {
		.modal {
			width: 40rem;
			left: calc(50% - 20rem);
		}
	}
</style>

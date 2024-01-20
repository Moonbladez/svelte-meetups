<script lang="ts">
	export let type: 'submit' | 'reset' | 'button' = 'button'
	export let color: 'primary' | 'secondary' = 'primary'
	export let outline: boolean = false
	export let size: 'small' | 'medium' | 'large' = 'medium'
</script>

<button {type} on:click class={`btn-${color} ${outline && `btn-${color}-outline`} btn-${size}`}>
	<slot />
</button>

<style>
	.btn-primary {
		background-color: #4f005f;
		color: white;
		border: 1px solid #4f005f;
	}

	.btn-primary:hover,
	.btn-primary:active {
		background-color: #741188;
		border-color: #741188;
	}

	.btn-secondary {
		background-color: #ff0055;
		color: white;
		border: 1px solid #ff0055;
	}

	.btn-secondary:hover,
	.btn-secondary:active {
		background-color: #ff4382;
		border-color: #ff4382;
	}

	.btn-primary-outline {
		background-color: transparent;
		color: #4f005f;
		border: 1px solid #4f005f;
	}

	.btn-primary-outline:hover,
	.btn-primary-outline:active {
		background-color: #4f005f;
		color: white;
	}

	.btn-secondary-outline {
		background-color: transparent;
		color: #ff0055;
		border: 1px solid #ff0055;
	}

	.btn-secondary-outline:hover,
	.btn-secondary-outline:active {
		background-color: #ff0055;
		color: white;
	}

	.btn-outline:hover,
	.btn-outline:active {
		background-color: #4f005f;
		color: white;
	}

	.btn-small {
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
	}

	.btn-medium {
		padding: 0.5rem 1rem;
		font-size: 1rem;
	}

	.btn-large {
		padding: 1rem 2rem;
		font-size: 1.25rem;
	}

	.btn {
		border-radius: 4px;
	}
</style>

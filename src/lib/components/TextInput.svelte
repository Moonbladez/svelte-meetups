<script lang="ts">
	export let id: string
	export let label: string
	export let value: string
	export let type: 'text' | 'textarea' | 'email' = 'text'
	export let required: boolean = true
	export let valid: boolean = true
	export let validityMessage: string = ''

	let touched: boolean = false
</script>

<div class="form-control" class:invalid={!valid && touched}>
	<slot name="icon" />
	<label for={id}>{label}</label>
	<input {type} {id} {value} on:input {required} on:blur={() => (touched = true)} />
	{#if validityMessage && !valid && touched}
		<p class="error-message">{validityMessage}</p>
	{/if}
</div>

<style>
	.form-control {
		display: flex;
		flex-direction: column;
		margin-bottom: 0.5rem;
	}

	label {
		font-weight: bold;
		font-size: x-small;
	}

	input {
		font: inherit;
		padding: 0.15rem 0.25rem;
		border-radius: 4px;
		border: 1px solid #ccc;
		font-size: small;
	}

	input:focus {
		outline: none;
		border-color: #4f005f;
	}

	.invalid input {
		border-color: #ff0000;
		background-color: #ffd7d7;
	}

	.invalid label {
		color: #ff0000;
	}

	.error-message {
		color: #ff0000;
		font-size: x-small;
	}
</style>

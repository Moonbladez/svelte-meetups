<script lang="ts">
	export let id: string
	export let label: string
	export let value: string
	export let type: 'text' | 'textarea' | 'email' = 'text'
	export let required: boolean = true
</script>

<div class="form-control">
	<slot name="icon" />
	<label for={id}>{label}</label>
	<input {type} {id} {value} on:input {required} />
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
</style>

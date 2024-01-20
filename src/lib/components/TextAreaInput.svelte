<script lang="ts">
	export let id: string
	export let label: string
	export let value: string
	export let rows: number = 2
	export let required: boolean = true
</script>

<div class="form-control">
	<label for={id}>{label}</label>
	<textarea {id} {rows} {required} on:input {value} />
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

	textarea {
		font: inherit;
		padding: 0.15rem 0.25rem;
		border-radius: 4px;
		border: 1px solid #ccc;
		font-size: small;
	}
</style>

<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import Modal from '$lib/components/Modal.svelte'
	import TextAreaInput from '$lib/components/TextAreaInput.svelte'
	import TextInput from '$lib/components/TextInput.svelte'
	import { createEventDispatcher } from 'svelte'

	interface IFormData {
		id: string
		title: string
		subtitle: string
		email: string
		imageUrl: string
		description: string
	}

	let formData: IFormData = {
		id: Math.random().toString(),
		title: '',
		subtitle: '',
		email: '',
		imageUrl: '',
		description: ''
	}

	const dispatch = createEventDispatcher()

	function handleInput(event: Event, field: keyof IFormData) {
		const target = event.target as HTMLInputElement
		formData = { ...formData, [field]: target.value }
	}
</script>

<Modal on:cancel>
	<h2 slot="header">header</h2>
	<form class="form-container" on:submit|preventDefault={() => dispatch('save', formData)}>
		<TextInput
			id="title"
			label="Title"
			value={formData.title}
			on:input={(event) => handleInput(event, 'title')}
		/>
		<TextInput
			id="subtitle"
			label="Subtitle"
			value={formData.subtitle}
			on:input={(event) => handleInput(event, 'subtitle')}
		/>
		<TextInput
			id="email"
			label="Email"
			value={formData.email}
			type="email"
			on:input={(event) => handleInput(event, 'email')}
		/>
		<TextInput
			id="image-url"
			label="Image Url"
			value={formData.imageUrl}
			on:input={(event) => handleInput(event, 'imageUrl')}
		/>
		<TextAreaInput
			id="description"
			label="Description"
			value={formData.description}
			on:input={(event) => handleInput(event, 'description')}
		/>
	</form>
	<div slot="footer" class="footer">
		<Button outline on:click={() => dispatch('cancel')}>Cancel</Button>
		<Button on:click={() => dispatch('save', formData)}>Save</Button>
	</div>
</Modal>

<style>
	.form-container {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}

	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>

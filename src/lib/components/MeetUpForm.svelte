<script lang="ts">
	import TextAreaInput from '$lib/components/TextAreaInput.svelte'
	import TextInput from '$lib/components/TextInput.svelte'
	import { createEventDispatcher } from 'svelte'
	import Button from './Button.svelte'

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
	<Button type="submit">Save</Button>
</form>

<style>
	.form-container {
		display: flex;
		flex-direction: column;
		width: 50%;
		margin: 0 auto;
	}
</style>

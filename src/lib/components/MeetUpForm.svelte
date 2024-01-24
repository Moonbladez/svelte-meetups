<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import Modal from '$lib/components/Modal.svelte'
	import TextAreaInput from '$lib/components/TextAreaInput.svelte'
	import TextInput from '$lib/components/TextInput.svelte'
	import meetups from '$lib/store/meetup-store'
	import type { IFormData } from '$lib/types'
	import { createEventDispatcher } from 'svelte'
	import { isEmpty, isValidEmail } from '../../helpers/validation'

	let formData: IFormData = {
		title: '',
		subtitle: '',
		email: '',
		imageUrl: '',
		description: ''
	}

	let isTitleValid: boolean = false
	let isSubtitleValid: boolean = false
	let isEmailValid: boolean = false
	let isImageUrlValid: boolean = false
	let isDescriptionValid: boolean = false
	let isFormValid: boolean = false

	const dispatch = createEventDispatcher()

	$: isTitleValid = !isEmpty(formData.title)
	$: isSubtitleValid = !isEmpty(formData.subtitle)
	$: isEmailValid = !isValidEmail(formData.email)
	$: isImageUrlValid = !isEmpty(formData.imageUrl)
	$: isDescriptionValid = !isEmpty(formData.description)
	$: isFormValid =
		isTitleValid && isSubtitleValid && isEmailValid && isImageUrlValid && isDescriptionValid

	const handleInput = (event: Event, field: keyof IFormData) => {
		const target = event.target as HTMLInputElement
		formData[field] = target.value
	}

	const handleSubmit = () => {
		meetups.addMeetup(formData)
		dispatch('save')
	}
</script>

<Modal on:cancel>
	<h2 slot="header">header</h2>
	<form class="form-container" on:submit|preventDefault={handleSubmit}>
		<TextInput
			id="title"
			label="Title"
			value={formData.title}
			valid={isTitleValid}
			validityMessage="Please enter a valid title"
			on:input={(event) => handleInput(event, 'title')}
		/>
		<TextInput
			id="subtitle"
			label="Subtitle"
			value={formData.subtitle}
			on:input={(event) => handleInput(event, 'subtitle')}
			validityMessage="Please enter a valid subtitle"
			valid={isSubtitleValid}
		/>
		<TextInput
			id="email"
			label="Email"
			value={formData.email}
			type="email"
			on:input={(event) => handleInput(event, 'email')}
			validityMessage="Please enter a valid email"
			valid={isEmailValid}
		/>
		<TextInput
			id="image-url"
			label="Image Url"
			value={formData.imageUrl}
			on:input={(event) => handleInput(event, 'imageUrl')}
			validityMessage="Please enter a valid image url"
			valid={isImageUrlValid}
		/>
		<TextAreaInput
			id="description"
			label="Description"
			bind:value={formData.description}
			validityMessage="Please enter a valid description"
			valid={isDescriptionValid}
		/>
	</form>
	<div slot="footer" class="footer">
		<Button outline on:click={() => dispatch('cancel')}>Cancel</Button>
		<Button on:click={() => dispatch('save', formData)} disabled={!isFormValid}>Save</Button>
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

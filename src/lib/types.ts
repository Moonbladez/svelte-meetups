export interface IFormData {
	title: string
	subtitle: string
	email: string
	imageUrl: string
	description: string
}

export interface IMeetup extends IFormData {
	id: string
	isFavourite: boolean
}

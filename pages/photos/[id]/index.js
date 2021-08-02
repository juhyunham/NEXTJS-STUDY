import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import photoStyles from '../../../styles/Photo.module.css'

const index = ({photo}) => {
	const {title, url} = photo

	return (
		<div className={photoStyles.img_wrap}>
			<h2> image {title} </h2>
			<Image
				src={url}
				width={500}
				height={500}
				alt={title}
			/>
			<Link href="/photos">
				<a className={photoStyles.goback}>go back</a>
			</Link>
		</div>
	)
};

export const getStaticProps = async(context) => {
	const  { id } = context.params
	const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
	const photo = await res.json()

	return {
		props: {
			photo
		}
	}
}

export const getStaticPaths = async() => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/photos?start=0&_end=10`)
	const photos = await res.json()
	const ids = photos.map(photo => photo.id);
	const paths = ids.map(id => ({ params: {id: id.toString()}}));
	
	return {
		paths,
		fallback: false
	}
} 

export default index;
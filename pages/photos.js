import HeadInfo from '../components/HeadInfo';
import Image from 'next/image'
import Link from 'next/link'
import photoStyles from '../styles/Photo.module.css'

const Photos = ({photos}) => (
    <>
        <div>
            <HeadInfo title="My Blog Photos" />
            <h1>
                My photos
            </h1>
            <ul className={photoStyles.photos}>
                {photos.map(photo=>(
                    <li key={photo.id}>
                        <Link href={`/photos/${photo.id}`}>
                            <a>
                                <Image 
                                    src={photo.thumbnailUrl}
                                    width={150}
                                    height={150}
                                    alt={photo.title}
                                />
                                <span>{photo.title}</span>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </>
);

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?start=0&_end=10`)
    const photos = await res.json();
  
    return {
      props: {
        photos
      },
      revalidate: 20
    }
}
export default Photos;
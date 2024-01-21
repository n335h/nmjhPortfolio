import Carousel from '../../components/carousel/carousel';

const projects = () => {
	return (
		<div className='ProjectTitle bg-zinc-200 dark:bg-zinc-900'>
			<h1 className='text-xl text-indigo-600 font-bold sm:text-3xl'>
				projects!
			</h1>
			<Carousel />
		</div>
	);
};

export default projects;

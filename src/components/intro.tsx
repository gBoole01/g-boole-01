import Button from './button';

const Intro = () => (
    <section className="flex flex-col py-2 mt-4 mb-8 relative after:absolute after:z-[-1] after:content[''] after:bg-blue-2/20 after:rounded-l-lg after:left-0 after:right-[-2.25rem] after:top-0 after:bottom-0">
        <h2 className="text-2xl text-blue-1 font-bold uppercase">Qui suis-je ?</h2>
        <p className="text-gray-1 text-sm ml-3 mt-3 mb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p</p>
        <div className="absolute right-0 bottom-[-0.75rem]">
            <Button 
                label="En savoir plus"
                href="/about"
            />
        </div>
    </section>
)

export default Intro;
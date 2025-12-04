import React from 'react'
import { StackedCarousel, ResponsiveContainer } from 'react-stacked-center-carousel'
export const data = [
    {
        cover: "/assets/candidat-1.png",
        title: "\"The volunteer walking app revolutionized our ground game.We knocked 40% more doors with the same number of volunteers.\"",
        hero: "Michael Thompson  |  County Commissioner"
    },
    {
        cover: "/assets/candidat-2.png",
        title: "",
        hero:""
    },
    {
        cover: "/assets/candidat-3.png",
        title: "",
        hero: ""
    },
];
const Hero = (props) => {
    const ref = React.useRef();
    return (
        <div className="pt-20">
            <div className='container mx-auto my-18'>
            <h1 className='text-6xl text-center'>Trusted By Winning Candidates</h1>
            </div>
            <div style={{ width: "100%", position: "relative" }}>
            <ResponsiveContainer
                carouselRef={ref}
                render={(parentWidth, carouselRef) => {
                    // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
                    // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
                    // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
                    // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
                    let currentVisibleSlide = 3;
                    if (parentWidth <= 1440) currentVisibleSlide = 2;
                    if (parentWidth <= 1080) currentVisibleSlide = 1;
                    return (
                        <StackedCarousel
                            left={"30%"}
                            ref={carouselRef}
                            slideComponent={Card}
                            slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                            carouselWidth={parentWidth}
                            data={data}
                            currentVisibleSlide={currentVisibleSlide}
                            maxVisibleSlide={5}
                            useGrabCursor
                        />
                    );
                }}
            />
            <>

                <a className="py-2 px-4 rounded-md bg-red-600 text-white "
                    style={{ position: "absolute", top: "40%", left: "26%", zIndex: 10 }}
                    size="small"
                    color="primary"
                    onClick={() => {
                        ref.current?.goBack();
                    }}
                >
                    <i className="ri-arrow-left-line text-white"></i>
                </a>
                <a className="py-2 px-4 rounded-md bg-red-600 text-white"
                        style={{ position: "absolute", top: "40%", right: "26%", zIndex: 10 }}
                    size="small"
                    color="primary"
                    onClick={() => {
                        ref.current?.goNext(6);
                    }}
                >
                    <i className="ri-arrow-right-line text-white"></i>
                </a>
            </>
            </div>

            <div className="bg-[#121c2b] py-20 -mt-70">
                <div className="container mx-auto pt-50">
                    <ul className="flex items-center justify-center gap-10 ">
                        <li><img className='w-50' src="/assets/cl1.png" alt="" /></li>
                        <li><img className='w-50' src="/assets/cl2.png" alt="" /></li>
                        <li><img className='w-50' src="/assets/cl3.png" alt="" /></li>
                        <li><img className='w-50' src="/assets/cl4.png" alt="" /></li>
                        <li><img className='w-50' src="/assets/cl5.png" alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const Card = React.memo(function (props) {
    const { data, dataIndex } = props;
    const { cover } = data[dataIndex];

    return (
        <div
            style={{
                width: "150%",
                height: 500,
                userSelect: "none",
            }}
            className="my-slide-component rounded-2xl"
        >
            <img
                style={{
                    height: "13",
                    width: "150%",
                    objectFit: "cover",
                    borderRadius: 0,
                }}
                draggable={false}
                src={cover}
            />
            <div className='absolute bottom-30 w-full text-center text-white px-10  '>
                <p className='text-xl font-medium italic'>{data[dataIndex].title}</p>
                <hr className='w-10 mx-auto my-3'/>
                <p className="text-base">{data[dataIndex].hero}</p>
            </div>

        </div>
    );
});
export default Hero
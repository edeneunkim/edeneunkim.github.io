import * as React from 'react';

function Projects() {
    const data = ["eden", "bennett", "sean"];
    return (
        <div id='projects' className="">
            <p className="text-primary">PRojects</p>
            <div className='grid grid-cols-4 auto-rows-[300px]'>
                {data.map((item, i) => (
                    <div key={i}>
                        <h2>{item}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
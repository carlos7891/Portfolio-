import Layout from '../components/Layout'
import {skills} from '../profile'

const index = () => {
    return (
        <>
            <Layout>
                <header className="row">
                    <div className="col-md-12">
                        <div className="card card-body bg-dark text-light">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="profilePhoto.png" className="img-fluid" alt=""/>
                                </div>
                                <div className="col-md-8">
                                    <h1 className="text-light pb-2">Carlos Espinosa</h1>
                                    <h3 className="text-light pb-4"> Junior Developer </h3>
                                    <p className="text-light pb-4">I'm junior developer, currently studying on Mision-Tic 2021, I'm crazy about programing in any language and learning everyday about how to improve my skills,  actually im looking to focus on one technology.</p>
                                    <a className="text-light" href="/hireme"> Hire me </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="row py-2">
                    <div className="col-md-4">
                        <div className="card bg-dark">
                            <div className="card-body">
                                <h1 className="text-light">Skills</h1>
                                {
                                    skills.map(({skill, percentage}, i) => (
                                        <div className="py-3" key={i}>
                                            <h4 className="text-light">{skill}</h4>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar" role="progress-bar"
                                                    style={{width: `${percentage}%`}}>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card bg-dark">
                            <div className="card-body">
                                <h1 className="text-light">Experience</h1>
                                <ul>
                                    <li>
                                        <h3 className="text-light">Otacc</h3>
                                        <h5 className="text-light">2018 - 2020</h5>
                                        <p className="text-light">Leader of the group of monitoring and control of the pipe book for more than 1,000 (2,500 isometric) production lines, in this project were executed 150,000 diametrical inches of welding, accessories were installed with a weight more than 3.500 tons, complying with the quality standards and in the established time</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}

export default index

import Layout from '../components/Layout'
import {skills, experiences, projects} from '../profile'

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
                                    <a href="/hireme"> Hire me </a>
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
                                            <h5 className="text-light">{skill}</h5>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
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
                                {
                                    experiences.map(({title, description, from, to}, i) => (
                                        <div className="py-3" key={i}>
                                            <h3 className="text-light">{title}</h3>
                                            <h5 className="text-light">{from}-{to}</h5>
                                            <p className="text-light">{description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-body bg-dark">
                            <div className="row">
                                <div className="col-md-12 my-2">
                                    <h1 className="text-center text-light"> Portfolio</h1>
                                </div>
                                {
                                    projects.map(({name, description, image, url}, i) => (
                                        <div className="col-md-4 p-2" key= {i}>
                                            <div className="card bg-dark h-100">
                                                <div className="overflow">
                                                    <img src={`/${image}`} alt="" className="card-img-top rounded" />
                                                </div>
                                                <div className="card-body text-light">
                                                    <h3>{name}</h3>
                                                    <p>{description}</p>
                                                    <a href={`${url}`}>Know more</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>

        </>
    )
}

export default index

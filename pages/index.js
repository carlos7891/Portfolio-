import Layout from '../components/Layout'
import {skills, experiences, projects} from '../profile'
import Link from 'next/link'

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
                                    <h3 className="text-light pb-4"> Junior Developer / Petroleum Engineer  </h3>
                                    <p className="text-light pb-4 fs-4">I'm junior developer, currently studying on Mision-Tic 2021, I'm crazy about programing in any language and learning everyday about how to improve my skills,  actually im looking to focus on one technology.</p>
                                    <p className="text-light pb-4 fs-4"> I love
                                    Sports, Music, Drawing, Playing VideoGames, Football.
                                    </p>
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
                    <div className="col-md-8 h-2">
                        <div className="card bg-dark">
                            <div className="card-body">
                                <h1 className="text-light">Biography</h1>
                                    <div className="text-light py-2">
                                        <span className="fw-bolder px-2">1991</span>
                                        Born in Bucaramanga, Colombia.
                                    </div>
                                    <div className="text-light py-2">
                                        <span className="fw-bolder px-2">2015</span>
                                        Bachelor of science: Petroleum Engineer.
                                    </div>
                                    <div className="text-light py-2">
                                        <span className="fw-bolder px-2">2021</span>
                                        MisionTic 2021: Junior Developer:.
                                    </div>
                                <h1 className="text-light">Experience</h1>
                                {
                                    experiences.map(({title, description, from, to}, i) => (
                                        <div className="py-3 my-2" key={i}>
                                            <h3 className="text-light">{title}</h3>
                                            <h4 className="text-light">{from}-{to}</h4>
                                            <p className="text-light fs-5">{description}</p>
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
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="col-md-12 mt-4">
                                    <div className="text-center">
                                    <Link href="/work">
                                        <a className="btn btn-outline-light">More Projects</a>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}

export default index

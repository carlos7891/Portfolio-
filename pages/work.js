import Layout from '../components/Layout'
import {projects} from '../profile'


const Work = () => {
    return (
        <div>
        <Layout>
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
                                                    <p className="fs-4">{description}</p>
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

    </div>
    )
}

export default Work

import React from 'react'
import Button from '../Generics/Button'
import img_cassandraWarren from '../../assets/images/cassandra-warren.png'
import img_amandaTulling from '../../assets/images/amanda-tulling.png'
import img_jackMcdogglas from '../../assets/images/jack-mcdogglas.png'

const Testimonial = () => {
  return (
    <section className="testimonial">
            <div className="container">
                <div className="section-title">
                    <p>Testimonial</p>
                    <h2>What Our Client Says</h2>
                </div>
                <div className="section-content">
                    <div className="content-box">
                        <div>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            </div>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            <div className="employee">
                                <img src={img_cassandraWarren} alt="small image of an employee"/>
                                <div>
                                    <h5>Cassandra Warren</h5>
                                    <p className="occupation">Business Manager, Dorfus</p>
                                </div>
                            </div>
                    </div>
                    <div className="content-box">
                        <div>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="employee">
                            <img src={img_amandaTulling} alt="small image of an employee"/>
                            <div>
                                <h5> Amanda Tulling</h5>
                                <p className="occupation">Senior Developer, Square</p>
                            </div>
                        </div>
                    </div>
                    <div className="content-box">
                        <div>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="employee">
                            <img src={img_jackMcdogglas} alt="small image of an employee"/>
                            <div>
                                <h5>Jack McDogglas</h5>
                                <p className="occupation">Key Account Manager, Gobona</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center-content button">
                    <Button type="black" title="All Reviews" url="/reviews" />
                </div>

            </div>
        </section>
  )
}

export default Testimonial
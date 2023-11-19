import React from 'react'

import img_articleImage5 from '../../assets/images/article-image-5.png'
import img_articleImage6 from '../../assets/images/article-image-6.png'
import img_articleImage7 from '../../assets/images/article-image-7.png'

const ArticleAndNews = () => {
  return (
    <section className="article-news">   
            <div className="container">
                <div className="title-content">
                    <div className="section-title">
                        <p>Article & News</p>
                        <h2>Get Every Single Articles & News</h2>
                    </div>
                    <div className="button">                    
                        <a className="btn-transparent" href="index.html">Browse Articles <i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                </div>
                <div className="content">
                    <div className="parent">
                        <img className="parent" src={img_articleImage5} alt="a woman sitting at a table"/>
                        <div className="child-1">
                            <div className="dates">
                                <h5>25</h5>
                                <p>Mar</p>
                            </div>
                        </div>
                        <div className="text-content">
                            <p>Business</p>
                            <h5>How To Use Digitalization</h5>
                            <h5>In The Classroom</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                        </div>
                    </div>
                    <div className="parent">
                        <img className="parent" src={img_articleImage6} alt="image of a computer screen"/>
                        <div className="child-1">
                            <div className="dates">
                                <h5>17</h5>
                                <p>Mar</p>
                            </div>
                        </div>
                        <div className="text-content">
                            <p>Business</p>
                            <h5>How To Implement Chat GPT</h5>
                            <h5>In Your Projects</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                        </div>
                    </div>
                    <div className="parent">
                        <img src={img_articleImage7} alt="image of books for studying"/>
                        <div className="child-1">
                            <div className="dates">
                                <h5>13</h5>
                                <p>Mar</p>
                            </div>
                        </div>
                        <div className="text-content">
                            <p>Business</p>
                            <h5>The Guide To Support</h5>
                            <h5>Modern CSS Design</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                        </div>
                    </div>
                </div>
                <div className="dots">
                    <div className="dot"></div>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </section>
  )
}

export default ArticleAndNews
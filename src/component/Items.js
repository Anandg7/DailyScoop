import React from 'react'

const Items=(props)=> {
    let { title, description, imageurl, newsUrl, author, date,source } = props
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>
          <img src={!imageurl ? "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw" : imageurl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-body-secondary">by {author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default Items
